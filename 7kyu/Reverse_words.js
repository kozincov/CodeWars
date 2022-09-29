function reverseWords(str) {
    // Go for it

    let arr = str.split(' ').map(m => m.split('').reverse().join(''))
    return arr.join(' ')
}

console.log(reverseWords('apple'))
console.log(reverseWords('a b c d'))