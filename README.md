![](https://gitlab.com/idahogurl/vs-code-prettier-eslint/-/blob/5efc268af7132a8bdba50843386b007cca0d7794/icon.png)
# VS Code Prettier Eslint

Visual Studio Extension to format JavaScript code using [prettier-eslint](https://github.com/prettier/prettier-eslint) package.

The configuration files for Eslint and Prettier will be resolved starting from the location of the file being formatted, and searching up the file tree until a config file is (or isn't) found.

## Eslint Configuration
The name of your Eslint configuration file must match the pattern `.eslintrc.*` (JS, JSON, or YAML)

## Prettier Configuration
### (From https://prettier.io/docs/en/configuration.html)

Prettier uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support. This means you can configure prettier via (in order of precedence):

-   A `"prettier"` key in your `package.json` file.
-   A `.prettierrc` file, written in JSON or YAML, with optional extensions: `.json/.yaml/.yml` (without extension takes precedence).
-   A `.prettierrc.js` or `prettier.config.js` file that exports an object.
-   A `.prettierrc.toml` file, written in TOML (the `.toml` extension is _required_).

The configuration file will be resolved starting from the location of the file being formatted, and searching up the file tree until a config file is (or isn't) found.

## Running Formatter  
Once installed, open a JavaScript file. Press `CTRL + CMD + P` (macOS) or `CTRL + Shift + P` (Windows/Linux) to format a file or a selection of code.

You can enable the "Format on Save" setting to avoid entering the command all the time.


## Setup Format on Save

- Open User or Workspace settings
  - On Windows/Linux - File > Preferences > Settings
  - On macOS - Code > Preferences > Settings

- Search for `"Format on "` and enable `"Format on Save"`.

- Ensure both `"Format on Input"` and `"Format on Paste"` are disabled. They are not supported functionality.

- Afterward, the file should format automatically once you save it.