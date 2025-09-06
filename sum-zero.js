//we have an ordered list of numbers
//tell me the first combination that sum zero
//[-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5]

//we can solve this problem using two pointers

function sumZero(array) {
  let first = 0;
  let last = array.length - 1;

  while (first < last) {
    if (array[first] + array[last] < 0) {
      first++;
      continue;
    }

    if (array[first] + array[last] > 0) {
      last--;
      continue;
    }

    if (array[first] + array[last] === 0) 
        return [array[first], array[last]];
  }
}

console.log(sumZero([-7, -6, -4, -3, -2, -1, 0, 1, 2, 3, 5]));
