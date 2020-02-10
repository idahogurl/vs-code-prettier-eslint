import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import format from 'prettier-eslint';

function readConfigFile(fileName, fileType) {
  try {
    const contents = fs.readFileSync(fileName).toString('UTF-8');
    if (fileType === 'json') {
      return JSON.parse(contents);
    }
    if (fileType === 'yaml') {
      return yaml.safeLoad(contents);
    }
  } catch (err) {
    return undefined;
  }
}

export default function formatText({
  text, filePath, workspaceFolder, eslintFileName, eslintFileType, prettierFileName,
  prettierFileType,
}) {
  const eslintConfig = readConfigFile(`${workspaceFolder}/${eslintFileName}`, eslintFileType);
  if (!eslintConfig) {
    throw new Error(`Cannot open or find your Eslint configuration file at ${workspaceFolder}/${eslintFileName}`);
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
}
