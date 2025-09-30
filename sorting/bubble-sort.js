function bubbleSort(array){
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(array[j] > array[j + 1])
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
        }
    }

    return array
}

console.log(bubbleSort([4,5,1,7,8,9,3,6,2]))