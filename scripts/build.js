/* eslint-disable import/no-extraneous-dependencies */
const esbuild = require('esbuild');
const textReplace = require('esbuild-plugin-text-replace');

const buildEnv = {
  dev: false,
  prod: false,
  watch: false,
};
const nodeEnv = process.env.NODE_ENV.split(',');

nodeEnv.forEach((key) => {
  if (!Object.hasOwn(buildEnv, key)) return;
  buildEnv[key] = true;
});

const options = {
  entryPoints: ['./src/extension.js'],
  outfile: './dist/extension.js',
  format: 'cjs',
  platform: 'node',
  external: ['vscode', '@typescript-eslint/parser', 'vue-eslint-parser'],
  bundle: true,
  sourcemap: buildEnv.dev,
  minify: buildEnv.prod,
  watch: buildEnv.watch,
  plugins: [
    textReplace({
      include: /rule-tester/,
      // TODO: Until I figure out how to resolve
      pattern: [['const espreePath = require.resolve("espree");', 'const espreePath = ""']],
    }),
  ],
};

esbuild.build(options).catch((err) => {
  throw err;
});
