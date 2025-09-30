function bubbleSort(array){
    let didAnySwap = false
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(array[j] > array[j + 1]){
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                didAnySwap = true
            }
        }

        if(!didAnySwap)
            break
        else
            didAnySwap = false
    }

    return array
}

// console.log(bubbleSort([4,5,1,7,8,9,3,6,2]))
console.log(bubbleSort([9,1,2,3,4,5,6,7,8]))