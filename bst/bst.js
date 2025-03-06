class Node {
    constructor(val) {
        this.value = val;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(val)
        if(this.root === null) {
            this.root = newNode
            return this
        } else {
            let current = this.root
            while(true) {
                if(value === current.value) return undefined
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode
                        return this
                    } 
                    current = current.left
                } else {
                    if(current.right === null) {
                        current.right = newNode
                        return this
                    } 
                    current = current.right
                }
            }
            
        }
    }
    find(value) {
        if(this.root === null) return null
        let current = this.root
        let found = false
        while(current && !found) {
            if(value < current.value) {
                current = current.left
            }else if(value > current.value) {
                current = current.right
            } else {
                found = true
            }

        }
        return current
    }
    BFS() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)
        while(queue.length) {
            node = queue.shift()
            data.push(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }
    // TC - O(N)
    //SC - O(N)
    DFSPreOrder() {
        let data = []
        let current = this.root
        function traverse(node) {
            data.push(node)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data 
    }
    DFSPostOrder() {
        let data = []
        let current = this.root
        function traverse(node) {
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node)
        }
        traverse(current)
        return data 
    }
    //returns the node in sorted order
    DFSInOrder() {
        let data = []
        let current = this.root
        function traverse(node) {
            if(node.left) traverse(node.left)
            data.push(node)
            if(node.right) traverse(node.right)
        }
        traverse(current)
        return data 
    }

    //Preorder, inorder, postorder traversal in single code
    // Video - https://www.youtube.com/watch?v=ySp2epYvgTE&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=14

    heightOfTree() {
        let height = -1
        let queue = []
        queue.push(this.root)
        while(queue.length) {
            ++height
            let size = queue.length
            while(size > 0) {
                --size
                let currentNode = queue.shift()
                if(currentNode.left !== null) queue.push(currentNode.left)
                if(currentNode.right !== null) queue.push(currentNode.right)
            }
        }
        return height
    }

    //TC - O(n)
    //SC - O(n)
    heightOfTreeRec(root) {
        if(root === null) return 
        let heightOfLeft = heightOfTreeRec(root.left)
        let heightOfright = heightOfTreeRec(root.right)

        return Math.max(heightOfLeft, heightOfright) + 1
    }
}