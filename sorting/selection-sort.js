function selectionSort(array) {
  let smallestIndex = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) smallestIndex = j;
    }

    if (i !== smallestIndex && array[i] > array[smallestIndex])
      [array[i], array[smallestIndex]] = [array[smallestIndex], array[i]];
  }

  return array;
}

console.log(selectionSort([3, 6, 1, 2, 5, 4, 8, 9, 7]));
