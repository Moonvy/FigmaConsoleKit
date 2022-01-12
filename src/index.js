import {
  getActiveNode,
  getActiveNodes,
  setActiveNode,
  setActiveNodes,
} from "./lib/active";
import { toFloatColor, toIntColor } from "./lib/color";
import { getChildrenByName, getClidByName } from "./lib/get";
import { tidyX } from "./lib/tidy";
import { show, json } from "./lib/json";
import { loadNodeFonts, setNodeText } from "./lib/text";


import lodash from "loadsh";
import axios from "axios";
import fontColorContrast from "font-color-contrast";
import Color from "color";
import * as mathjs from "mathjs";

console.log(
  `%c[FimgaConsoleKit] v${VERSION} Landed!`,
  `border: 2px solid rgba(65, 40, 190, 0.09); background: #4128BE; color:#fff; border-radius: 4px; padding: 2px  4px;`,
  `https://github.com/Moonvy/FigmaConsoleKit`
);

let fkit = {
  fontColorContrast,
  axios,
  mathjs,
  lodash,
  Color,
  // ----
  loadNodeFonts,
  setNodeText,
  getChildrenByName,
  getClidByName,
  toFloatColor,
  toIntColor,
  tidyX,
  show,
  json,
};

Object.assign(window, fkit);
window._ = lodash;
window.fkit = fkit;

Object.defineProperty(window, "activeNode", {
  configurable: true,
  get: getActiveNode,
  set: setActiveNode,
});

Object.defineProperty(window, "activeNodes", {
  configurable: true,
  get: getActiveNodes,
  set: setActiveNodes,
});
