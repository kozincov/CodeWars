function findOdd(arr) {
    return arr.reduce((a, b) => a ^ b);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])) // returns 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))//-1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))//5