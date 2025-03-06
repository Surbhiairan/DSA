/**
 * 1. Prefix Sum
 * Prefix Sum involves preprocessing an array to create a new array where 
 * each element at index i represents the sum of the array from the start up to i. 
 * This allows for efficient sum queries on subarrays.
 * 
 * Usage - Use this pattern when you need to perform multiple sum 
 * queries on a subarray or need to calculate cumulative sums.
 * 
 * Sample Problem:
Given an array, find the sum of all elements between indices i and j. There will be multiple such queries on the same array.

Example:

Input: nums = [1, 2, 3, 4, 5, 6], i = 1, j = 3

Output: 9

Explanation:
Preprocess the array A to create a prefix sum array: P = [1, 3, 6, 10, 15, 21].

To find the sum between indices i and j, use the formula: P[j] - P[i-1].
 */


/**
 * 2. Two Pointer
 * Use this pattern when dealing with sorted arrays or lists where you need to 
 * find pairs that satisfy a specific condition.
Sample Problem:
Find two numbers in a sorted array that add up to a target value.

Example:

Input: nums = [1, 2, 3, 4, 6], target = 6

Output: [1, 3]

Explanation:
Initialize two pointers, one at the start (left) and one at the end (right) of the array.

Check the sum of the elements at the two pointers.

If the sum equals the target, return the indices.

If the sum is less than the target, move the left pointer to the right.

If the sum is greater than the target, move the right pointer to the left.
 */

/**
 * 3. Sliding Window
 * The Sliding Window pattern is used to find a subarray or substring that satisfies a 
 * specific condition, optimizing the time complexity by maintaining a window of elements. 
 * Use this pattern when dealing with problems involving contiguous subarrays or substrings.
 * 
 */


