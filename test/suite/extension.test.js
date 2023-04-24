jest.setTimeout(20000);

const path = require('path');
const fs = require('fs');
const helper = require('./helper');

require('../../dist/extension');

const basePath = path.join(__dirname, '..', 'fixtures');
const sourceFile = path.join(__dirname, '..', 'fixtures', 'test.js');

describe('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  beforeAll(async () => {
    await helper.changeConfig('[javascript]', {
      'editor.defaultFormatter': 'rvest.vs-code-prettier-eslint',
    });
  });

  test('Formats document using .eslintrc', async () => {
    const content = fs.readFileSync(sourceFile).toString().replace('/* eslint-disable */\n', '');
    const filePath = `${basePath}/temp/test.js`;
    fs.writeFileSync(filePath, content, { overwrite: true });
    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();

    expect(formatted).toMatchSnapshot();
  });

  test('Format document using .prettierrc', async () => {
    const document = await helper.openFile(sourceFile);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();

    expect(formatted).toMatchSnapshot();
  });

  test('setting "prettierLast" makes prettier run last', async () => {
    const content = fs.readFileSync(sourceFile).toString().replace('/* eslint-disable */\n', '');
    const filePath = `${basePath}/temp/test.js`;
    fs.writeFileSync(filePath, content, { overwrite: true });
    const document = await helper.openFile(filePath);
    const config = vscode.workspace.getConfiguration('vs-code-prettier-eslint');
    await config.update('prettierLast', 'true', vscode.ConfigurationTarget.Global);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    await config.update('prettierLast', undefined, vscode.ConfigurationTarget.Global);

    const formatted = document.getText();
    expect(formatted).toMatchSnapshot();
  });

  test('setting "eslintConfigPath" uses the target .eslintrc', async () => {
    const content = fs.readFileSync(sourceFile).toString().replace('/* eslint-disable */\n', '');
    const filePath = `${basePath}/temp/test.js`;
    fs.writeFileSync(filePath, content, { overwrite: true });
    const document = await helper.openFile(filePath);
    const config = vscode.workspace.getConfiguration('vs-code-prettier-eslint');
    await config.update('eslintConfigPath', `${basePath}/.eslintrc.second.js`, vscode.ConfigurationTarget.Global);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    await config.update('eslintConfigPath', undefined, vscode.ConfigurationTarget.Global);

    const formatted = document.getText();
    expect(formatted).toMatchSnapshot();
  });

  afterAll(() => {
    helper.clearConfig('[javascript]');
  });
});
