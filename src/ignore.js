import fs from 'fs';
import path from 'path';
import { findUpSync } from 'find-up';
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

export function isFilePathMatchedByEslintIgnore(filePath, workspaceDir) {
  const options = { cwd: path.dirname(filePath) };
  if (workspaceDir) {
    options.stopAt = workspaceDir;
  }
  const eslintIgnorePath = findUpSync('.eslintignore', options);
  if (!eslintIgnorePath) {
    return false;
  }

  const eslintIgnoreDir = path.dirname(eslintIgnorePath);
  const filePathRelativeToEslintIgnoreDir = path.relative(eslintIgnoreDir, filePath);
  const isIgnored = getIsIgnored(eslintIgnorePath);
  return isIgnored(filePathRelativeToEslintIgnoreDir);
}

export function isFilePathMatchedByPrettierIgnore(filePath, workspaceDir) {
  const options = { cwd: path.dirname(filePath) };
  if (workspaceDir) {
    options.stopAt = workspaceDir;
  }
  const prettierIgnorePath = findUpSync('.prettierignore', options);
  if (!prettierIgnorePath) {
    return false;
  }

  const prettierIgnoreDir = path.dirname(prettierIgnorePath);
  const filePathRelativeToPrettierIgnoreDir = path.relative(prettierIgnoreDir, filePath);
  const isIgnored = getIsIgnored(prettierIgnorePath);
  return isIgnored(filePathRelativeToPrettierIgnoreDir);
}
