/* Question 2.7
Intersection: Given two (singly) linked lists, determine if the two lists intersect.
Return the intersecting node. Note that the intersection is defined based on reference,
not value. That is, if the kth node of the first linked list is the exact same node (by reference)
as the jth node of the second linked list, then they are intersecting.
*/

// Time is O(a+b), Space is O(1) where a & b are the lengths of the two linked lists
function isIntersection(l1, l2) {
   if (l1 === null || l2 === null) {
      return false;
   }
   
   // 1. Get tail & length diff between l1 and l2
   const l1Result = tailAndLength(l1);
   const l2Result = tailAndLength(l2);
   if (l1Result.tail !== l2Result.tail) {
      return null;
   }

   const l1Length = l1Result.length;
   const l2Length = l2Result.length;
   const diff = Math.abs(l1Length - l2Length);

   // 2. traverse longer ll by diff nodes
   if (l1Length > l2Length) {
      l1 = traverse(l1, diff);
   } else if (l1Length < l2Length) {
      l2 = traverse(l2, diff);
   }

   // 3. iterate and compare l1 & l2 nodes
   while (l1 !== null) {
      if (l1 === l2) {
         return l1;
      }
      l1 = l1.next;
      l2 = l2.next;
   }

   return null;
}

function tailAndLength(n) {
   let length = 1;
   while (n.next !== null) {
      length++;
      n = n.next;
   }
   return {length, tail: n};
}

function traverse(n, diff) {
   for (let i = 0; i < diff; i++) {
      n = n.next;
   }
   return n;
}

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

console.log(isIntersection(l1.head, l2.head)); // Node { data: 7 }
l2.head.next.next = null;
console.log(isIntersection(l1.head, l2.head)); // null