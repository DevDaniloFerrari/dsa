function recursiveRange(number){
    if(number === 1) return 1
    return number + recursiveRange(number - 1)
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55