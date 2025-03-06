// Problem 1:  print name 1 to N times
function namefun(i, n) {
    if(i > n) return
    console.log('Surbhi')
    namefun(i+1, n)
}
// namefun(1, 3)

//Problem 2: Print N to 1
function reverseOrder(n) {
    if(n === 0) {
        return
    }
    console.log(n)
    reverseOrder(n-1)
}
// reverseOrder(3)

//Problem 3: Print 1 to N using backtrack
function reverseOrder2(n) {
    if(n === 0) {
        return
    }
    reverseOrder2(n-1)
    console.log(n)
}
//reverseOrder2(3)

// Problem 4: Print N to 1 using backtracking
function reverseOrder3(i, n) {
    if(i > n) {
        return
    }
    reverseOrder3(i+1, n)
    console.log(i)
}
// reverseOrder3(1,3)

//Problem 5: Sum of N numbers
function sum(n, total=0) {
    if(n === 0) {
        // console.log(total)
        return 0
    }
    return n + sum(n-1)
    // sum(i+1, n, total)
}
// console.log(sum(3, 0))

//Problem 6: Reverse an array using recursion
let array = [1,2,3,4,5]
function reverse(i, n, array) {
    if(i>= n) return
    let temp = array[i]
    array[i] = array[n - i -1]
    array[n - i -1] = temp
    reverse(i+1, n, array)
}
reverse(0, 4, array)
// console.log(array)

// Problem 7: check if stirng is Palindrome
function palindrome(i,n,str) {
    if(i >= n) return true
    if(str[i] !== str[n]) return false
    else {
        return palindrome(i+1, n-1, str)
    }
    // return true
}
console.log(palindrome(0, 7, 'maddamdd'))