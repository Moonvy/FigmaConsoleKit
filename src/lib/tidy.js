/** 排列图层
 * @param {number} xLen 列数
 * @param {number} gap 间距
 */
export function tidyX(nodes, xLen, gap) {
  let lastX, lastY;
  let startX, startY;
  let H = 0;

  let l = 0;
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (lastX === undefined) {
      lastX = node.x;
      startX = lastX;
    }
    if (lastY === undefined) {
      lastY = node.y;
      startY = lastY;
    }

    if (H < node.height) {
      H = node.height;
    }

    node.x = lastX;
    node.y = lastY;
    lastX += node.width + gap;

    l++;
    if (l >= xLen) {
      l = 0;
      lastX = startX;
      lastY = lastY + H + gap;
    }
  }
}
