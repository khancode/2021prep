/* Question 4.5
Validate BST: Implement a function to check if a binary tree is a binary search tree.
*/

// Time is O(n),
// Space is O(n) due to recursion stack
function validateBST(root) {
    return checkBST(root, null, null);
}

function checkBST(n, min, max) {
    // Empty trees are valid BSTs.
    if (n === null) {
        return true;
    }

    // The current node's value must be between low and high.
    if ((min !== null && min >= n.val) || (max !== null && max <= n.val)) {
        return false;
    }

    // The left and right subtree must also be valid.
    return checkBST(n.left, min, n.val) && checkBST(n.right, n.val, max);
}

/* pseudo code
Use Min/Max solution to ensure:
- all left nodes are less than current node
- all right nodes are greater than current node 
*/

const BinaryTreeNode = require('../data_structures/BinaryTreeNode');

const bst = new BinaryTreeNode(3);
bst.left = new BinaryTreeNode(1);
bst.right = new BinaryTreeNode(7);
bst.right.left = new BinaryTreeNode(4);

const nonbst = new BinaryTreeNode(3);
nonbst.left = new BinaryTreeNode(1);
nonbst.right = new BinaryTreeNode(2);
nonbst.right.right = new BinaryTreeNode(4);
nonbst.right.right.right = new BinaryTreeNode(2);

console.log(validateBST(bst)); // true
console.log(validateBST(nonbst)); // false