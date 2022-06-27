import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from "vite-plugin-top-level-await";
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const builtinsPlugin = builtins({crypto: true});
builtinsPlugin.name = 'builtins'; // required, see https://github.com/vitejs/vite/issues/728

const globalsPlugin = globals();
globalsPlugin.name = 'globals'; // required, see https://github.com/vitejs/vite/issues/728

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "api/v1": "http://localhost:4005/"
    },
  },
  plugins: [
    react(), 
    wasm({
      // By default ALL `.wasm` imports will be transformed to WebAssembly ES module.
      // You can also set a filter (function or regex) to match files you want to transform.
      // Other files will fallback to Vite's default WASM loader (i.e. You need to call `initWasm()` for them).
      filter: /syntect_bg.wasm$/
    }),
    topLevelAwait()
  ],
  rollupInputOptions: {
    plugins: [
        globalsPlugin,
        builtinsPlugin,
    ]
},
  optimizeDeps: {
    allowNodeBuiltins: ["seedrandom", "crypto", "web3"],
  },
})


