/* Question 2.1
Remove Dups: Write code to remove duplicates from an unsorted linked list.

FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?
*/

// Time is O(n), Space is O(n)
function removeDupsSinglyLL(head) {
   if (head === null) {
      return;
   }

   const set = new Set();
   let n = head;
   let prev = null;

   while (n !== null) {
      if (set.has(n.data)) {
         prev.next = n.next;
      } else {
         set.add(n.data);
         prev = n;
      }
      n = n.next;
   }
}

// Time is O(n^2), Space is O(1)
function removeDupsNoBufferSinglyLL(head) {
   if (head === null) {
      return;
   }

   let n = head;
   while (n !== null) {
      let runner = n;
      while (runner.next !== null) {
         if (runner.next.data === n.data) {
            runner.next = runner.next.next;
         } else {
            runner = runner.next;
         }
      }
      n = n.next;
   }
}


const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const ll = new SinglyLinkedList();
ll.add(1);
ll.add(4);
ll.add(3);
ll.add(5);
ll.add(4);
ll.add(3);

console.log('before:', ll.toString());
removeDupsSinglyLL(ll.head);
// removeDupsNoBufferSinglyLL(ll.head);
console.log('after:', ll.toString());