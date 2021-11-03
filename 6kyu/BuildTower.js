function towerBuilder(nFloors) {
  // build here
  let space,start,arr = [];
  for(let i = 1;i <= nFloors;i++){
    space = " ".repeat(nFloors - i);
    start = "*".repeat((2 * i) - 1);
    arr.push(space + start + space);
  }
  return arr;
}
