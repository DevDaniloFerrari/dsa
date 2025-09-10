

function areThereDuplicates(...args){
    var values = {}

    for(let value of args){
        values[value] = values[value] + 1 || 1
        if(values[value] > 1)
            return true
    }

    return false
}

console.log(areThereDuplicates(1, 1, 3,4,5,6,7,8,9,10,11,12,13,14,15)) // true
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 