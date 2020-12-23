/* Question 3.1
Three in One: Describe how you could use a single array to implement three stacks.
*/

function threeInOne() {

}

class Stacks {
   constructor() {
      this.s1 = null;
      this.s2 = null;
      this.s3 = null;
      this.arr = [];
   }

   // push, pop, peek
   pushS1(data) {
      const n = new StackNode(1, data, this.s1);
      this.arr.push(n);
      this.s1 = this.arr.length - 1;
   }

   popS1(data) {
      const n = this.arr[this.s1];
      this.arr[this.s1] = null;
      this.s1 = n.prev;
   }
}

class StackNode {
   constructor(stackId, data, prev) {
      this.stackId = stackId;
      this.data = data;
      this.prev = prev;
   }
}


[1, 2, 3, 4, 5, 6, 7, 8, 9]

[(data:'a', prev:null id: 1), (data:'b', prev:null, 2), (data:'c', prev:'a', 1)]

[null, (data:'b', prev:null, 2), null]



each stack will have 2 pointers
- top
- bottom

[]