function isIsogram(str){
    return str.toLowerCase().split('').filter((item, pos, arr)=> arr.indexOf(item) === pos).length === str.length;
}
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));