//Let's implement a Anagram Check using Hashing/Freqency Counter Solving Problem

function anagramCheck(word, anagram) 
{
    let isAnagram = false;
    let wordCounter = {}
    let anagramCounter = {}

    //create word oject counter
    for (char of word) {
        wordCounter[char] = wordCounter[char] + 1 || 1
    }

    //create anagram oject counter
    for (char of anagram) {
        anagramCounter[char] = anagramCounter[char] + 1 || 1
    }
    
    //compare them
    for (char of anagram) {
        if(anagramCounter[char] !== wordCounter[char])
            return false;
    }

    return true;
}

console.log(anagramCheck('', ''))
console.log(anagramCheck('aaz', 'zza'))
console.log(anagramCheck('anagram', 'nagaram'))
console.log(anagramCheck('rat', 'car'))
console.log(anagramCheck('awesome', 'awesom'))
console.log(anagramCheck('qwerty', 'qeywrt'))
console.log(anagramCheck('texttwisttime', 'timetwisttext'))


