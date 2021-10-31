function XO(str) {
  let newStr = str.toLowerCase();
  let countX = 0; 
  let countO = 0;
  let serchX = newStr.indexOf('x');
  let serchO = newStr.indexOf('o');

while (serchX !== -1) {
  countX++;
  serchX = newStr.indexOf('x', serchX + 1);
}

while(serchO !== -1){
  countO++;
  serchO = newStr.indexOf('o', serchO + 1);
}
console.log(countO,countX);

if(countX == countO){
  return true;
}
return false;
}