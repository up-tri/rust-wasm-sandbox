# rust-wasm-sandbox

- nodejs app のビルド: `npm -w node-app run build`
- rust wasm のビルド: `npm run rust:build`
- サンプルファイルの実行 `node node-app/dist/index.js`

## structure

```
.
├── node-app
│   ├── package.json
│   ├── scripts
│   │   └── copy-wasm.cjs
│   ├── src
│   │   └── index.ts
│   └── tsconfig.json
├── package.json
└── rust-wasm
    ├── Cargo.toml
    └── src
        └── lib.rs
```
