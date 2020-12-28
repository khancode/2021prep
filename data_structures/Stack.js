class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const n = new StackNode(data);
        n.next = this.top;
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

    isEmpty() {
        return this.top === null;
    }
}

module.exports = Stack;