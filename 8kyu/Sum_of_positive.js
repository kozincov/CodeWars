function positiveSum(arr) {
    let sum = 0
    for (const item of arr) {
        if (item > 0) {
            sum = sum + item
        }
    }
    return sum
}

console.log(positiveSum([1, 2, 3, 4, 5]))