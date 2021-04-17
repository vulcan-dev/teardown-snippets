# Teardown API Snippet

[![deepcode](https://www.deepcode.ai/api/gh/badge?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbGF0Zm9ybTEiOiJnaCIsIm93bmVyMSI6InZ1bGNhbi1kZXYiLCJyZXBvMSI6InRlYXJkb3duLXNuaXBwZXRzIiwiaW5jbHVkZUxpbnQiOmZhbHNlLCJhdXRob3JJZCI6Mjg2MjcsImlhdCI6MTYxNzA1MDY4Mn0.78oCcAi7rAhMn_kNPfIBW7cj7zp05yiR3pqpPcrPLWQ)](https://www.deepcode.ai/app/gh/vulcan-dev/teardown-snippets/_/dashboard?utm_content=gh%2Fvulcan-dev%2Fteardown-snippets) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) 

[![Badge for version for Visual Studio Code extension naereen.makefiles-support-for-vscode](https://vsmarketplacebadge.apphb.com/version/vulcan-dev.teardown-api-snippet.svg)](https://marketplace.visualstudio.com/items?itemName=vulcan-dev.teardown-api-snippet) [![Badge for version for Visual Studio Code extension naereen.makefiles-support-for-vscode](https://vsmarketplacebadge.apphb.com/installs/vulcan-dev.teardown-api-snippet.svg)](https://marketplace.visualstudio.com/items?itemName=vulcan-dev.teardown-api-snippet) [![Badge for rating for Visual Studio Code extension naereen.makefiles-support-for-vscode](https://vsmarketplacebadge.apphb.com/rating/vulcan-dev.teardown-api-snippet.svg)](https://marketplace.visualstudio.com/items?itemName=vulcan-dev.teardown-api-snippet)


Repository for my [Visual Studio Extension](https://marketplace.visualstudio.com/items?itemName=vulcan-dev.teardown-api-snippet)

# Teardown-API Snippets
Teardown API Snippets (https://teardowngame.com/modding/api.html)

## Example
![Example](https://i.imgur.com/ZQA3ui3.png "Example")

### 1.0.0

Initial release

### Release 1.0.1

- Cleaned up code
- Added description
- Added examples

### Release 1.0.2

- Updated the snippets I forgot to update

### Release 1.0.3

- Added function init()
- Added function tick(dt)
- Added function update(dt)
- Added function draw()

- When doing UiPush(), UiPop() will also get created and you cursor will be in between those two functions
```lua
UiPush()
  ...
UiPop()
```

### Release 1.0.4

- Added icon
- Added [git repository](https://github.com/vulcan-dev/teardown-snippets)
- Cleaned up file structure

### Release 1.0.5
- Added function descriptions
- Auto complete now adds the necessary function arguments

>![Params](https://i.imgur.com/xWpmDkd.png "Function Description")
>![Params](https://i.imgur.com/3WnDZR3.png "Function Parameters")

### Release 1.0.6
- Updated function arguments so it can handle all datatypes. Tabbing also now selects each argument when you create the function

>![1.0.6](https://i.imgur.com/cH1XQrO.png)
>![1.0.6](https://i.imgur.com/eLrd6vI.png)

### Release 1.3.6
- Added back init, tick, update, draw functions
- Added back all functions that don't have arguments

### Release 1.3.7
- Added datatype boolean

### Release 1.3.8
- Updated snippets to suit the new Teardown API to 0.7.0  

### Other
> I did try doing this for Sublime Text 3 but it doesn't allow multiline descriptions so I don't see the point because you'll have to go to the teardown website (I made this so you don't have to do that)

### Installation
> [1] Run the code from api.js on [this website](https://teardowngame.com/modding/api.html)  
[2] Copy the object from the return result  
[3] Paste that inside of data.json inside of src/  
[4] Run : python fix-json.py  
[5] This will create an output.json file in the src/ directory. From there you can do what you'd like

Thanks to [Thomasims](https://github.com/Thomasims) for helping with the scraping part with JS  
Thanks to [Cammy](https://github.com/camprevail) for helping me make an automated JSON fixer so I can parse the JSON