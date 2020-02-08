const fs = require('fs');
const format = require('prettier-eslint');

function getPrettierOptions(workspaceFolder) {
    // check if exists
    try {
        const config = fs.readFileSync(workspaceFolder + '/.prettierrc');
        return JSON.parse(config.toString('UTF-8'));
    } catch (err) {
        return undefined;
    }
}

function getEslintConfig(workspaceFolder) {
    try {
        const config = fs.readFileSync(workspaceFolder + '/.eslintrc');
        return JSON.parse(config.toString('UTF-8'));
    } catch (err) {
        return undefined;
    }
}

module.exports = function formatText(text, workspaceFolder) {
    const eslintConfig = getEslintConfig(workspaceFolder);
    if (!eslintConfig) {
        throw new Error('Cannot open or find .eslintrc');
    }
    const prettierOptions = getPrettierOptions(workspaceFolder);

    const formatted = format({ text, eslintConfig, prettierOptions });
    return formatted;

};

