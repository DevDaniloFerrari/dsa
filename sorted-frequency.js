function sortedFrequency(array, number){
    let middle = Math.floor(array.length / 2)

    do{
        if(array[middle] === number || middle === array.length - 1)
            break
        
        if(array[middle] > number)
            middle = Math.floor(middle / 2)
        else
            middle = Math.floor((array.length + middle) / 2)
    }
    while(middle !== 0 )

    let left = middle
    let right = middle

    while(array[left] === number || array[right] === number){
        if(array[left] === number)
            left--

        if(array[right] === number)
            right++
    }

    return right - left - 1
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1 
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1