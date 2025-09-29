// function stringSearch(string, pattern){
//     let count = 0
//     let pointer = 0

//     for(let i = 0; i < string.length; i++){
//         if(string[i] === pattern[pointer])
//             pointer++
//         else if(pointer !== 0){
//             pointer = 0
//             i--
//         } 

//         if(pointer === pattern.length){
//             count++
//             pointer = 0
//         }
//     }

//     return count
// }

function stringSearch2(string, pattern){
    let count = 0

    for(let i = 0; i < string.length; i++){
       for(let j = 0; j < pattern.length; j++){
            if(string[i + j] !== pattern[j]) break
            if(j === pattern.length - 1) count++
       }
    }

    return count
}

console.log(stringSearch2('abeodabckeabneabcurzg', 'abc'))
console.log(stringSearch2('abeabc', 'abc'))
console.log(stringSearch2('babceabc', 'abc'))