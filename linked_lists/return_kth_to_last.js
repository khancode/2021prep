/* Question 2.2
Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
*/

// Time is O(n), Space is O(1)
function kthToLast(head, k) {
   // Find length of linked list
   let n = head;
   let length = 0;
   while (n !== null) {
      length++;
      n = n.next;
   }

   // iterate length-k to get result node
   n = head;
   for (let i = 0; i < length - k; i++) {
      n = n.next;
   }

   return n.data;
}

// Time is O(n), Space is O(1)
function kthToLastAlternative(head, k) {
   let p1 = head;
   let p2 = head;
   // move p2 k nodes
   for (let i = 0; i < k; i++) {
      if (p2 === null) {
         return null;
      }
      p2 = p2.next;
   }

   while (p2 !== null) {
      p1 = p1.next;
      p2 = p2.next;
   }

   return p1.data;
}

const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const ll = new SinglyLinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);

console.log(kthToLast(ll.head, 2)); // 4
console.log(kthToLastAlternative(ll.head, 2)); // 4