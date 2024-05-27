'use strict';

/**
 * おまけ : ロゴ的な感じでfigletを表示しておこう……
 */
console.log(`\
                    __           _____                      __               ___             ___              _
  _______ ____  ___/ /__  __ _  / ___/__ ___  ___ _______ _/ /____  ____    / _/__  ____    / _/__  __ ______(_)__ ____
 / __/ _ \`/ _ \\/ _  / _ \\/  ' \\/ (_ / - _) _ \\/ -_) __/ _ \`/ __/ _ \\/ __/  / _/ _ \\/ __/   / _/ _ \\/ // / __/ / -_) __/
/_/  \\_,_/_//_/\\_,_/\\___/_/_/_/\\___/\\__/_//_/\\__/_/  \\_,_/\\__/\\___/_/     /_/ \\___/_/     /_/ \\___/\\_,_/_/ /_/\\__/_/   
`);

/**
 * 定数の定義 : 幅・高さ
 */
/** @type {Number} - 板の幅。単位はmm*/
const WIDTH = 600;
/** @type {Number} - 板の高さ。単位はmm */
const HEIGHT = 900;

/**
 * XY平面上に点を2つとる。
 * 周り3mmを取り除いて、1mm単位でとる
 */
const x1 = Math.floor(Math.random() * (WIDTH - 6)) + 3;
const y1 = Math.floor(Math.random() * (HEIGHT - 6)) + 3;
const x2 = Math.floor(Math.random() * (WIDTH - 6)) + 3;
const y2 = Math.floor(Math.random() * (HEIGHT - 6)) + 3;

/**
 * 2点間の距離を求める
 */
const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

/**
 * 距離の(π/2)倍〜π倍の間で、ランダムな値を"紐の長さ"として生成する(1mm単位)
 */
const ropeLength = Math.floor(Math.random() * (Math.PI * distance / 2) + Math.PI * distance / 2);

/**
 * 結果をまとめて表示する
 */
console.log(`\
板のサイズ: ${WIDTH}mm x ${HEIGHT}mm

点1: (${("" + x1).padStart(3, " ")}mm, ${("" + y1).padStart(3, " ")}mm)
点2: (${("" + x2).padStart(3, " ")}mm, ${("" + y2).padStart(3, " ")}mm)

2点間の距離: ${distance.toFixed(2)}mm
紐の長さ: ${ropeLength}mm
(倍率 : 約${(ropeLength / distance).toFixed(4)}倍)
`);
