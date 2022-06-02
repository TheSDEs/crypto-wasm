"use strict";

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const buffer = fs.readFileSync("./lib/dock_crypto_wasm_bg.wasm");

fs.writeFileSync(
  "./lib/dock_crypto_wasm_bs64.js",
  `
module.exports = Buffer.from('${buffer.toString("base64")}', 'base64');
`
);
