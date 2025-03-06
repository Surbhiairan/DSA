//divide and conqure
const arr = [5, 4, 7, 3, 8, 9]

function divide(arr, start, end) {
    if(start < end) {
        let mid = Math.floor((start+end) /2)
        divide(arr, start, mid)
        divide(arr, mid +1, end)
        merge(arr, start,mid,  end)
    }
}

function merge(arr, l,mid, r) {
    let i = l;          // Left part starting index
    let j = mid + 1;    // Right part starting index
    let k = 0;
    let result = []
    while(i<= mid && j <= r) {
        if(arr[i] <= arr[j]) {
            result[k] = arr[i]
            i++
        }else {
            result[k] = arr[j]
            j++
        }
        k++
    }

    while(i <= mid) {
        result[k] = arr[i]
        i++
        k++
    }
    while(j<= r) {
        result[k] = arr[j]
        j++
        k++
    }
    for (let m = 0; m < result.length; m++) {
        arr[l + m] = result[m];
    }
}

divide(arr, 0, arr.length -1)
console.log(arr)