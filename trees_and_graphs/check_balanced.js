/* Question 4.4
Check Balanced: Implement a function to check if a binary tree is balanced.
For the purposes of this question, a balanced tree is defined to be a tree
such that the heights of the two subtrees of any node never differ by
more than one.
*/

// Time is O(n),
// Space is O(log(n)) due to recursion stack
function checkBalanced(root) {
    return postorder(root, 0) !== -Infinity;
}

function postorder(n, height) {
    // base case
    if (n === null) {
        return height;
    }

    // LRV (Left, Right, Visit)
    // Left
    const leftHeight = postorder(n.left, height + 1);
    if (leftHeight === -Infinity) {
        return -Infinity; // sentinel value that it's not balanced to stop postorder traversal
    }

    // Right
    const rightHeight = postorder(n.right, height + 1);
    if (rightHeight === -Infinity) {
        return -Infinity;
    }

    // Visit
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -Infinity;
    }

    return Math.max(leftHeight, rightHeight);
}

/* pseudo code
Need to do post-order traversal since we need to compare
heights of left and right subtrees of a current node.

need to keep track of height at each level.
we increment height whenever we visit a neighbor
*/

const BinaryTreeNode = require('../data_structures/BinaryTreeNode');

const balanced = new BinaryTreeNode(3);
balanced.left = new BinaryTreeNode(1);
balanced.right = new BinaryTreeNode(2);
balanced.right.right = new BinaryTreeNode(4);

const unbalanced = new BinaryTreeNode(3);
unbalanced.left = new BinaryTreeNode(1);
unbalanced.right = new BinaryTreeNode(2);
unbalanced.right.right = new BinaryTreeNode(4);
unbalanced.right.right.right = new BinaryTreeNode(5);

console.log(checkBalanced(balanced)); // true
console.log(checkBalanced(unbalanced)); // false