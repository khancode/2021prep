/* Question 4.2
Minimal Tree: Given a sorted (increasing order) array with unique integer elements,
write an algorithm to create a binary search tree with minimal height.
*/

// Time is O(n),
// Space is O(log(n)) due to recursion stack
function minimalTree(arr) {
    return preorder(arr, 0, arr.length - 1);
}

// Create minimal BST with pre-order (VLR) traversal
function preorder(arr, left, right) {
    // base case
    if (left > right) {
        return null;
    }

    // VLR (Visit, Left, Right)
    const mid = Math.trunc((left + right) / 2);
    const n = new BinaryTreeNode(arr[mid]); // Visit
    n.left = preorder(arr, left, mid-1); // Left
    n.right = preorder(arr, mid+1, right); // Right

    return n;
}

/* Pseudo code
To create a tree of minimal height, both left and right subtrees
should have the same number of nodes as much as possible.

We can do this with pre-order (VLR) traversal on input array (already sorted)
while constructing minimal BST.
*/

const BinaryTreeNode = require('../data_structures/BinaryTreeNode');

const arr = [1, 2, 3, 4, 5];

console.log(minimalTree(arr));
/* result:
    3
   / \
  1   4
   \   \
    2   5
*/