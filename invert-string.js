//This problem we can simply solve with two pointers.
//two pointers is a solve problem pattern.

function invert(string) {
  let array = string.split("");
  let first = 0;
  let last = array.length - 1;

  while (last > first) {
    let char = array[last];
    array[last] = array[first];
    array[first] = char;

    first++;
    last--;
  }

  return array.join("");
}

console.log(invert("danilo"));
