function findPairHashMap(array, number){
    var object = {}
    var hasDuplicate = false

    for(let n of array){
        object[n] = ++object[n] || 1
        if(object[n] == 2)
            hasDuplicate = true
    }

    if(hasDuplicate && number === 0)
        return true

    if(!hasDuplicate && number === 0)
        return false

    for(let n of array)
        if(object[n + number] || object[n - number]) 
            return true

    return false
}

function findPairTwoPointers(array, number){
   let orderedArray = array.sort((a,b) => a-b)

   let firstPointer = 0
   let secondPointer = 1

    while(firstPointer < array.length && secondPointer < array.length){
        let value = Math.abs(orderedArray[firstPointer] - orderedArray[secondPointer])
        if(firstPointer !== secondPointer && value === Math.abs(number))
            return true

         if(orderedArray[secondPointer] - orderedArray[firstPointer] < number)
            secondPointer++
         else
            firstPointer++
    }

    return false
}

console.log(findPairTwoPointers([6,1,4,10,2,4], 2)) // true
console.log(findPairTwoPointers([8,6,2,4,1,0,2,5,13],1)) // true
console.log(findPairTwoPointers([4,-2,3,10],-6)) // true
console.log(findPairTwoPointers([6,1,4,10,2,4], 22)) // false
console.log(findPairTwoPointers([], 0)) // false
console.log(findPairTwoPointers([5,5], 0)) // true
console.log(findPairTwoPointers([-4,4], -8)) // true
console.log(findPairTwoPointers([-4,4], 8)) // true
console.log(findPairTwoPointers([1,3,4,6],-2)) // true
console.log(findPairTwoPointers([0,1,3,4,6],-2)) // true
console.log(findPairTwoPointers([1,2,3], 0)) // false