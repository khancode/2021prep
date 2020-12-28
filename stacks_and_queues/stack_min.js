/* Question 3.2
Stack Min: How would you design a stack which, in addition to push and pop,
has a function min which returns the minimum element?
Push, pop, and min should all operate in O(1) time.
*/

function testStackMin() {
   const stack = new StackMin();
   stack.push(3);
   stack.push(1);
   stack.push(2);
   console.log(stack.min); // 1
   stack.pop();
   console.log(stack.min); // 1
   stack.pop();
   console.log(stack.min); // 3
}

class StackNode {
   constructor(data) {
      this.data = data;
      this.next = null;
      this.min = null;
   }
}

class StackMin {
   constructor() {
      this.top = null;
   }

   push(data) {
      const n = new StackNode(data);
      n.next = this.top;
      n.min = Math.min(n.data, this.top !== null ? this.top.min : Infinity);
      this.top = n;
   }

   pop() {
      if (this.top === null) {
         throw 'EmptyStackException';
      }
      const data = this.top.data;
      this.top = this.top.next;
      return data;
   }

   peek() {
      if (this.top === null) {
         throw 'EmptyStackException';
      }
      return this.top.data;
   }

   get min() {
      if (this.top === null) {
         throw 'EmptyStackException';
      }
      return this.top.min;
   }
}

testStackMin();