function Xbonacci(signature,n,count = 0){
  //your code here
  
  let next = signature.slice(count, signature.length);
  let sum = next.reduce((a,b) => a + b, 0);
  let arr = [];
  
  if(signature.length > n){
    for (let i = 0; i < n;i++){
    arr.push(signature[i])
    }
    return arr;
  }else if(signature.length !== n){
    return Xbonacci([...signature,sum],n,count + 1);
  }
  return signature.slice(0,n)
}

  console.log(Xbonacci([0,1,1],2));
