class Stack {
    constructor() {
        this.stack = [];
    }

    push = (number) => this.stack.push(number);

    pop = () => this.stack.pop();

    peek = () => this.stack[this.stack.length - 1];

    isEmpty = () => !this.stack.length;

    display = () => console.log(this.isEmpty() ? 'STACK IS EMPTY' : '(Bottom) ' + this.stack.join(' ⟶ ') + ' (Top)');
}



module.exports = { Stack };
