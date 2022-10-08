// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const path = require('path');
const fs = require('fs');
const helper = require('./helper');

require('../../dist/extension');

const basePath = path.join(__dirname, '..', 'fixtures');
const sourceFile = path.join(__dirname, '..', 'fixtures', 'test.js');

describe('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  beforeAll(async () => {
    await helper.openWorkspace(basePath);
    await helper.changeConfig('[javascript]', {
      'editor.defaultFormatter': 'rvest.vs-code-prettier-eslint',
    });
  });

  test('Formats document using .eslintrc', async () => {
    const sourceDocument = await helper.openFile(sourceFile);
    const content = sourceDocument.getText().replace('/* eslint-disable */\n', '');
    const filePath = `${basePath}/temp.js`;

    fs.writeFileSync(filePath, content, { overwrite: true });
    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();

    expect(formatted).toMatchSnapshot();
  });

  test('Format document using .prettierrc', async () => {
    const sourceDocument = await helper.openFile(sourceFile);
    const content = sourceDocument.getText().replace('// prettier-ignore\n', '');
    const filePath = `${basePath}/temp2.js`;
    fs.writeFileSync(filePath, content, { overwrite: true });
    const document = await helper.openFile(filePath);
    await vscode.commands.executeCommand('editor.action.formatDocument');
    const formatted = document.getText();

    expect(formatted).toMatchSnapshot();
  });
  afterAll(() => {
    helper.clearConfig('[javascript]');
  });
});
