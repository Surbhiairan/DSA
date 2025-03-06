// let arr = [2, 5, 4, 3, 2, 6, 5, 2]
// console.log(recur(arr, 0, 2, 0))

// function recur(arr, i, k, count) {
//     let result = []
//     if(i === arr.length) return new Array(count)
//     if(arr[i] === k) {
//         result = recur(arr, i+1, k, count+1)
//         result[count] = i
//         return result
//     } else {
//         return recur(arr, i+1, k, count)
//     }
//     return
// }

// // function recur(arr, i, k) {
// //     //base condition
// //     // console.log(i)
// //     if(i === arr.length ) return -1
// //     let ans = recur(arr, i+1, k)
// //     // console.log(ans)
    
// //     if(ans !== -1) return ans
// //     if(arr[i] === k) {
// //         ans = i
// //     } 
// //     return ans
    
// // }

// function pendingOrders(orderTime, shiftDuration) {
//     let n = orderTime.length;
//     let pendingOrdersAtEnd = new Array(n).fill(0);
//     let remainingTime = [...orderTime]; // Track remaining time for each order
//     let orderIndex = 0; // Track where to resume

//     for (let i = 0; i < n; i++) {
//         let shiftTime = shiftDuration[i];

//         while (shiftTime > 0) {
//             // If current order has remaining work
//             if (remainingTime[orderIndex] > 0) {
//                 if (shiftTime >= remainingTime[orderIndex]) {
//                     shiftTime -= remainingTime[orderIndex]; // Use up shift time
//                     remainingTime[orderIndex] = 0; // Order is completed
//                     orderIndex = (orderIndex + 1) % n;
//                 } else {
//                     remainingTime[orderIndex] -= shiftTime;
//                     shiftTime = 0; // No time left in shift
//                 }
//             }

//             // If we have gone through all orders and they are completed, reset order times
//             if (remainingTime.every(time => time === 0)) {
//                 break; // Stop processing further
//             }
//         }

//         // Store count of remaining orders
//         // console.log(remainingTime)

//         pendingOrdersAtEnd[i] = remainingTime.filter(time => time > 0).length;
//         if(pendingOrdersAtEnd[i] === 0) {
//             remainingTime = [...orderTime];
//             orderIndex = 0
//         }
//     }

//     return pendingOrdersAtEnd;
// }

// // Example Usage
// let orderTime = [1, 2, 4, 1, 2];  
// let shiftDuration = [3, 10, 1, 1, 1];  

// console.log(pendingOrders(orderTime, shiftDuration));  
// // Expected Output: [3, 0, 4, 4, 3]
// let vehicle = {
//     wheels: '4',
//     fuelType: 'Gasoline',
//     color: 'Green'
//   }
//   let carProps = {
//     type: {
//       value: 'Volkswagen'
//     },
//     model: {
//       value: 'Golf'
//     }
//   }
  
//   var car = Object.create(vehicle, carProps);
//   console.log(car);

function callbackFunction(name) {
    console.log("Hello " + name);
  }
  
  function outerFunction(callback) {
    let name = "Please enter your name.";
    callback(name);
  }
  
  outerFunction(callbackFunction);

  async function firstFunction() {
    // Simulate a code delay
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(console.log("First function called"));
          }, 1000);
    })
    
  }
  function secondFunction() {
    console.log("Second function called");
  }
  await firstFunction();
  secondFunction();