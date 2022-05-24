import fs from 'fs';
import path from 'path';
import findUp from 'find-up';
import nodeIgnore from 'ignore';

const LINE_SEPARATOR_REGEX = /(\r|\n|\r\n)/;

function getIsIgnored(filename) {
  const ignoreLines = fs
    .readFileSync(filename, 'utf8')
    .split(LINE_SEPARATOR_REGEX)
    .filter((line) => Boolean(line.trim()));
  const instance = nodeIgnore();
  instance.add(ignoreLines);
  return instance.ignores.bind(instance);
}

export function isFilePathMatchedByEslintIgnore(filePath) {
  const { dir } = path.parse(filePath);
  const eslintIgnorePath = findUp.sync('.eslintignore', { cwd: dir });
  if (!eslintIgnorePath) {
    return false;
  }

  const eslintIgnoreDir = path.parse(eslintIgnorePath).dir;
  const filePathRelativeToEslintIgnoreDir = path.relative(eslintIgnoreDir, filePath);
  const isIgnored = getIsIgnored(eslintIgnorePath);
  return isIgnored(filePathRelativeToEslintIgnoreDir);
}

export function isFilePathMatchedByPrettierIgnore(filePath) {
  const { dir } = path.parse(filePath);
  const prettierIgnorePath = findUp.sync('.prettierignore', { cwd: dir });
  if (!prettierIgnorePath) {
    return false;
  }

  const prettierIgnoreDir = path.parse(prettierIgnorePath).dir;
  const filePathRelativeToPrettierIgnoreDir = path.relative(prettierIgnoreDir, filePath);
  const isIgnored = getIsIgnored(prettierIgnorePath);
  return isIgnored(filePathRelativeToPrettierIgnoreDir);
}
