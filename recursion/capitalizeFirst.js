function capitalizeFirst(words) {
    let capitalizedWords = []

    let capitalize = (array) => {
        if(array.length === 0) return
        capitalizedWords.push(array[0].charAt(0).toUpperCase() + array[0].slice(1))
        return capitalize(array.slice(1)) 
    }

    capitalize(words)

    return capitalizedWords

}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']