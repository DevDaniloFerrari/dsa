//Given a string s and an integer k,
//find the length of the longest substring that contains at most k distinct characters.

function longestSubstring(word, charNumbers){
    var windowStart = 0
    var maxLength = 0
    var charFrequency = {}

    for(let windowEnd = 0; windowEnd < word.length; windowEnd++){
        const rightChar = word[windowEnd]
        charFrequency[rightChar] = charFrequency[rightChar] + 1 || 1

        while(Object.keys(charFrequency).length > charNumbers){
            const leftChar = word[windowStart]
            charFrequency[leftChar]--
            if(charFrequency[leftChar] === 0)
                delete charFrequency[leftChar]
            windowStart++
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }

    return maxLength
}

console.log(longestSubstring("araaci", 2))