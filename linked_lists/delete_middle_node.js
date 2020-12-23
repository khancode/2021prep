/* Question 2.3
Delete Middle Node: Implement an algorithm to delete a node in the middle
(i.e., any node but the first and last node, not necessarily the exact middle)
of a singly linked list, given only access to that node

EXAMPLE
Input: the node c from the linked list a->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e->f
*/

// Time is O(1), Space is O(1)
function deleteMiddleNode(n) {
   if (n === null || n.next === null) {
      return;
   }
   n.data = n.next.data;
   n.next = n.next.next;
}

const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const ll = new SinglyLinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
const n = ll.head.next.next;

console.log('before:', ll.toString());
deleteMiddleNode(n);
console.log('after:', ll.toString());
