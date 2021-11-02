function solution(string) {
  let re = /([A-Z])/g;  
  return (string.replace(re, ' $1'));
}
