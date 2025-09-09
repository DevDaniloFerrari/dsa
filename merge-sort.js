//two list of int
//they are sorted
//merge than

function mergeList(array1, array2) {
    var sortedArray = []
    var firstPointer = 0
    var secondPointer = 0

    while(firstPointer < array1.length && secondPointer < array2.length){
        if(array1[firstPointer] > array2[secondPointer]){
            sortedArray.push(array2[secondPointer])
            secondPointer++
        }
        else{
            sortedArray.push(array1[firstPointer])
            firstPointer++
        }
    }

    while(firstPointer < array1.length){
        sortedArray.push(array1[firstPointer])
        firstPointer++
    }

    while(secondPointer < array2.length){
        sortedArray.push(array2[secondPointer])
        secondPointer++
    }

    return sortedArray
}

//1 3 5    2 4 6
//  1        
//         0  


console.log(mergeList([1, 3, 5], [2, 4, 6]));
