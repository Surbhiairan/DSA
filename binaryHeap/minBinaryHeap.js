// const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]

class MinHeap {
    constructor(array) {
      this.heap = this.buildHeap(array);
    }

    size() {
      return this.heap.length
    }
  
    buildHeap(array) {
      // Write your code here.
      const firstParentIdex = Math.floor((array.length - 2) / 2)
      for (let currentIdx = firstParentIdex; currentIdx >= 0; currentIdx--) {
        this.siftDown(currentIdx, array.length - 1, array)
      }
      return array
    }
  
    siftDown(currentIndex, endIdx, heap) {
      // Write your code here.
      let leftChildIdx = (currentIndex * 2) + 1
      while (leftChildIdx <= endIdx) {
        const rightChildIdx = currentIndex * 2 +2 <= endIdx ? currentIndex * 2 +2 : -1
        let idxToSwap
        if(rightChildIdx !== -1 && heap[rightChildIdx] < heap[leftChildIdx]) {
          idxToSwap = rightChildIdx
        } else {
          idxToSwap = leftChildIdx
        }
        if(heap[idxToSwap] < heap[currentIndex]) {
          this.swap(currentIndex, idxToSwap, heap)
          currentIndex = idxToSwap
          leftChildIdx = currentIndex * 2 + 1
        } else {
          return 
        }
      }
    }
  
    siftUp(currentIndex, heap) {
      // Write your code here.
      let parentIndex = Math.floor((currentIndex -1) / 2)
      while (currentIndex > 0 && heap[currentIndex] < heap[parentIndex]) {
        this.swap(currentIndex, parentIndex, heap)
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      }
    }
  
    peek() {
      // Write your code here.
      return this.heap[0]
    }
  
    remove() {
      // Write your code here.
      this.swap(0, this.heap.length - 1, this.heap)
      const valueToremove = this.heap.pop()
      this.siftDown(0, this.heap.length - 1, this.heap)
      return valueToremove
    }
  
    insert(value) {
      // Write your code here.
      this.heap.push(value)
      this.siftUp(this.heap.length -1, this.heap)
    }
  
    swap(i, j, heap) {
      const temp = heap[i]
      heap[i] = heap[j]
      heap[j] = temp
    }
  }

  const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]
  const minHeap = new MinHeap(array)
  console.log(minHeap)
  minHeap.insert(76)
  console.log(minHeap)

  
  // Do not edit the line below.
  exports.MinHeap = MinHeap;
  