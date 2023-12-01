const { parentPort, workerData } = require('worker_threads');
const format = require('./formatter');

const {
  text, prettierEslintPath, filePath, extensionConfig,
} = workerData;

format({
  text,
  prettierEslintPath,
  filePath,
  extensionConfig,
}).then((formatted) => {
  parentPort.postMessage(formatted);
});
