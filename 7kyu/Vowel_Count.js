function getCount(str) {
    let arr = str.split('')
    let arr1 = arr.filter(f => (f === 'a' || f === 'e' || f === 'i' || f === 'o' || f === 'u'))
    return arr1.length;
}

console.log(getCount("abracadabra"))