const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const format = require('prettier-eslint');

function readConfigFile(fileName, fileType) {
  try {
    const contents = fs.readFileSync(fileName).toString('UTF-8');
    if (fileType === 'json') {
      return JSON.parse(contents);
    }
    if (fileType === 'yaml') {
      return yaml.parse(contents);
    }
  } catch (err) {
    return undefined;
  }
}

module.exports = function formatText({
  text, filePath, eslintFileName, eslintFileType, prettierFileName, prettierFileType,
}) {
  const workspaceFolder = path.dirname(filePath);
  const eslintConfig = readConfigFile(`${workspaceFolder}/${eslintFileName}`, eslintFileType);
  if (!eslintConfig) {
    throw new Error('Cannot open or find your Eslint configuration file');
  }

  // prettier options are optional
  let prettierOptions;
  if (prettierFileName) {
    prettierOptions = readConfigFile(`${workspaceFolder}/${prettierFileName}`, prettierFileType);
    if (!prettierOptions) {
      throw new Error('Cannot open or find your Prettier options file');
    }
  }

  const formatted = format({
    text, eslintConfig, prettierOptions, filePath,
  });
  return formatted;
};
