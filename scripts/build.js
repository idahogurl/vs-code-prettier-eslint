// eslint-disable-next-line import/no-extraneous-dependencies
const esbuild = require('esbuild');

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
  external: ['vscode', '@typescript-eslint/parser', 'vue-eslint-parser', 'espree'],
  bundle: true,
  sourcemap: buildEnv.dev,
  minify: buildEnv.prod,
  watch: buildEnv.watch,
};

esbuild
  .build(options)
  .catch((err) => {
    throw err;
  });
