/* A special binary tree with if min heap then parent node is going to be smaller than all the child node 
// if max heap then parent node is going to be largest than all its child node
in heap if represented as array left and right child can be calculated as 
left child -> (parentIndex * 2) + 1
right child -> (parentIndex * 2) + 2
parent node -> Math.floor((idx -1)/2)
*/
class BinaryHeap {
    constructor() {
        this.heap = []
    }

    insert(element) {
        this.heap.push(element)
        //bubble up -> check if the new added value is larger than its parent. if so, bubble it up untill it finds its position
        let arrayLength = this.heap.length
        let idx = arrayLength - 1
        let insertedElement = this.heap[idx]
        while(idx >0) {
            let parentInx = Math.floor((idx -1)/2)
            let parent = this.heap[parentInx]
            if(parent >= insertedElement) break;
            this.heap[parentInx] = element
            this.heap[idx] = parent
            idx = parentInx
        }
    }

    //remove the largest value -> since in max binary heap root is the largest value we need to remove it and find the new root 
    // rearrange O(log(n)) - T - extract - O(1)
    remove() {
        let lastValue = this.heap[this.heap.length -1]
        let root = this.heap[0]
        this.heap[0] = lastValue
        this.heap[this.heap.length -1] = root
        let max = this.heap.pop()

        //bubble down -> since we made the last value of array as the root, 
        //we need to check if the children are greater or not, if so push this down untill we find the new root
        let parentIdx = 0 
        let parent = this.heap[parentIdx]
        let lchild 
        let rchild 
        while(true) {
            let swap = null
            let lchildIdx = (parentIdx * 2)+1
            let rchildIdx = (parentIdx * 2)+2
            if(lchildIdx < this.heap.length) {
                lchild = this.heap[lchildIdx]
                if(parent < lchild) {
                    swap = lchildIdx
                }
            }
            if(rchildIdx < this.heap.length) {
                rchild = this.heap[rchildIdx]
                if((swap && rchild > lchild) || (!swap && rchild > parent)) {
                    swap = rchildIdx
                }
            }
            if(swap === null) break;
            this.heap[parentIdx] = this.heap[swap]
            this.heap[swap] = parent
            parentIdx = swap
            
        }
        return max
    }
    size() {
        return this.heap.length
    }
    peek() {
        return this.heap[0]
    }
}