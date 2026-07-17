/* Classificazione didattica manuale delle domande: richiamo diretto o ragionamento. */
(function () {
  "use strict";

  const easy = `
    hq1 hq2 hq3 hq4 hq5 dq-h1-02 dq-h1-03 dq-h1-06
    hq6 hq7 hq8 hq9 hq10 dq-h2-01 dq-h2-03 dq-h2-05
    hq12 hq13 hq14 hq15 hq16 dq-h3-04 dq-h3-05
    hq17 hq18 hq19 hq20 hq21 dq-h4-04
    hq22 hq23 hq24 hq25 hq26 ex-h5-2 dq-h5-02 dq-h5-03
    hq27 hq28 hq29 hq30 hq31 dq-h6-04
    hq32 hq33 hq34 hq35 hq36 dq-h7-04 dq-h7-06
    hq37 hq38 hq39 hq40 dq-h8-04

    gq1 gq2 gq3 gq4 dq-g0-02 dq-g0-04
    gq5 gq6 gq7 gq8 dq-g1-03 dq-g1-05
    gq9 gq10 gq11 gq12 dq-g2-01 dq-g2-06
    gq13 gq14 gq15 gq16 dq-g3-01 dq-g3-02
    gq17 gq18 gq19 gq20 dq-g4-05
    gq21 gq22 gq23 gq24 dq-g5-01
    gq25 gq26 gq27 gq28 dq-g6-03 dq-g6-04
    gq29 gq30 gq31 gq32 dq-g7-01 dq-g7-06
    gq33 gq34 gq35 gq36 ex-g8-1 dq-g8-01 dq-g8-02
    gq37 gq38 gq39 gq40 dq-g9-04
    gq41 gq42 gq43 gq44 dq-g10-04
    gq45 gq46 gq47 gq48 dq-g11-01
    gq49 gq50 gq51 gq52 gq53 dq-g12-02 dq-g12-06
  `.trim().split(/\s+/);

  const hard = `
    ex-h1-1 ex-h1-2 dq-h1-01 dq-h1-04 dq-h1-05 dq-h1-07
    hq11 ex-h2-1 ex-h2-2 dq-h2-02 dq-h2-04 dq-h2-06 dq-h2-07 dq-h2-08
    ex-h3-1 ex-h3-2 dq-h3-01 dq-h3-02 dq-h3-03 dq-h3-06 dq-h3-07
    ex-h4-1 ex-h4-2 dq-h4-01 dq-h4-02 dq-h4-03 dq-h4-05 dq-h4-06 dq-h4-07
    ex-h5-1 dq-h5-01 dq-h5-04 dq-h5-05 dq-h5-06 dq-h5-07
    ex-h6-1 ex-h6-2 dq-h6-01 dq-h6-02 dq-h6-03 dq-h6-05 dq-h6-06 dq-h6-07
    ex-h7-1 ex-h7-2 dq-h7-01 dq-h7-02 dq-h7-03 dq-h7-05 dq-h7-07
    hq41 ex-h8-1 ex-h8-2 dq-h8-01 dq-h8-02 dq-h8-03 dq-h8-05 dq-h8-06 dq-h8-07

    ex-g0-1 ex-g0-2 dq-g0-01 dq-g0-03 dq-g0-05 dq-g0-06
    ex-g1-1 ex-g1-2 dq-g1-01 dq-g1-02 dq-g1-04 dq-g1-06
    ex-g2-1 ex-g2-2 dq-g2-02 dq-g2-03 dq-g2-04 dq-g2-05
    ex-g3-1 ex-g3-2 dq-g3-03 dq-g3-04 dq-g3-05 dq-g3-06
    ex-g4-1 ex-g4-2 dq-g4-01 dq-g4-02 dq-g4-03 dq-g4-04 dq-g4-06
    ex-g5-1 ex-g5-2 dq-g5-02 dq-g5-03 dq-g5-04 dq-g5-05 dq-g5-06 dq-g5-07
    ex-g6-1 ex-g6-2 dq-g6-01 dq-g6-02 dq-g6-05 dq-g6-06
    ex-g7-1 ex-g7-2 dq-g7-02 dq-g7-03 dq-g7-04 dq-g7-05
    ex-g8-2 dq-g8-03 dq-g8-04 dq-g8-05 dq-g8-06
    ex-g9-1 ex-g9-2 dq-g9-01 dq-g9-02 dq-g9-03 dq-g9-05 dq-g9-06
    ex-g10-1 ex-g10-2 dq-g10-01 dq-g10-02 dq-g10-03 dq-g10-05 dq-g10-06
    ex-g11-1 ex-g11-2 dq-g11-02 dq-g11-03 dq-g11-04 dq-g11-05 dq-g11-06
    ex-g12-1 ex-g12-2 dq-g12-01 dq-g12-03 dq-g12-04 dq-g12-05
  `.trim().split(/\s+/);

  const difficulty = {};
  easy.forEach((id) => { difficulty[id] = "easy"; });
  hard.forEach((id) => { difficulty[id] = "hard"; });

  window.QUESTION_DIFFICULTY = Object.freeze(difficulty);
})();
