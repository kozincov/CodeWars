function solution(number) {
    if (number > 0) {
        let arr = []
        let sum = 0
        for (let i = 1; i < number; i++) {
            arr.push(i)
        }
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % 3 === 0 || arr[j] % 5 === 0) {
                sum += arr[j]
            }
        }
        return sum
    }
    return 0
}

console.log(solution(10))