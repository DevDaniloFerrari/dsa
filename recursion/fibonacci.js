function fibonacci(number){
    if(number <= 1) return number
    return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log(fibonacci(4)) // 3
console.log(fibonacci(10)) // 55
console.log(fibonacci(28)) // 317811
console.log(fibonacci(35)) // 9227465