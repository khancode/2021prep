/* Question 2.4
Partition: Write code to partition a linked list around a value x,
such that all nodes less than x come before all nodes greater than or equal to x.
If x is contained within the list, the values of x only need to be after the
elements less than x (see below). The partition element x can appear anywhere
in the "right partition"; it does not need to appear between the left and right partitions.

Example:
Input: 3->5->8->5->10->2->1 [partition=5]
Ouput: 3->1->2->10->5->5->8
*/

// Time is O(n), Space is O(1)
function partition(head, partition) {
   let left = head;
   let right = head;

   let n = head;
   while (n !== null) {
      const next = n.next;
      if (n.data < partition) {
         n.next = left;
         left = n;
      } else {
         right = right.next = n;
      }
      n = next;
   }

   right.next = null;
   return left;
}

/* Pseudo code
1. Create two linked lists left & right
2. left will contain all nodes less than x
   store head pointer
3. right will contain all nodes >= x
4. combine both linked lists
   left.tail.next = right.head;
5. return left
*/
// Time is O(n), Space is O(1)
function partitionWithDummyHeads(head, partition) {
   const leftDummyHead = new Node(0);
   let left = leftDummyHead;
   const rightDummyHead = new Node(0);
   let right = rightDummyHead;
   
   let n = head;
   while (n !== null) {
       if (n.data < partition) {
           left.next = n;
           left = left.next;
       } else {
           right.next = n;
           right = right.next;
       }
       n = n.next;
   }
   
   // last node of combined list
   right.next = null;
   
   // Combine left & right lists
   left.next = rightDummyHead.next;
   
   return leftDummyHead.next;
}

const Node = require('../data_structures/Node');
const SinglyLinkedList = require('../data_structures/SinglyLinkedList');
const ll = new SinglyLinkedList();
ll.add(3);
ll.add(5);
ll.add(8);
ll.add(5);
ll.add(10);
ll.add(2);
ll.add(1);

console.log('before:', ll.toString());
ll.head = partition(ll.head, 5);
console.log('after:', ll.toString()); // 1->2->3->5->8->5->10->null
