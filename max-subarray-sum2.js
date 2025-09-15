//this is a sliding window problem

function maxSubarraySum(array, numberOfElements){
    if(array.length < numberOfElements)
        return null

    let maxSum = 0
    let sum = 0
    
    for(let i = 0; i < numberOfElements; i++)
        sum += array[i]
    
    for(let j = numberOfElements; j < array.length; j++){
        sum = sum + array[j] - array[j-numberOfElements]
        if(sum > maxSum)
            maxSum = sum
    }

    return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null