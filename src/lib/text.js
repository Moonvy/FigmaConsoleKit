/** 编辑文本前要先载入字体 */
export async function loadNodeFonts(node) {
  try {
    const fonts = node.getRangeAllFontNames(0, node.characters.length);
    for (const font of fonts) {
      await figma.loadFontAsync(font);
    }
  } catch (e) {
    console.error(e);
  }
}

/** 设置节点文本 */
export async function setNodeText(node, text) {
  try {
    node.characters = text;
  } catch (e) {
    await loadNodeFonts(node);
    node.characters = text;
  }
}
