// function findLongestSubstring(string) {
//   if (string.length === 0) return 0;

//   let hashmap = {};
//   let longest = 0;
//   let actualSize = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (!hashmap[string[i]]) hashmap[string[i]] = i;
//     else {
//       actualSize = Object.keys(hashmap).length;
//       if (actualSize > longest) longest = actualSize;
//       i = hashmap[string[i]];
//       hashmap = {};
//     }
//   }

//   actualSize = Object.keys(hashmap).length;
//   if (actualSize > longest) longest = actualSize;

//   return longest;
// }

function findLongestSubstring(string){
  let longest = 0
  let seen = {}
  let start = 0

  for(let i = 0; i < string.length; i++){
    let char = string[i]
    
    if(seen[char])
      start = Math.max(start, seen[char])

    longest = Math.max(longest, i - start + 1)

    seen[char] = i + 1
  }

  return longest
}

// console.log(findLongestSubstring(''))// 0
// console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
