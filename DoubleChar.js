function doubleChar(str) {
  // Your code here
  let newStr = "";
  
  for(let i = 0; i < str.length; i++){
    newStr += str[i] + str[i];
  }
  return newStr;
}
