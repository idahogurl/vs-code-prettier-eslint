/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

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
