// T - O(n^2), Not stable , In place
let arr = [2,1,9,7,5]

function selectionSort(arr) {
    for(let i =0; i< arr.length-1; i++) {
        let minIndex = i
        for(j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectionSort(arr))