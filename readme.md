# 🏂 FigmaConsoleKit

Browser Devtool console is Figma's best scripting tool, FigmaConsoleKit can make it better, add a debugging-friendly API, most commonly used libraries(`axios`,`lodash`,`mathjs`,`Color`,`font-color-contrast`).

<img width="486px" src="https://user-images.githubusercontent.com/82231420/122532535-31205e80-d053-11eb-8d2c-af5bb0c8d028.gif"/>

## Usege

- paste code into figma console

```js
fetch(
  "https://raw.githubusercontent.com/Moonvy/FigmaConsoleKit/master/dist/FigmaConsoleKit.js?v1.5.0"
).then((r) => r.text().then((c) => eval(c)));
```

or

- create a browser bookmark and add the code as address

```js
javascript:(function()%7Bfetch(%22https%3A%2F%2Fraw.githubusercontent.com%2FMoonvy%2FFigmaConsoleKit%2Fmaster%2Fdist%2FFigmaConsoleKit.js%3Fv1.5.0%22).then((r)%20%3D%3E%20r.text().then((c)%20%3D%3E%20eval(c)))%7D)()
```

or

- paste [the code](dist/FigmaConsoleKit.js) into console

### Access

- 🔥 `activeNodes` currently selected layers (multiple)
- 🔥 `activeNode` currently selected layer (only one is fetched)
- `getChildrenByName(node)` get multiple sublayers by layer name
- `getClidByName(node)` get a sublayer by layer name
- `getNodes(node, eachFunc)` get nodes from all children by eachFunc.
- `getNodesByName(node, name)` get nodes with the specified name from all children
- `getNodesByType(node, type)` get nodes with the specified type from all children
- `getNodesByTypeName(node, type, name)` get nodes with the specified type and name from all children

![](./shot/shot.gif)

### Print

- `show(node)` Show layer information
- `json(node)` converts the layer information into a JSON string

### Color

- `toFloatColor(intColor)` [255,255,255] => {r:1.0, g:1.0, b:1.0}
- `toIntColor(floatColor)` {r:1.0, g:1.0, b:1.0} => [255,255,255]

### Text

- `loadNodeFonts(node)` prepare the font used for a layer
- `setNodeText(node, text)` set the text content of the text layer

### Tidy

- `tidyX(nodes, cols, gap)` rearrange layers by number of columns

### Export

- `download([{name, input}])` download multiple Unit8Array as zip file ([client-zip](https://www.npmjs.com/package/client-zip)).
- `downloadZip()` ([client-zip](https://www.npmjs.com/package/client-zip)).

### Utils

- [`axios`](https://github.com/axios/axios) best JavaScript HTTP client.
- [`font-color-contrast`](https://github.com/russoedu/font-color-contrast#readme) use black or white font according to the given background color.
- [`lodash`](https://github.com/lodash/lodash) a modern JavaScript utility library delivering modularity, performance & extras.
- [`mathjs`](https://mathjs.org/) an extensive math library.
- [`client-zip`](https://www.npmjs.com/package/client-zip) download all the files in one click.
- [`Color`](https://github.com/Qix-/color#readme) immutable color conversion and manipulation with support for CSS color strings.
