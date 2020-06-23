/* eslint-disable import/no-extraneous-dependencies */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

export default {
  input: './src/extension.js',
  output: {
    file: './dist/extension.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
    replace({
      exclude: 'node_modules/**',
      'commonjsRequire.resolve': () => 'require.resolve',
      'commonjsRequire(': () => 'require(',
    }),
  ],
  external: ['vscode', 'fs', 'path', 'module'],
};
