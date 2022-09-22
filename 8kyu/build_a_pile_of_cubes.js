function findNb(m) {
    // your code
  let result = 0;
  let n =0;
  
  while(result < m){
    n+=1;
    result += n**3;
  }
  return result === m ? n : -1;
}
