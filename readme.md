# FigmaConsoleKit

In Figma's browser console, Add a debugging-friendly API

## Usege

paste code into figma console

```js
fetch("https://raw.githubusercontent.com/Moonvy/FigmaConsoleKit/master/dist/FigmaConsoleKit.js?v1.0.0").then((r) =>r.text().then((c) => eval(c)))
```

or

paste [the code](dist/FigmaConsoleKit.js) into console

### Access

-   `activeNodes` : currently selected layers (multiple)
-   `activeNode` : currently selected layer (only one is fetched)
    ![](./shot/shot.gif)

### Print

-   `show(node)` : Show layer information
-   `json(node)` converts the layer information into a JSON string

### Utils

-   [`axios`](): best JavaScript HTTP client.
-   [`lodash`](): a modern JavaScript utility library delivering modularity, performance & extras.
-   [`mathjs`](https://mathjs.org/): an extensive math library.
