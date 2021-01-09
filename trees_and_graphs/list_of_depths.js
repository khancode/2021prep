/* Question 4.3
List of Depths: Given a binary tree, design an algorithm which creates a linked list
of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have D linked lists)
*/

// Time is O(n), Space is O(n)
function listOfDepths(root) {
    const result = []; // list of linked lists

    // Perform BFS
    const nodeQueue = new Queue();
    const levelQueue = new Queue();
    const visited = new Set();

    nodeQueue.enqueue(root);
    levelQueue.enqueue(0);
    visited.add(root);

    while (!nodeQueue.isEmpty()) {
        const n = nodeQueue.dequeue();
        const level = levelQueue.dequeue();

        if (result[level] === undefined) {
            result[level] = new SinglyLinkedList();
        }
        result[level].add(n.val);

        // traverse neighbors
        addNeighbor(n.left, nodeQueue, level + 1, levelQueue, visited);
        addNeighbor(n.right, nodeQueue, level + 1, levelQueue, visited);
    }

    return result;
}

function addNeighbor(n, nodeQueue, level, levelQueue, visited) {
    if (n !== null && !visited.has(n)) {
        nodeQueue.enqueue(n);
        levelQueue.enqueue(level);
        visited.add(n);
    }
}

const BinaryTreeNode = require('../data_structures/BinaryTreeNode');
const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const Queue = require('../data_structures/Queue');

const rootNode = new BinaryTreeNode(3);
rootNode.left = new BinaryTreeNode(1);
rootNode.right = new BinaryTreeNode(2);
rootNode.right.right = new BinaryTreeNode(4);
rootNode.right.right.right = new BinaryTreeNode(5);

console.log(listOfDepths(rootNode)); // [3, 1->2, 4, 5]