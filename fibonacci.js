function tribonacci(signature,n){
  let newArr;
  if(n < 1){
    return [];
  } else {
    for(let i = 0; i < n; i++){
      let sum = signature[i] + signature[i + 1] + signature[i + 2];
      signature[i+3]=sum;
      newArr = signature.slice(0,n);
    }
      return newArr;
    }
  }
