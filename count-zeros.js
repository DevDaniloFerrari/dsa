function countZeroes(array){
    let middle = Math.floor(array.length / 2)
    let primeiro = 0
    let segundo = 0

    while(array[middle] === 1){
        primeiro++
        middle = Math.floor((array.length + middle) / 2)
        if(middle === array.length-1)
            middle++
    }

    if(middle !== array.length)
        while(array[middle] !== 1){
            segundo++
            middle--
            if(middle === -1)
                break
        }
    else
        middle--

    return array.length - middle - 1
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0