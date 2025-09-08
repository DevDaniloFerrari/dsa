//write a function that calculate the maximum sum of n consecutive elements in the array
//to solve subarray problemns i can use sliding window 

function maxSubarraySum(array, num){
    let max = 0;
    if(num > array.length)
        return null

    for(let i = 0; i < num; i++){
        max += array[i]
    }

    let tempMax = max
    for(let j = num; j < array.length; j++){
        tempMax = max + array[j] - array[j-num]
        if(tempMax > max)
            max = tempMax
    }

    return max;

}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6], 1)) // 13
console.log(maxSubarraySum([], 0)) // null