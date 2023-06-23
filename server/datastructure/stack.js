class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export class Stack{
    constructor(){
       this.first = null;
       this.last = null;
        this.size = 0;
    }

    // Add element to the top of the stack
    push(value){
        const newode = new Node()
    }

// Remove last iten from stack
    pop(){
        if(this.count === 0) return undefined;
        let deleteItems = this.items[this.count-1]
        this.count--;
        return deleteItems;
    }

    // Check top element of stack
    peak(){
        return this.items[this.count-1]
    }

    // Check if stack is empty
    isEmpty(){
        return this.count == 0
    }

    size = () => this.count
}