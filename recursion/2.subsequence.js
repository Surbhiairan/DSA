// subsequence or subarray is part of string or array where order of values matter
/**
 * ex - [1,2,3,4,5]
 * 1,2 - subarray
 * 1,4 - subarray
 * 3,4,5 - subarray
 * 4,2 - not subarray
 * 
 * to create a subarray, we have 2 options for any value - take/not take based on condition
 */

// Problem 1: Print all subsequence
function subSequence(index,n, array, arr) {
    if(index > n) {
        console.log(array)
        return
    }
    array.push(arr[index])
    subSequence(index + 1,n, array, arr) // take
    array.pop()
    subSequence(index + 1,n, array, arr) //not take
}
subSequence(0,2, [], [1,2,3])

//Problem 2: Print all subsequence with sum as k
function sumSubsequence(index, n, array, arr, sum, k) {
    if(index > n) {
        if(sum === k) {
            console.log(array)
        }
        return
    }
    array.push(arr[index])
    sumSubsequence(index + 1,n, array, arr, sum+arr[index], k) // take
    array.pop()
    sumSubsequence(index + 1,n, array, arr, sum, k) //not take
}
//sumSubsequence(0, 2, [], [1,2,1], 0, 2)

//Problem 3: Print 1st subsequence with sum as k, rather than all we just want 1
function sumSubsequence2(index, n, array, arr, sum, k) {
    if(index > n) {
        if(sum === k) {
            console.log(array)
            return true
        }
        return false
    }
    array.push(arr[index])
    if(sumSubsequence2(index + 1,n, array, arr, sum+arr[index], k)) {
        return true
    } // take
    array.pop()
    if(sumSubsequence2(index + 1,n, array, arr, sum, k)) {
        return true
    } //not take

    return false
}
// sumSubsequence2(0, 2, [], [1,2,1], 0, 2)

//Problem 3: Print the no. of subsequence whose sum is k
function countSubSequence(index, n, arr, sum, k) {
    if(index > n) {
        if(sum === k) return 1
        return 0
    }
    // array.push(arr[index])
    let left = countSubSequence(index+1, n, arr, sum+arr[index], k)
    // array.pop()
    let right = countSubSequence(index+1, n, arr, sum, k)
    return left + right
}
// console.log(countSubSequence(0, 2, [1,2,1], 0, 2))