import fs from 'fs';
import path from 'path';
import findUp from 'find-up';
import nodeIgnore from 'ignore';

const LINE_SEPERATOR_REGEX = /(\r|\n|\r\n)/;

function findUpEslintignoreSync(filename, cwd) {
  return findUp.sync('.eslintignore', { cwd });
}

function findUpPrettierignoreSync(filename, cwd) {
  return findUp.sync('.prettierignore', { cwd });
}

function getIsIgnored(filename) {
  const ignoreLines = fs
    .readFileSync(filename, 'utf8')
    .split(LINE_SEPERATOR_REGEX)
    .filter((line) => Boolean(line.trim()));
  const instance = nodeIgnore();
  instance.add(ignoreLines);
  return instance.ignores.bind(instance);
}

function getNearestEslintignorePath(filePath) {
  const { dir } = path.parse(filePath);
  return findUpEslintignoreSync('.eslintignore', dir);
}

export function isFilePathMatchedByEslintignore(filePath) {
  const eslintignorePath = getNearestEslintignorePath(filePath);
  if (!eslintignorePath) {
    return false;
  }

  const eslintignoreDir = path.parse(eslintignorePath).dir;
  const filePathRelativeToEslintignoreDir = path.relative(eslintignoreDir, filePath);
  const isIgnored = getIsIgnored(eslintignorePath);
  return isIgnored(filePathRelativeToEslintignoreDir);
}

function getNearestPrettierignorePath(filePath) {
  const { dir } = path.parse(filePath);
  return findUpPrettierignoreSync('.prettierignore', dir);
}

export function isFilePathMatchedByPrettierignore(filePath) {
  const prettierignorePath = getNearestPrettierignorePath(filePath);
  if (!prettierignorePath) {
    return false;
  }

  const prettierignoreDir = path.parse(prettierignorePath).dir;
  const filePathRelativeToPrettierignoreDir = path.relative(prettierignoreDir, filePath);
  const isIgnored = getIsIgnored(prettierignorePath);
  return isIgnored(filePathRelativeToPrettierignoreDir);
}
