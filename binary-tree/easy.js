// Problem 1 - check for balanced binary tree (height(left) - height(right) <=1)
/**
 * 
 * @param {Tree node} root 
 * @returns boolean
 * We are using same calculate height algo. If the diff of left - right gets > 1 we return -1
 */
function checkBalancedTree(root) {
    function dfs(node) {
        if(node === null) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)

        if(left === -1 || right === -1) return -1
        if(Math.abs(left - right) > 1) return -1

        return 1 + Math.max(left, right)
    }
    return dfs(root) !== -1
}

//Problem 2: Diameter of binary tree - diameter is path between 2 nodes, not necessary from root
/**
 * Video - https://www.youtube.com/watch?v=Rezetez59Nk&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=17
 * @param root 
 * @returns diameter
 * We are using the same calculate height algo. We are calculating the left+right for each node
 * and putting it into the max.
 */
function findDiameter(root) {
    function dfs(node, max) {
        if(node === null) return 0
        let left = dfs(node.left, max)
        let right = dfs(node.right, max)

        max = Math.max(max, left+right)

        return 1 + Math.max(left,right)
    }
    return dfs(root, 0)
}

//Problem 3: Max Path sum
/**
 * Video: https://www.youtube.com/watch?v=WszrfSwMz58&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=18
 * @param {TreeNode} root 
 * @returns {Number}
 */
function maxPathSum(root) {
    function dfs(node, max) {
        if(node === null) return 0
        // If we get a -ve value from left or right, we do not consider that
        const leftSum = dfs(node.left, max)
        const rightSum = dfs(node.right, max)

        max = Math.max(max, (leftSum + rightSum + node.val))
        // we will be only taking one of the path from root node, either left or right 
        return Math.max(0, node.val + leftSum, node.val + rightSum)

    }
    return dfs(root, -Infinity)

}

// Vertical order traversal
/**
 * Video - https://www.youtube.com/watch?v=q_a6lpbKJdw&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=22
 * we assume that left child is (r-1, c+1) and right child will be (r+1, c+1)
 * and then we traverse from left most col to right most
 * Problem : https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/
 */

//Symmetrical Tree
/**
 * traverse left and right node from root
 * check if the left part is equal to right part
 * and right part is equal to left part 
 * Video - https://www.youtube.com/watch?v=nKggNAiEpBE&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=26
 * 
 */
function checkIfSymmetrical(root) {
    function helper(left, right) {
        if(left === null || right === null) {
            return left === right
        }
        if(left.val !== right.val) return false
        return helper(left.right, right.left) && helper(left.left, right.right)
    }
    return helper(root.left, root.right)
}

//Subtree of another tree
/**
 * 1. Get the point from where main tree node equals subTree root
 * 2. After getting this point simply do symmetrical check from previous 
 * Problem: https://leetcode.com/problems/subtree-of-another-tree/
 */
var isSubtree = function(s, t) {
    if(s === null) return false
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};
function isEqual(root1, root2) {
    if(root1 === null || root2 === null) return root1 === root2
    if(root1.val !== root2.val) return false
    return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right)
}