function isSubsequence(word, phrase){
    let wordIndex = 0

    for(let i = 0; i < phrase.length; i++){
        if(word[wordIndex] === phrase[i] && wordIndex === word.length-1){
            return true
        }
        
        if(word[wordIndex] === phrase[i] && wordIndex < word.length-1){
            wordIndex++
        }
        else{
            i = i - wordIndex
            wordIndex = 0
        }
    }

    return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('hello', 'uau hell hello word')); // true
console.log(isSubsequence('abc', 'abrackkabckkadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)