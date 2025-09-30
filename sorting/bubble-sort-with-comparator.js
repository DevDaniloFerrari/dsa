function bubbleSort(array, comparator = null) {
  let didAnySwap = false;
  const compare = (j) => {
    if (typeof comparator === "function") {
      if (comparator(array[j], array[j + 1]) > 0) swap(j);
    } else if (array[j] > array[j + 1]) swap(j);
  };

  const swap = (j) => {
    [array[j], array[j + 1]] = [array[j + 1], array[j]];
    didAnySwap = true;
  };

  for (let i = array.length - 1; i > 0; i--) {
    didAnySwap = false;
    for (let j = 0; j < i; j++) compare(j);

    if (!didAnySwap) break;
  }

  return array;
}

console.log(bubbleSort([1, 2, 3, 4, 5], (a, b) => b - a));
console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}

console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
