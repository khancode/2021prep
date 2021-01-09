class GraphNode {
    constructor(val=null, children=[]) {
        this.val = val;
        this.children = children;
    }
}

class Graph {
    constructor(nodes=[]) {
        this.nodes = nodes;
    }

    add(name=null, children=[]) {
        this.nodes.push(new GraphNode(name, children));
    }
}

module.exports = Graph;