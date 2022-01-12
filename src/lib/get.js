/** 按图层名称获取子节点(多个) */
export function getChildrenByName(node, name) {
  return node.children.filter((child) => child.name == name);
}

/** 按图层名称获取子节点 */
export function getClidByName(node, name) {
  return node.children.find((child) => child.name == name);
}
