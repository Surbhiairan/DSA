 //min priority queue
 class Node {
    constructor(val, priority) {
        this.val = val
        this.priiority = priority
    }
 }
class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        //bubble up -> check if the new added value is larger than its parent. if so, bubble it up until it finds its position
        let arrayLength = this.values.length
        let idx = arrayLength - 1
        let insertedElement = this.values[idx]
        while(idx >0) {
            let parentInx = Math.floor((idx -1)/2)
            let parent = this.values[parentInx]
            if(parent.priority <= insertedElement.priority) break;
            this.values[parentInx] = insertedElement
            this.values[idx] = parent
            idx = parentInx
        }
    }

    //remove the largest value -> since in max binary heap root is the largest value we need to remove it and find the new root 
    dequeue() {
        let lastValue = this.values[this.values.length -1]
        let root = this.values[0]
        this.values[0] = lastValue
        this.values[this.values.length -1] = root
        let min = this.values.pop()

        //bubble down -> since we made the last value of array as the root, 
        //we need to check if the children are greater or not, if so push this down untill we find the new root
        let parentIdx = 0 
        let parent = this.values[parentIdx]
        let lchild 
        let rchild 
        while(true) {
            let swap = null
            let lchildIdx = (parentIdx * 2)+1
            let rchildIdx = (parentIdx * 2)+2
            if(lchildIdx < this.values.length) {
                lchild = this.values[lchildIdx]
                if(parent.priority > lchild.priority) {
                    swap = lchildIdx
                }
            }
            if(rchildIdx < this.values.length) {
                rchild = this.values[rchildIdx]
                if((swap && rchild.priority < lchild.priority) || (!swap && rchild.priority < parent.priority)) {
                    swap = rchildIdx
                }
            }
            if(swap === null) break;
            this.values[parentIdx] = this.values[swap]
            this.values[swap] = parent
            parentIdx = swap
            
        }
        return min
    }
}