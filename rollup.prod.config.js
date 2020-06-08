/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/extension.js',
  output: {
    file: './dist/extension.js',
    format: 'cjs',
    sourcemap: false,
    plugins: [terser()],
  },
  plugins: [resolve({ preferBuiltins: true }), commonjs()],
  external: ['vscode', 'fs', 'path', 'module'],
};
