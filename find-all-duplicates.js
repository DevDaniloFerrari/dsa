function findAllDuplicates(numbers){
    let elements = {}
    let duplicates = []

    for(let number of numbers)
        elements[number] = elements[number] + 1 || 1
   
    for(let element of Object.keys(elements)){
        if(elements[element] === 2)
            duplicates.push(+element)
    }

    return duplicates
}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1