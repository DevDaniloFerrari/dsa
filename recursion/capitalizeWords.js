function capitalizeWords(words) {
    let capitalizedWords = []

    let capitalize = (arrayWords) => {
        if(arrayWords.length === 0) return
        capitalizedWords.push(arrayWords[0].toUpperCase())
        return capitalize(arrayWords.slice(1))
    }

    capitalize(words)

    return capitalizedWords
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']