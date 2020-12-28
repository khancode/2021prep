class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const n = new QueueNode(data);
        if (this.last !== null) {
            this.last.next = n;
        }
        this.last = n;
        if (this.first === null) {
            this.first = this.last;
        }
    }

    dequeue() {
        if (this.first === null) {
            throw 'EmptyQueueException';
        }
        const data = this.first.data;
        this.first = this.first.next;
        if (this.first === null) {
            this.last === null;
        }
        return data;
    }

    peek() {
        if (this.first === null) {
            throw 'EmptyQueueException';
        }
        return this.first.data;
    }

    isEmpty() {
        return this.first === null;
    }
}

module.exports = Queue;