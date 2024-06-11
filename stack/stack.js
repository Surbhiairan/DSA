// Stack using linkedList

class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    //remove 0th index
    pop() {
        if(this.size == 0) return undefined
        let temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }

    // add at 0th
    push(val) {
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first;
            this.first = newNode
        }
        this.size++
        return this.size
    }
}