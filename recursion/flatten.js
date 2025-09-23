function flatten(array) {
  let result = [];

  for(let i = 0; i < array.length; i++){
    if(typeof(array[i]) === 'number')
        result.push(array[i])
    else
        result = result.concat(flatten(array[i]))
  }

  return result
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
