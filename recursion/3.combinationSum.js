//Problem 1: Find the subarray which sums equal to target. You can use same value any number of times
// Ex - [2,3,6,7] target = 7
//Output - [[2,2,3], [7]]
// https://leetcode.com/problems/combination-sum/description/
function combinationSum(nums, target) {
    const n = nums.length 
    const output = []
    function helper(index,target, array) {
        if(index === n) {
            if(target === 0) output.push([...array])
            return
        }
        //take
        if(nums[index] <= target) {
            array.push(nums[index])
            helper(index, target-nums[index], array) // here we are not increasing the index (using same value if possible)
            array.pop()
        }
        //not take
        helper(index+1, target, array)

    }
    helper(0, target, [])
    return output
}
// console.log(combinationSum([2,3,6,7], 7))

//Problem 2: find the subarray whose target sum is k, there should not be any duplicate entries
//EX - [1,1,1,2,2] target = 4
//Output = [[1,1,2], [2,2]]
// if the array is not sorted, then we need to 1st sort the array as well
//https://leetcode.com/problems/combination-sum-ii/description/
function combinationSum2(nums, target) {
    const n = nums.length 
    const output = []
    function helper(index,target, array) {
        if(target === 0) {
            output.push([...array])
            return
        }
        for(let i=index; i< n; i++) {
            if(nums[i] > target) break; // to avoid unnecessary recursion
            if(i > index && nums[i] === nums[i-1]) continue; // to avoid duplicate value
            array.push(nums[i])
            helper(i+1, target - nums[i], array)
            array.pop()
        }

    }
    helper(0, target, [])
    return output
}
console.log(combinationSum2([1,1,1,2,2], 4))