// eslint-disable-next-line import/no-unresolved
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

async function changeConfig(section, settings) {
  const config = vscode.workspace.getConfiguration();
  await config.update(section, settings, vscode.ConfigurationTarget.Global);
}

async function clearConfig(section) {
  await changeConfig(section, {});
}

async function openFile(filePath) {
  const openPath = vscode.Uri.file(filePath);
  const document = await vscode.workspace.openTextDocument(openPath);
  await vscode.window.showTextDocument(document);
  return document;
}

async function closeFile() {
  await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
}

function writeFile(fileName, content) {
  const filePath = path.join(__dirname, '..', 'fixtures', fileName);
  fs.writeFileSync(filePath, content, { overwrite: true });
  return filePath;
}

module.exports = {
  changeConfig,
  clearConfig,
  openFile,
  closeFile,
  writeFile,
};
