class Node {
    constructor(val) {
        this.value = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if(this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            let temp = this.tail
            this.tail = newNode
            newNode.next = null
            newNode.prev = temp
            temp.next = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(this.length === 0) return null
        let temp = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        }else {
            this.tail = temp.prev
            this.tail.next = null
            temp.prev = null;
        }
        
        this.length--
        return temp
    }
    shift() {
        if(this.length === 0) return null
        let temp = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = temp.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }
    unshift(val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }else {
            newNode.next = this.head;
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if(index < 0 || index >= this.length) return null
        if(Math.floor(this.length/2) < index) {
            //start from tail
            let i=this.length -1
            let current = this.tail
            while(i !== index) {
                current = current.prev
                i--
            }
            return current
        } else {
            //start from head
            let i=0
            let current = this.head
            while(i !== index) {
                current = current.next
                i++
            }
            return current
        }
    }
    set(index, value) {
        let found = this.get(index)
        if(found) {
            found.val = value
            return true
        }
        return false
    }
    insert(index, value) {
        if(index === 0) {
            this.unshift(value)
            return true
        } else if(index === this.length) {
            this.push(value)
            return true
        } else if(index < 0 || index > this.length) return false
        else {
            let newNode = new Node(value)
            let previousNode = this.get(index-1) 
            let temp = previousNode
            let afterNode = previousNode.next
            previousNode.next = newNode
            newNode.next = temp.next
            newNode.prev = temp
            afterNode.prev = newNode
            this.length++
            return true
        }
    }
    remove(index) {
        if(index < 0 && index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        let previousNode = this.get(index - 1) 
        let temp = previousNode.next
        previousNode.next = temp.next
        temp.next.prev = previousNode
        temp.next = null
        temp.prev = null
        this.length--
        return temp
    }
}