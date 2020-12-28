/* Question 3.4
Queue via Stacks: Implement a MyQueue class which
implements a queue using two stacks.
*/

function testQueueViaStacks() {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    console.log(queue.peek()); // 1
    console.log(queue.pop()); // 1
    console.log(queue.isEmpty()); // false
}

const Stack = require('../data_structures/Stack');
 
class MyQueue {
    constructor() {
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
 
    push(data) {
        this.s1.push(data);
    }
 
    pop() {
        if (this.s2.isEmpty()) {
            this.#shiftStacks(this.s1, this.s2);
        }
        return this.s2.pop();
    }
 
    peek() {
        if (this.s2.isEmpty()) {
            this.#shiftStacks(this.s1, this.s2);
        }
        return this.s2.peek();
    }
 
    isEmpty() {
        return this.s1.isEmpty() && this.s2.isEmpty();
    }

    #shiftStacks() {
        // Pop all elements from s1 and push onto s2
        while (!this.s1.isEmpty()) {
            this.s2.push(this.s1.pop());
        }
    }
}
 
testQueueViaStacks();