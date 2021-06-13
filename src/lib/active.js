export function getActiveNodes() {
    return figma.currentPage.selection
}

export function getActiveNode() {
    return getActiveNodes()[0]
}

export function setActiveNode(node) {
    return (figma.currentPage.selection = [node])
}

export function setActiveNodes(nodes) {
    return (figma.currentPage.selection = nodes)
}
