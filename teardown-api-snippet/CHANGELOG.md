# Change Log

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
