function isPalindrome(string){
    if(string.length === 0 || string.length === 1) return true
    return string[0] === string[string.length - 1] && isPalindrome(string.slice(1, string.length - 1))
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
