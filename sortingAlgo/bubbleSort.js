// T - O(n^2), Stable, In-place
let arr = [2,1,9,7,5]

function bubbleSort(arr) {
    let size = arr.length

    for(let i=size-1; i>0; i--) {
        let isSwapped = false
        for(let j=0; j<i; j++) {
            if(arr[j] > arr[j+1]) {
                isSwapped = true
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        if(!isSwapped) break;
    }
    return arr
}

console.log(bubbleSort(arr))