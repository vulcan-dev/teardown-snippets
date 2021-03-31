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

Thanks to [Thomasims](https://github.com/Thomasims) for helping with the scraping part with JS  
Thanks to [Cammy](https://github.com/camprevail) for helping me make an automated JSON fixer so I can parse the JSON