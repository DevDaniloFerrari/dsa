//implement a funciont that count unique values
//[1,1,1,1,1,2] //2
//[1,2,3,4,4,4,7,7,12,12,13] //7
//[] //0
//[-2,-1,-1,0,1] //4

function countUniqueValues(values) {
    let uniqueValues = 1

    if(values.length === 0)
        return 0

    for(let i = 0; i < values.length - 1; i++)
        if(values[i+1] > values[i])
            uniqueValues++

    return uniqueValues
}

function countUniqueValues2(values) {
    let i = 0
    for(let j = 0; j < values.length; j++){
        if(values[i] !== values[j]){
            i++
            values[i] = values[j]
        }
    }
    return i === 0 ?  0 : i + 1
}

console.log(countUniqueValues2([1,1,1,1,1,2]))
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues2([]))
console.log(countUniqueValues2([-2,-1,-1,0,1]))