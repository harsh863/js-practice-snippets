const { Stack } = require("./stack");


class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue = (number) => this.queue.unshift(number);

    dequeue = () => this.queue.pop();

    isEmpty = () => !this.queue.length;

    size = () => this.queue.length;

    front = () => this.queue[this.queue.length - 1];

    rear = () => this.queue[0];

    display = () => console.log(this.isEmpty() ? 'QUEUE IS EMPTY' : '(Rear) ' + this.queue.join(' ⟶ ') + ' (Front)');

    weave = (queue1, queue2) => {
        while (!queue1.isEmpty() || !queue2.isEmpty()) {
            if (!queue1.isEmpty())
                this.enqueue(queue1.dequeue());
            if (!queue2.isEmpty())
                this.enqueue(queue2.dequeue());
        }
    }
}

class QueueFromStack {
    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
        this.enqueue = this.enqueue.bind(this);
        this.dequeue = this.dequeue.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.front = this.front.bind(this);
        this.rear = this.rear.bind(this);
        this.display = this.display.bind(this);
    }

    enqueue(number) {
        this.stackA.push(number);
    }

    dequeue() {
        while (!this.stackA.isEmpty()) {
            this.stackB.push(this.stackA.pop());
        }
        const item = this.stackB.pop();
        while (!this.stackB.isEmpty()) {
            this.stackA.push(this.stackB.pop());
        }
        return item;
    }

    isEmpty() {
        return this.stackA.isEmpty()
    };

    front() {
        while (!this.stackA.isEmpty()) {
            this.stackB.push(this.stackA.pop());
        }
        const item = this.stackB.peek();
        while (!this.stackB.isEmpty()) {
            this.stackA.push(this.stackB.pop());
        }
        return item;
    }

    rear() {
        return this.stackA.peek();
    };

    display() {
        while (!this.stackA.isEmpty()) {
            this.stackB.push(this.stackA.pop());
        }
        const queue = [];
        while (!this.stackB.isEmpty()) {
            const item = this.stackB.pop();
            this.stackA.push(item);
            queue.unshift(item);
        }
        console.log(this.isEmpty() ? 'QUEUE IS EMPTY' : '(Rear) ' + queue.join(' -> ') + ' (Front)');
    }
}


module.exports = { Queue, QueueFromStack };
