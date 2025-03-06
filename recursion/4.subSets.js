// Problem 1: Sum of subset
// Ex - [1,2,3]
//Output - [0,1,2,3,3,4,5,6]
function subSet(nums) {
    let n = nums.length
    let output = []
    function helper(index, sum, array) {
        if(index > n-1) {
            output.push(sum)
            return
        }
        array.push(nums[index])
        helper(index+1, sum+nums[index], array)
        array.pop()
        helper(index+1, sum, array)
    }
    helper(0, 0, [])
    return output.sort((a,b) => a-b)
}
// console.log(subSet([1,2,3]))

// Problem 2: array can have duplicate value, we need to find unique subsets
// https://leetcode.com/problems/subsets-ii/description/
function subSet2(nums) {
    const n = nums.length
    const output = []
    function helper(start, array) {
        output.push([...array])
        for(let i=start; i< n; i++) {
            if(i > start && nums[i] === nums[i-1]) continue; // to avoid duplicate values
            array.push(nums[i])
            helper(i+1, array)
            array.pop()
        }
    }
    helper(0, [])

    return output
}
console.log(subSet2([1,2,2]))