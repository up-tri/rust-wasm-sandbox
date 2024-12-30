const fs = require("fs");
const path = require("path");

if (!fs.existsSync(path.resolve(__dirname, "../src/wasm"))) {
  throw new Error("directory: ~/src/wasm not found");
}

if (!fs.existsSync(path.resolve(__dirname, "../dist"))) {
  throw new Error("directory: ~/dist not found");
}

fs.cpSync(
  path.resolve(__dirname, "../src/wasm/index_bg.wasm"),
  path.resolve(__dirname, "../dist/wasm/index_bg.wasm"),
  { recursive: true }
);