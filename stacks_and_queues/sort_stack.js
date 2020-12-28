/* Question 3.5
Sort Stack: Write a program to sort a stack such that the smallest items are on the top.
You can use an additional temporary stack, but you may not copy the elements into any
other data structure (such as an array).
The stack supports the following operations: push, pop, peek, and isEmpty.
*/

function testSortStack() {
    const sortStack = new SortStack();
    sortStack.push(1);
    sortStack.push(2);
    sortStack.push(3);
    console.log(sortStack.peek()); // 1
    console.log(sortStack.pop()); // 1
    console.log(sortStack.isEmpty()); // false
}

const Stack = require('../data_structures/Stack');

class SortStack {
    constructor() {
        this.stack = new Stack();
    }
 
    push(data) {
        const temp = new Stack();
        while (!this.stack.isEmpty() && data > this.stack.peek()) {
            temp.push(this.stack.pop());
        }

        this.stack.push(data);

        while (!temp.isEmpty()) {
            this.stack.push(temp.pop());
        }
    }
 
    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack.peek();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }
}
 
testSortStack();