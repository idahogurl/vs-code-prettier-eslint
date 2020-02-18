# VS Code Prettier Eslint

Visual Studio Extension to format JavaScript code using [prettier-eslint](https://github.com/prettier/prettier-eslint) package.  
 
Once installed, open a JavaScript file. Press `CTRL + CMD + P` (macOS) or  `CTRL + Shift + P` (Windows/Linux) to format a file or a selection of code. 
You can enable the "Format on Save" setting to avoid entering the command all the time.

## Setup Format on Save
- Open user settings
  - On Windows/Linux - File > Preferences > Settings
  - On macOS - Code > Preferences > Settings
- Search for "Format On " and enable "Format on Save".
- Ensure both "Format on Input" and "Format on Paste" are disabled. They are not supported functionality. 
- Afterward, the file should format automatically once you save it. 

## Settings:
These are global settings. Support for workspace settings is coming soon. Workspace settings allow the settings below to have different values per project.
### Required:
---
#### Eslint Config File Name
-- The name of your Eslint config file. The extension assumes the file is located in the root folder.

#### Eslint  Config File Type
-- The file type of your Eslint config file (only JSON and YAML are supported)

### Optional:
---
#### Prettier Options File Name
-- The name of your Prettier options file. The extension assumes the file is located in the root folder.

#### Prettier Options File Type
-- The file type of your Prettier options file (only JSON and YAML are supported)
