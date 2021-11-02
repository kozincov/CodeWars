function towerBuilder(nFloors) {
  // build here
  let space = "",star = "",arr = [];
  for(let i = 1;i <= nFloors;i++){
    space = (" ").repeat(nFloors - i);
    star = ("*").repeat((2 * i) - 1);
    arr.push(space + star + space);
  }
  return arr;
}
