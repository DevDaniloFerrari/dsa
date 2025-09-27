function linearSearch(array, num){
    for(let i = 0; i < array.length; i++)
        if(array[i] === num) return i
    return -1 
}

console.log(linearSearch([1,2,3,4,5], 5))