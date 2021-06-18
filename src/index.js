import { getActiveNode, getActiveNodes, setActiveNode, setActiveNodes } from "./lib/active"

import lodash from "loadsh"
import axios from "axios"
import * as mathjs from "mathjs"

console.log(
    `%c[FimgaConsoleKit] v${VERSION} Landed!`,
    `border: 2px solid rgba(65, 40, 190, 0.09); background: #4128BE; color:#fff; border-radius: 4px; padding: 2px  4px;`,
    `https://github.com/Moonvy/FigmaConsoleKit`
)

window._ = lodash
window.lodash = lodash
window.axios = axios
window.mathjs = mathjs

Object.defineProperty(window, "activeNode", {
    configurable: true,
    get: getActiveNode,
    set: setActiveNode,
})

Object.defineProperty(window, "activeNodes", {
    configurable: true,
    get: getActiveNodes,
    set: setActiveNodes,
})

// -----
import { show, json } from "./lib/json"
window.show = show
window.json = json
