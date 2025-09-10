function sameFrequency(number1, number2){
    let word1 = number1.toString()
    let word2 = number2.toString()

    if(word1.length !== word2.length)
        return false

    let charCounters1 = {}
    let charCounters2 = {}

    for(let word of word1)
        charCounters1[word] = charCounters1[word] + 1 || 1

    for(let word of word2)
        charCounters2[word] = charCounters2[word] + 1 || 1
    
    for(let word of word1)
        if(charCounters1[word] !== charCounters2[word])
            return false

    return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false