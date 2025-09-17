// function minSubArrayLen(array, min){
//     let startIndex = 0
//     let endIndex = 1
//     let actualMinArrayLen
//     let minArrayLen = array.length

//     if(array.length === 0)
//         return 0

//     if(array.length === 1 && array[0] < min)
//         return 0

//     if(array.length === 1 && array[0] >= min)
//         return 1

//     let sum = array[startIndex] + array[endIndex]

//     while(startIndex < array.length && endIndex < array.length){
//         if(sum >= min){
//             actualMinArrayLen = endIndex - startIndex
//             if(actualMinArrayLen < minArrayLen)
//                 minArrayLen = actualMinArrayLen
//             sum = sum - array[startIndex]
//             startIndex++
//         }
//         else{
//             endIndex++
//             sum = sum + array[endIndex]
//         }

//         if(startIndex === endIndex && array[startIndex] >= min)
//             return 1

//         if(endIndex === array.length - 1 &&  startIndex == 0 && sum < min)
//             return 0
//     }

//     return minArrayLen + 1
// }


function minSubArrayLen(array, sum){
    let total = 0
    let start = 0
    let end = 0
    let minLength = Infinity

    while(start < array.length){
        if(total < sum){
            total += array[end]
            end++
        }

        if(total >= sum){
            minLength = Math.min(minLength, end - start)
            total -= array[start]
            start++
        }

        if(end > array.length)
            break;
    }

    return minLength === Infinity ? 0 : minLength
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0