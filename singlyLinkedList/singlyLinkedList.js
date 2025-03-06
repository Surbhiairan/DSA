class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // insert at end
    push(val) {
        let node1 = new Node(val)
        if(this.length == 0) {
            this.head = node1
            this.tail = node1
        } else {
            this.tail.next = node1
            this.tail = node1
        }
        this.length++
        return this
    }
    //remove from last
    pop() {
        if(this.length == 0) return undefined
        let temp = this.head
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if(this.length ===0) {
            this.head = null;
            this.tail = null
        }
        return temp
    }

    //remove 0th index
    shift() {
        if(this.length == 0) return undefined
        let temp = this.head
        this.head = temp.next
        if(this.head === this.tail) {
            this.tail = null
        }
        this.length--
        return temp
    }

    // add at 0th
    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) return null
        let i=0
        let current = this.head
        while(i !== index) {
            current = current.next
            i++
        }
        return current
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
            previousNode.next = newNode
            newNode.next = temp.next
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
        this.length--
        return temp
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let previous = null
        let next = null
        let i=0
        while(i<this.length) {
            next = node.next
            node.next = previous
            previous = node
            node = next
        }
        return this
    }

    findMiddle() {
        let slow = head
      let fast = head
      while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        
      }
      return slow
    }
}

// 13 , 2, 6, 8

// 8, 6, 2, 13 
// node = 13