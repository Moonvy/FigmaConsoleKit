/** [255,255,255] => {r:1.0, g:1.0, b:1.0}  */
export function toFloatColor(color) {
  return { r: color[0] / 255, g: color[1] / 255, b: color[2] / 255 };
}

/** {r:1.0, g:1.0, b:1.0} => [255,255,255]   */
export function toIntColor(color) {
  return [color.r * 255, color.g * 255, color.b * 255];
}
