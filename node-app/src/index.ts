import WASM_APP from '~/wasm';

export function hello() {
  console.log(WASM_APP.greet('up-tri'));
}

hello();
