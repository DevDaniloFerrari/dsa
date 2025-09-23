function findRotatedIndex(array, number) {
  let middle = Math.floor(array.length / 2);
  let start = 0;
  let end = 0

  while (array[middle] < array[middle + 1]) {
    //if array[middle] > array[0]    right side
    if (array[middle] > array[start]) {
      start = 0;
    }

    //if array[middle] < array[0]    left side
    if (array[middle] < array[start]) {
      start = middle - 1;
      middle = array.length;
    }

    middle = Math.floor((middle + start) / 2)
  }

  console.log(middle);
}

// findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 17) // 5
