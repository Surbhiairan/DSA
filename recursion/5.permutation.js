// Find all the permutations of an array
// Video ref - https://www.youtube.com/watch?v=YK78FU5Ffjw&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=14
function calculatePerm(nums) {
    let output = []
    let n = nums.length
    let freq = new Array(n).fill(false)

    function helper(array) {
        if(array.length === n) {
            output.push([...array])
            return
        }
        for(let i=0; i< n; i++) {
            if(!freq[i]) {
                freq[i] = true
                array.push(nums[i])
                helper(array)
                array.pop()
                freq[i] = false
            }
        }
    }
    helper([])
    return output
}
// console.log(calculatePerm([1,2,3]))

// Problem 2: Permutation with swaping
// Video ref - https://www.youtube.com/watch?v=f2ic2Rsc9pU&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=15

function calculatePerm2(nums) {
    const output = []
    const n = nums.length
    function helper(index, nums) {
        if(index === n) {
            output.push([...nums])
            return
        }
        for(let i=index; i< n; i++) {
            swap(i, index, nums)
            helper(index+1, nums)
            swap(i, index, nums)
        }
    }
    function swap(i,j, nums) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    helper(0, nums)
    return output
}
console.log(calculatePerm2([1,2,3]))