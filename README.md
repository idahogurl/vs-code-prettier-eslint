![](https://gitlab.com/idahogurl/vs-code-prettier-eslint/-/raw/5b0d100df2eef87a3cb8ec7d8e125f6c5e5e6a9b/icon.png)

# VS Code Prettier ESLint

A Visual Studio Extension to format JavaScript code using the [prettier-eslint](https://github.com/prettier/prettier-eslint) package.

## Prerequisites

Like `prettier-eslint`, this plugin requires both `prettier` and `eslint` packages to be installed either locally or globally.


## Configuration

The extension uses your ESLint and Prettier configuration files. These files are resolved starting from the location of the file being formatted, and searching up the file tree until a config file is (or isn't) found.

### ESLint Configuration File

(From https://eslint.org/docs/user-guide/configuring)

Use a JavaScript, JSON or YAML file to specify configuration information for an entire directory and all of its subdirectories. This can be in the form of an [`.eslintrc.*`](https://eslint.org/docs/user-guide/configuring#configuration-file-formats) file or an `eslintConfig` field in a [`package.json`](https://docs.npmjs.com/files/package.json) file.

### Prettier Configuration File

(From https://prettier.io/docs/en/configuration.html)

Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support. This means you can configure prettier via (in order of precedence):

- A `"prettier"` key in your `package.json` file.
- A `.prettierrc` file, written in JSON or YAML, with optional extensions: `.json/.yaml/.yml` (without extension takes precedence).
- A `.prettierrc.js` or `prettier.config.js` file that exports an object.
- A `.prettierrc.toml` file, written in TOML (the `.toml` extension is _required_).

## Running Formatter

Once installed, open a JavaScript file. Press `CTRL + CMD + P` (macOS) or `CTRL + Shift + P` (Windows/Linux) to format a file or a selection of code.

You can enable the `Format on Save` setting to avoid entering the command all the time.

## Default Formatter
- Open the file you want to format
- Press `CTRL + SHIFT + P` (Windows/Linux) or `CMD + SHIFT + P` (macOS) to open the command palette
- Start typing `Format Document With` and select it
- Choose the bottom item `Configure Default Formatter`
- Choose `Prettier ESLint`

## Setup Format on Save
- Set `Prettier Eslint` as the default formatter as detailed above
- Open User or Workspace settings
  - On Windows/Linux - File > Preferences > Settings
  - On macOS - Code > Preferences > Settings
- Start typing `Format on` and select it
- Check `Format on Save` (found mid-page in the right panel)
- Ensure both `Format on Input` and `Format on Paste` are disabled. They are not supported functionality
- Afterward, the file should format automatically once you save it
