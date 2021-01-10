/* Question 4.6
Successor: Write an algorithm to find the "next" node (i.e., in-order successor)
of a given node in a binary search tree.
You may assume that each node has a linkto its parent.
*/

// Time is O(n), Space is O(1)
function successor(node) {
    if (node.right !== null) {
        node = node.right;
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    let cur = node;
    let parent = cur.parent;
    while (parent !== null && parent.left !== cur) {
        cur = parent;
        parent = parent.parent;
    }
    return parent;
}

/* notes
There are two possible situations when node doesn't have a right child:

1. Node has a right child, and hence its successor is somewhere lower in the tree.
To find the successor, go to the right once and then as many times to the left as you could.

2. Node has no right child, then its successor is somewhere upper in the tree.
To find the successor, go up till the node that is left child of its parent.
The answer is the parent. Beware that there could be no successor (= null successor)
in such a situation.
*/

// With no reference to parent nodes
// Time is O(n), Space is O(1)
function successorNoParent(root, p) {
    // if p has right child, then successor will be the leftmost
    // child in right subtree
    if (p.right !== null) {
        p = p.right;
        while (p.left !== null) {
            p = p.left;
        }
        return p;
    }
    
    let successor = null;
    let cur = root;
    while (cur !== null) {
        if (cur.val > p.val) {
            successor = cur;
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }
    
    return successor;
}

/* pseudo code
Here is a much simpler solution to the problem. The idea is pretty straight forward.
We start from the root, utilizing the property of BST:

- If current node's value is less than or equal to p's value, we know our answer must be in the right subtree.
- If current node's value is greater than p's value, current node is a candidate. Go to its left subtree to see if we can find a smaller one.
- If we reach null, our search is over, just return the candidate.
*/

const BinaryTreeNode = require('../data_structures/BinaryTreeNode');

const bst1 = new BinaryTreeNode(3);
bst1.left = new BinaryTreeNode(1);
bst1.right = new BinaryTreeNode(7);
bst1.right.left = new BinaryTreeNode(4);

const bst2 = new BinaryTreeNode(3);
bst2.left = new BinaryTreeNode(1);
bst2.right = new BinaryTreeNode(8);
bst2.right.left = new BinaryTreeNode(7);
bst2.right.left.left = new BinaryTreeNode(5);

console.log(successorNoParent(bst1, bst1)); // 4
console.log(successorNoParent(bst2, bst2.right)); // null