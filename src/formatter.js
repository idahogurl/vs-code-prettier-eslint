import fs from 'fs';
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
  text, filePath,
}) {
  const formatted = format({
    text, filePath,
  });
  return formatted;
}
