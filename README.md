
# VS Code Prettier Eslint

 Visual Studio Extension to format JavaScript code using [prettier-eslint](https://github.com/prettier/prettier-eslint) package. 

Once installed it, open a JavaScript file and press `CTRL + CMD + P`(MacOS) or  `CTRL + Shift + P`  (Windows) to manually format a file or a selection of code. If you don’t want to format your file manually every time, you can format it on save as well.
## Format on Save
- Open up the VS Code User's settings/preferences as UI, search for "Format On " and enable "Format on Save".
- Ensure both "Format on Input" and "Format on Paste" are disabled. They are not supported functionality. 
- Afterward, the file should format automatically once you save it. 

## Settings:
### Required:

#### Eslint File Name
The name of your Eslint config file. The extension assumes the file is located in workspace root.

#### Eslint File Type
The file type of your Eslint config file (only JSON and YAML are supported)

### Optional:
#### Prettier Options File Name
The name of your Eslint config file. The extension assumes the file is located in workspace root.

#### Prettier Options File Type
The file type of your Prettier options file (only JSON and YAML are supported)