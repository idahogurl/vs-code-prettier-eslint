// eslint-disable-next-line import/no-unresolved
const vscode = require('vscode');

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

module.exports = {
  changeConfig,
  clearConfig,
  openFile,
};
