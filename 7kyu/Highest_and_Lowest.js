function highAndLow(numbers) {
    let sort = (numbers.split(' ').sort((a,b)=> a-b))
    let low = sort[0]
    let high = sort[sort.length - 1]
    return `${high} ${low}`
}

// console.log(highAndLow("1 2 3 4 5")) // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")) // return "5 -3"
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // return "9 -5"