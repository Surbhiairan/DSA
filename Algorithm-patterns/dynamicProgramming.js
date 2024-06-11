"Whenever you see a question that asks for the maximum or minimum of something, consider Dynamic Programming as a possibility. "

function KadanesAlgo(nums) {
    //maximum subarray
    //Given an integer array nums, find the subarray with the largest sum, and return its sum.
    let currentSum = nums[0]
    let maxSum = nums[0]
    for(let i=1; i<nums.length;i++) {
        currentSum = Math.max(currentSum+nums[i], nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}