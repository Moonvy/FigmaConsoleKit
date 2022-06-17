/** 按图层名称获取子节点(多个) */
export function getChildrenByName(node, name) {
  return node.children.filter((child) => child.name == name);
}

/** 按图层名称获取子节点 */
export function getClidByName(node, name) {
  return node.children.find((child) => child.name == name);
}

/** 在全部子级中挑选节点 */
export function getNodes(node, eachFunc) {
  let nodes = [];
  if (eachFunc(node)) {
    nodes.push(node);
  }
  if (node.children) {
    node.children.forEach((child) => {
      nodes = nodes.concat(getNodes(child));
    });
  }
  return nodes;
}

/** 在全部子级中挑选指定名称的节点 */
export function getNodesByName(node, name) {
  return getNodes(node, (node) => node.name == name);
}

/** 在全部子级中挑选指定类型的节点 */
export function getNodesByType(node, type) {
  return getNodes(node, (node) => node.type == type);
}

/** 在全部子级中挑选指定类型与名称的节点 */
export function getNodesByTypeName(node, type, name) {
  return getNodes(node, (node) => node.name == name && node.type == type);
}
