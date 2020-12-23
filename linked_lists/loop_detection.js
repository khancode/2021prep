/* Question 2.8
Loop Detection: Given a circular linked list, implement an algorithm that returns
the node at the beginning of the loop.

DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer
points to an earlier node, so as to make a loop in the linked list.

EXAMPLE
Input: A->B->C->D->E->C [the same C as earlier]
Output: C
*/

// Time is O(n), Space is O(n)
function loopDetection(head) {
   let slow = head;
   let fast = head;
   while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
         break;
      }
   }

   if (fast === null || fast.next === null) {
      return null;
   }

   slow = head;
   while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
   }

   return fast;
}

const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const ll = new SinglyLinkedList();
ll.add('A');
ll.add('B');
ll.add('C');
ll.add('D');
ll.add('E');
ll.head.next.next.next.next.next = ll.head.next.next;

console.log(loopDetection(ll.head)); // Node { data: 'C' }