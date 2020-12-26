/* Question 2.7
Intersection: Given two (singly) linked lists, determine if the two lists intersect.
Return the intersecting node. Note that the intersection is defined based on reference,
not value. That is, if the kth node of the first linked list is the exact same node (by reference)
as the jth node of the second linked list, then they are intersecting.
*/

// Time is O(a+b) where a & b are the lengths of the input linked lists,
// Space is O(1)
function getIntersection(headA, headB) {
   const lengthTailA = lengthAndTail(headA);
   const lengthTailB = lengthAndTail(headB);
   if (lengthTailA.tail !== lengthTailB.tail) {
         return null;
   }

   const lengthA = lengthTailA.length;
   const lengthB = lengthTailB.length;

   // Traverse longer linked list diff nodes
   let short = lengthA < lengthB ? headA : headB;
   let long = short === headA ? headB : headA;
   let diff = Math.abs(lengthA - lengthB);
   for (let i = 0; i < diff; i++) {
      long = long.next;
   }

   while (short !== null) {
      if (short === long) {
         return short;
      }
      short = short.next;
      long = long.next;
   }

   return null;
}

function lengthAndTail(n) {
   let length = 0;
   while (n !== null) {
      length++;
      n = n.next;
   }
   return {length, tail: n};
}

/* Pseudo code
1. Get lengths of both linked lists
2. Get difference in lengths and set to diff
3. Traverse longer linked list diff nodes
4. Traverse both linked lists until they have matching node references or they reach to end of list
5. return null if code reaches to the bottom
*/

const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const l1 = new SinglyLinkedList();
l1.add(3);
l1.add(1);
l1.add(5);
l1.add(9);
l1.add(7);
l1.add(2);
l1.add(1);

const l2 = new SinglyLinkedList();
l2.add(4);
l2.add(6);
l2.head.next.next = l1.head.next.next.next.next;
l2.head.next.next.next = l1.head.next.next.next.next.next;
l2.head.next.next.next.next = l1.head.next.next.next.next.next.next;

console.log(l1.toString());
console.log(l2.toString());

console.log(getIntersection(l1.head, l2.head)); // Node { data: 7 }
l2.head.next.next = null;
console.log(getIntersection(l1.head, l2.head)); // null