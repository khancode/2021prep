/* Question 4.1
Routes Between Nodes: Given a directed graph, design an algorithm
to find out whether there is a route between two nodes.
*/

// Time is O(n), Space is O(n)
function routeBetweenNodes(graph, start, end) {
    if (start === end) {
        return true;
    }

    // Perform BFS a->b
    const queue = new Queue();
    const visited = new Set();
    
    visited.add(start);
    queue.enqueue(start);

    while (!queue.isEmpty()) {
        const n = queue.dequeue();

        if (n === end) {
            return true;
        }

        for (const i in n.children) {
            const neighbor = n.children[i];
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.enqueue(neighbor);
            }
        }
    }

    return false;
}

const Queue = require('../data_structures/Queue');

const Graph = require('../data_structures/Graph');
const graph = new Graph();
graph.add('A');
graph.add('B');
graph.add('C');
graph.add('D');
const A = graph.nodes[0];
const B = graph.nodes[1];
const C = graph.nodes[2];
const D = graph.nodes[3];

// Add A neighbors
A.children.push(B); // A -> B
A.children.push(C); // A -> C
// Add B neighbors
B.children.push(C); // B -> C
// Add C neighbors
C.children.push(D); // C -> D

// A, D
console.log(routeBetweenNodes(graph, A, D)); // true
console.log(routeBetweenNodes(graph, C, B)); // false