function spinWords(string) {
    let arr = string.split(' ')

    let reverseString = (str) => {
        return str.split('').reverse().join('')
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            let word = arr[i]
            arr[i] = reverseString(word)
        }
    }
    return arr.join(' ')
}

console.log(spinWords("Welcome to qwrsaweq"))