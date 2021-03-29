# Teardown-API Snippets
Teardown API Snippets (https://teardowngame.com/modding/api.html)

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

Thanks to [Thomasims](https://github.com/Thomasims) for helping with the scraping part with JS  
Thanks to [Cammy](https://github.com/camprevail) for helping me make an automated JSON fixer so I can parse the JSON