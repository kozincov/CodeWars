function add(x, y){
while(y!=0){
    var carry = x&y;  //calculate if is there any carry we need to add
    x = x^y;   // x is used to hold the sum
    y = carry<<1;  //y is used to hold left shift carry
  }
  return x;
  }
