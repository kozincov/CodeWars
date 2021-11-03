var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let arr =[];
  for(let i = 0; i < iterable.length; i++){
    let num = 0;
    let next = 0;
    if(iterable[i] !== iterable[i + 1]){
      arr.push(iterable[i]);
    }
  }
  
  
  return arr;
}
