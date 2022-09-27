let countBits = function(n) {
    let bin = n.toString(2).split('').map(m=>+m)
    let sum = 0
    for(let i=0;i<bin.length;i++){
        sum+=bin[i]
    }
    return sum

};

console.log(countBits(5139686025))