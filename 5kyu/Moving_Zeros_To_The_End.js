function moveZeros(arr) {
    let sum0 = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            sum0++
        }
    }
    let newArr = arr.filter(f => f !== 0)
    for (let j = 1; j <= sum0; j++) {
        newArr.push(0)
    }
    return newArr
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]))//[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]