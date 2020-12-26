/* Question 2.6
Palindrome: Implement a function to check if a linked list is a palindrome.
*/

// Time is O(n), Space is O(1)
function isPalindrome(head) {
   // get second half of linked list
   let slow = head;
   let fast = head;
   while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
      if (fast !== null) {
         fast = fast.next;
      }
   }

   // Reverse second half of linked list
   const reversedHead = reverse(slow);
   slow = head;
   fast = reversedHead;
   while (fast !== null) {
      if (slow.data !== fast.data) {
         return false;
      }
      slow = slow.next;
      fast = fast.next;
   }

   // Revert reverse
   reverse(reversedHead);
   
   return true;
}

function reverse(n) {
   let prev = null;
   while (n !== null) {
      const next = n.next;
      n.next = prev;
      prev = n;
      n = next;
   }
   return prev;
}
/*
even length: 1->2->3->4
odd length: 1->2->3->4->5
*/

const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const ll = new SinglyLinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(3);
ll.add(2);
ll.add(1);

console.log('before:', ll.toString());
console.log(isPalindrome(ll.head)); // true;
console.log('after:', ll.toString());