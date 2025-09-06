//Let's implement a Anagram Check using Hashing/Freqency Counter Solving Problem

function anagramCheck(word, anagram) 
{
    if(word.lenght !== anagram.length)
        return false

    let wordCounter = {}
    let anagramCounter = {}

    //create word oject counter
    for (let char of word) {
        wordCounter[char] = wordCounter[char] + 1 || 1
    }

    //create anagram oject counter
    for (let char of anagram) {
        anagramCounter[char] = anagramCounter[char] + 1 || 1
    }
    
    //compare them
    for (let char of anagram) {
        if(anagramCounter[char] !== wordCounter[char])
            return false
    }

    return true;
}


function anagramCheck2(word, anagram){
    if(word.length !== anagram.length)
        return false
    
    let wordCounter = {}

    for(let char of word)
        wordCounter[char] = ++wordCounter[char] || 1 

    for(let char of anagram)
        if(wordCounter[char] > 0)
            wordCounter[char]--
        else
          return false
    
    return true;
}

console.log(anagramCheck2('', ''))
console.log(anagramCheck2('aaz', 'zza'))
console.log(anagramCheck2('anagram', 'nagaram'))
console.log(anagramCheck2('rat', 'car'))
console.log(anagramCheck2('awesome', 'awesom'))
console.log(anagramCheck2('qwerty', 'qeywrt'))
console.log(anagramCheck2('texttwisttime', 'timetwisttext'))