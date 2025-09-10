function constructNote(message, letters){
    let messageCounter = {}
    let lettersCounter = {}

    if(message.length > letters.length)
        return false

    for(let char of letters)
        lettersCounter[char] = lettersCounter[char] + 1 || 1

    for(let char of message){
        messageCounter[char] = messageCounter[char] + 1 || 1
        if(messageCounter[char] > lettersCounter[char] || 0)
            return false
    }

    return true
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true