# FigmaConsoleKit

Browser Devtool console is Figma's best scripting tool, FigmaConsoleKit can make it better,  add a debugging-friendly API, most commonly used libraries(`axios`,`lodash`,`mathjs` ).


<img width="486px" src="https://user-images.githubusercontent.com/82231420/122532535-31205e80-d053-11eb-8d2c-af5bb0c8d028.gif"/>

## Usege

paste code into figma console

```js
fetch("https://raw.githubusercontent.com/Moonvy/FigmaConsoleKit/master/dist/FigmaConsoleKit.js?v1.0.0").then((r) =>
    r.text().then((c) => eval(c))
)
```

or

paste [the code](dist/FigmaConsoleKit.js) into console

### Access

-   `activeNodes` : currently selected layers (multiple)
-   `activeNode` : currently selected layer (only one is fetched)

### Print

-   `show(node)` : Show layer information
-   `json(node)` converts the layer information into a JSON string

### Utils

-   [`axios`](): best JavaScript HTTP client.
-   [`lodash`](): a modern JavaScript utility library delivering modularity, performance & extras.
-   [`mathjs`](https://mathjs.org/): an extensive math library.





