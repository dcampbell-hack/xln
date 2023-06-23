export class SNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

export class DNode {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

export class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(value){
        let newNode = new SNode(value)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next
        this.length--;
        return currentHead;
    }

    unshift(value){
        let newNode = new SNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

      this.length++;
      return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0, current = this.head;
        while( counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        else return false;
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(value)
        let newNode = new SNode(value)
        if(index === 0) return this.unshift(value)
        let prev = this.get(index - 1)
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
    }
    
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop()
        let prevNode = this.get(index - 1)
        let removed = prevNode.next; 
        prevNode.next = removed.next;
        return removed;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null, next;
        for(let i = 0; i < this.length; i++){
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

    print(){
        let array = []
        let current = this.head;
        while(current){
            array.push(current.value)
        }
        console.log(array)
    }

    detectCycle(){
        if(!this.head) return null;
        if(!this.head) return null;
        let fast = this.head;
        let pointer = this.head;
        let index = 0;

        while(fast !== slow){
            fast = fast.next.next;
            slow = slow.next;
            if(fast === slow) break; 
        }

        if(fast !== slow) return null;
        while( pointer !== slow){
            pointer = pointer.next;
            slow = slow.next;
            index++;
        }
        return slow;
    }

    middleNode(){
        let half = this.head, end = this.head;
        while(end !== null && end.next !== null){
            half = half.next;
            end = end.next.next;
        }
        return half;
    }



}


export class DoublyLinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    unshift(value){
        let newNode = new DNode(value, this.head, null);
        if(this.head) this.head.prev = newNode;
        else this.tail = newNode;
        this.head = newNode;
        this.length++;
    }

    push(value){
        const newNode = new Node(value, null, this.tail)
        if(this.tail) this.tail.prev = newNode;
        else this.head = newNode;
        this.tail = newNode;
    }

    pop(){
        if(!this.tail) return null;
        let value = this.tail.value;
        this.tail = this.tail.prev;
        if(this.tail) this.tail.next = null;
        else this.head = null;
        this.length--;
        return value;
    }



}
