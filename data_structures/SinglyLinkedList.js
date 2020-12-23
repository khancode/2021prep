
const Node = require('./Node');

class SinglyLinkedList {
   constructor() {
      this.head = null;
   }

   add(data) {
      let n = this.head;
      if (n === null) {
         this.head = new Node(data);
      } else {
         while (n.next !== null) {
            n = n.next;
         }
         n.next = new Node(data);
      }
   }

   toString() {
      let result = '';
      let n = this.head;
      while (n !== null) {
         result += n.data + (n.next !== null ? '->' : '->null');
         n = n.next;
      }
      return result;
   }
}

module.exports = SinglyLinkedList;