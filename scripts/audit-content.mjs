#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const files = [
  "content.js",
  "quiz-extra.js",
  "quiz-double.js",
  "history-full.js",
  "geography-full.js",
  "question-difficulty.js"
];
const expected = {
  total: 272,
  subjects: { history: 114, geography: 158 },
  difficulty: { easy: 130, hard: 142 }
};
const errors = [];
const fail = (message) => errors.push(message);
const nonEmpty = (value) => typeof value === "string" && value.trim().length > 0;

const sandbox = { window: Object.create(null) };
const context = vm.createContext(sandbox, {
  name: "content-audit",
  codeGeneration: { strings: false, wasm: false }
});

for (const file of files) {
  const target = path.join(root, file);
  if (!fs.existsSync(target)) {
    fail(`File mancante: ${file}`);
    continue;
  }
  try {
    vm.runInContext(fs.readFileSync(target, "utf8"), context, { filename: file, timeout: 1000 });
  } catch (error) {
    fail(`Caricamento ${file}: ${error.message}`);
  }
}

const data = sandbox.window.STUDY_DATA;
const difficulties = sandbox.window.QUESTION_DIFFICULTY;
const fullTexts = sandbox.window.FULL_TEXTS;
const banks = [sandbox.window.EXTRA_QUESTIONS, sandbox.window.DOUBLE_QUESTIONS];
const allQuestions = [];
const knownQuestionIds = new Set();
const knownChapterIds = new Set();
const counts = { history: 0, geography: 0, easy: 0, hard: 0 };
const coverage = new Map();

if (!data?.subjects || typeof data.subjects !== "object") fail("window.STUDY_DATA.subjects non valido");
if (!difficulties || typeof difficulties !== "object") fail("window.QUESTION_DIFFICULTY non valido");
if (!fullTexts || typeof fullTexts !== "object") fail("window.FULL_TEXTS non valido");

for (const subjectId of ["history", "geography"]) {
  const subject = data?.subjects?.[subjectId];
  if (!subject || !Array.isArray(subject.chapters) || !Array.isArray(subject.questions)) {
    fail(`Materia non valida: ${subjectId}`);
    continue;
  }

  const subjectChapterIds = new Set();
  for (const chapter of subject.chapters) {
    if (!chapter || !nonEmpty(chapter.id)) {
      fail(`${subjectId}: capitolo senza ID valido`);
      continue;
    }
    if (knownChapterIds.has(chapter.id)) fail(`ID capitolo duplicato: ${chapter.id}`);
    knownChapterIds.add(chapter.id);
    subjectChapterIds.add(chapter.id);
    coverage.set(chapter.id, { easy: 0, hard: 0 });

    const full = fullTexts?.[chapter.id];
    if (!full || !Array.isArray(full.sections) || !full.sections.length) {
      fail(`FULL_TEXTS mancante o vuoto: ${chapter.id}`);
    } else {
      for (const [index, section] of full.sections.entries()) {
        if (!nonEmpty(section?.title) || !Array.isArray(section?.paragraphs) || !section.paragraphs.length || !section.paragraphs.every(nonEmpty)) {
          fail(`FULL_TEXTS ${chapter.id}, sezione ${index + 1}: struttura non valida`);
        }
      }
    }
  }

  const subjectQuestions = [
    ...subject.questions,
    ...banks.flatMap((bank) => Array.isArray(bank?.[subjectId]) ? bank[subjectId] : [])
  ];
  counts[subjectId] = subjectQuestions.length;

  for (const [index, question] of subjectQuestions.entries()) {
    const label = nonEmpty(question?.id) ? question.id : `${subjectId}[${index}]`;
    allQuestions.push(question);
    if (!question || typeof question !== "object") {
      fail(`${label}: domanda non valida`);
      continue;
    }
    if (!nonEmpty(question.id)) fail(`${label}: ID mancante`);
    else if (knownQuestionIds.has(question.id)) fail(`ID domanda duplicato: ${question.id}`);
    else knownQuestionIds.add(question.id);
    if (!subjectChapterIds.has(question.chapter)) fail(`${label}: capitolo non valido (${question.chapter})`);
    if (!nonEmpty(question.prompt)) fail(`${label}: prompt mancante`);
    if (!Array.isArray(question.options) || question.options.length < 2 || !question.options.every(nonEmpty)) fail(`${label}: options non valide`);
    if (!Number.isInteger(question.answer) || question.answer < 0 || question.answer >= (question.options?.length || 0)) fail(`${label}: answer non valido`);
    if (!nonEmpty(question.explanation)) fail(`${label}: explanation mancante`);

    const difficulty = difficulties?.[question.id];
    if (difficulty !== "easy" && difficulty !== "hard") {
      fail(`${label}: difficulty esplicita mancante o non valida`);
    } else {
      counts[difficulty] += 1;
      const chapterCoverage = coverage.get(question.chapter);
      if (chapterCoverage) chapterCoverage[difficulty] += 1;
    }
  }
}

if (allQuestions.length !== expected.total) fail(`Domande totali: attese ${expected.total}, trovate ${allQuestions.length}`);
for (const subjectId of ["history", "geography"]) {
  if (counts[subjectId] !== expected.subjects[subjectId]) fail(`${subjectId}: attese ${expected.subjects[subjectId]}, trovate ${counts[subjectId]}`);
}
for (const difficulty of ["easy", "hard"]) {
  if (counts[difficulty] !== expected.difficulty[difficulty]) fail(`${difficulty}: attese ${expected.difficulty[difficulty]}, trovate ${counts[difficulty]}`);
}
for (const [chapterId, chapterCoverage] of coverage) {
  for (const difficulty of ["easy", "hard"]) {
    if (chapterCoverage[difficulty] < 5) fail(`${chapterId}: soltanto ${chapterCoverage[difficulty]} domande ${difficulty}`);
  }
}
for (const id of Object.keys(difficulties || {})) {
  if (!knownQuestionIds.has(id)) fail(`Classificazione senza domanda: ${id}`);
}

if (errors.length) {
  console.error(`Audit contenuti: FALLITO (${errors.length} errori)`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log("Audit contenuti: OK");
  console.log(`- ${allQuestions.length} domande (${counts.history} Storia, ${counts.geography} Geografia)`);
  console.log(`- ${counts.easy} easy, ${counts.hard} hard`);
  console.log(`- ${knownChapterIds.size} capitoli con FULL_TEXTS e copertura minima 5+5`);
}
