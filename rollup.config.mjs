// taken from https://github.com/glitch-txs/w3/blob/v1/packages/ui/react/walletconnect-legacy/rollup.config.js
import terser from '@rollup/plugin-terser';
// @ts-ignore
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import postcss from 'rollup-plugin-postcss';
// import postcssPresetEnv from 'postcss-preset-env';
// import autoprefixer from 'autoprefixer';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = undefined;

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: ['./src/index.ts', './src/markdown-reveal.ts'],
  output: [
    {
      dir: './public/static',
    },
  ],
  plugins: [
    json(),
    peerDepsExternal(),
    nodeResolve({ extensions, browser: true }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.browser.json',
    }),
    process.env.NODE_ENV === 'production' && terser(),
  ],
};
