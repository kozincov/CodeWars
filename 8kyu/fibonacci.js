function tribonacci(signature,n){
  let newArr;
  let sum;
  if(n < 1){
    return [];
  } else {
    for(let i = 0; i < n; i++){
      sum = signature[i] + signature[i + 1] + signature[i + 2];
      signature[i+3]=sum;
      newArr = signature.slice(0,n);
    }
      return newArr;
    }
  }
