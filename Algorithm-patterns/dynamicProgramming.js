// "Whenever you see a question that asks for the maximum or minimum of something, 
// consider Dynamic Programming as a possibility. "

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

// How to generate subsequence of an array
function generateSubSequencePowerSet(array) {
    const subsets = [[]]
    for(const ele of array) {
        const length = subsets.length
        for (let i = 0; i < length; i++) {
        const currentSubset = subsets[i]
        subsets.push(currentSubset.concat(ele))
        }
    }
    return subsets
    
}

function generateSubSequenceRecursive(array, idx = null) {
    if(idx === null) {
        idx = array.length - 1
      }
      if(idx < 0) {
        return [[]]
      }
      const ele = array[idx]
      const subsets = generateSubSequenceRecursive(array, idx - 1)
      const length = subsets.length
      for(let i=0; i< length; i++) {
        const currentSubset = subsets[i]
        subsets.push(currentSubset.concat(ele))
      }
      return subsets
    
}