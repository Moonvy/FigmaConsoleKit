import { getActiveNode, getActiveNodes, setActiveNode, setActiveNodes } from "./lib/active"

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
