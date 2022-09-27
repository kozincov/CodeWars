function digPow(n, p) {
    let arr = ('' + n).split('').map(Number)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ** (p + i)
    }
    return sum % n === 0 ? sum / n : -1
}

console.log(digPow(46288, 3))
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51