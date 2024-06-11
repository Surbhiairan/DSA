/* A special binary tree with if min heap then parent node is going to be smaller than all the child node 
// if max heap then parent node is going to be largest than all its child node
in heap if represented as array left and right child can be calculated as 
left child -> (parentIndex * 2) + 1
right child -> (parentIndex * 2) + 2
parent node -> Math.floor((idx -1)/2)
*/
class BinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element)
        //bubble up -> check if the new added value is larger than its parent. if so, bubble it up untill it finds its position
        let arrayLength = this.values.length
        let idx = arrayLength - 1
        let insertedElement = this.values[idx]
        while(idx >0) {
            let parentInx = Math.floor((idx -1)/2)
            let parent = this.values[parentInx]
            if(parent >= insertedElement) break;
            this.values[parentInx] = element
            this.values[idx] = parent
            idx = parentInx
        }
    }

    //remove the largest value -> since in max binary heap root is the largest value we need to remove it and find the new root 
    // rearrange O(log(n)) - T - extract - O(1)
    extractMax() {
        let lastValue = this.values[this.values.length -1]
        let root = this.values[0]
        this.values[0] = lastValue
        this.values[this.values.length -1] = root
        let max = this.values.pop()

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
                if(parent < lchild) {
                    swap = lchildIdx
                }
            }
            if(rchildIdx < this.values.length) {
                rchild = this.values[rchildIdx]
                if((swap && rchild > lchild) || (!swap && rchild > parent)) {
                    swap = rchildIdx
                }
            }
            if(swap === null) break;
            this.values[parentIdx] = this.values[swap]
            this.values[swap] = parent
            parentIdx = swap
            
        }
        return max
    }
}