/* Question 2.5
Sum Lists: You have two numbers represented by a linked list, where each node
contains a single digit. The digits are stored in reverse order, such that the
1's digit is at the head of the list. Write a function adds the two numbers and
returns the sum as a linked list.

Example
Input: (7->1->6) + (5->9->2). That is, 617 + 295
Output: 2->1->9. That is, 912

Follow Up:
Suppose the digits are stored in foward order. Repeat the above problem.

Example:
Input: (6->1->7) + (2->9->5). That is, 617 + 295
Output: 9->1->2. That is, 912.
*/

// Time is O(a + b), Space is O(a + b) where a & b are inputted linked lists
function sumLists(l1, l2) {
   let result = new Node();
   const dummyHead = result;

   let carry = 0;
   while (l1 !== null || l2 !== null) {
      let sum = carry;
      if (l1 !== null) {
         sum += l1.data;
         l1 = l1.next;
      }
      if (l2 !== null) {
         sum += l2.data;
         l2 = l2.next;
      }

      carry = sum >= 10 ? 1 : 0;
      result = result.next = new Node(sum % 10);
   }

   if (carry > 0) {
      result.next = new Node(carry);
   }

   return dummyHead.next;
}

// Time is O(a + b), Space is O(a + b) where a & b are inputted linked lists
function sumListsFollowUp(l1, l2) {
   const l1Length = getLength(l1);
   const l2Length = getLength(l2);

   if (l1Length < l2Length) {
      l1 = padList(l1, l2Length - l1Length);
   } else if (l1Length > l2Length) {
      l2 = padList(l2, l1Length - l2Length);
   }

   let result = recurse(l1, l2);
   if (result.data >= 10) {
      result.data = result.data % 10;
      const n = new Node(1);
      n.next = result;
      result = n;
   }

   return result;
}

function getLength(n) {
   let result = 0;
   while (n !== null) {
      result++;
      n = n.next;
   }
   return result;
}

function padList(n, diff) {
   for (let i = 0; i < diff; i++) {
      const pad = new Node(0);
      pad.next = n;
      n = pad;
   }
   return n;
}

function recurse(l1, l2) {
   if (l1 === null) {
      return null;
   }

   const n = new Node(l1.data + l2.data);
   n.next = recurse(l1.next, l2.next);
   if (n.next !== null) {
      const carry = n.next.data >= 10 ? 1 : 0;
      if (carry > 0) {
         n.next.data = n.next.data % 10;
         n.data += carry;
      }
   }
   return n;
}

const Node = require('../data_structures/Node');
const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
let l1 = new SinglyLinkedList();
l1.add(7);
l1.add(1);
l1.add(6);
let l2 = new SinglyLinkedList();
l2.add(5);
l2.add(9);
l2.add(2);
const result = new SinglyLinkedList();

result.head = sumLists(l1.head, l2.head);
console.log(result.toString()); // 2->1->9->null

l2.head = l1.head = null;
// l1.add(6);
// l1.add(1);
// l1.add(7);
// l2.add(2);
// l2.add(9);
// l2.add(5);
l1.add(9);
l1.add(9);
l1.add(9);
l2.add(9);
l2.add(9);
l2.add(9);

result.head = sumListsFollowUp(l1.head, l2.head);
console.log(result.toString()); // 9->1->2->null