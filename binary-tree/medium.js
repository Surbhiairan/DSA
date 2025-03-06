//Root to node path
function pathToNode(root, k) {
    let path = []
    function dfs(node) {
        if(node === null) {
            return false
        }
        path.push(node.path)
        if(node.val === k) return true
        if(dfs(node.left) || dfs(node.right)) return true
        
        path.pop()
        return false
    }
    dfs(root)
    return path
}

//Lowest Common Ancestor
/**
 * Problem - https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/1563433619/
 * Video - https://www.youtube.com/watch?v=_-QHfMDde90&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=28
 */

//Nodes At distance K
/**
 * Problem - https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/
 * Video - https://www.youtube.com/watch?v=i9ORlEy6EsI&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=31
 * To traverse from target node to distance k, it can be in any direction
 * We have no way to travel upwards, only access to children nodes of tree
 * 1. we will do a DFS and store the parents node as well for every node
 * 2. From the target node we do DFS in all the directions - up, left, right simultaneously 
 * and also mark the node as visited
 * 3. Once k === 0 we stop and the values in our queue is the output
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if(!root) return []
    const node = findTarget(root, null, target)
    const res = []
    findAllKApart(node, k, res)
    return res
};

const findTarget = (node, parent, target) => {
    if(!node) return null
    node.parent = parent
    if(node === target) return node
    return findTarget(node.left, node, target) || findTarget(node.right, node, target)
}

const findAllKApart = (node, k, res) => {
    if(!node || node.visited) return res
    if(k == 0){
        res.push(node.val)
        return res
    }
    node.visited = true
    findAllKApart(node.left, k-1, res)
    findAllKApart(node.right, k-1, res)
    findAllKApart(node.parent, k-1, res)
    return res
}

