function median(array) {
//code here
  array.sort((a,b) => a - b)
  console.log(array);
  let arr = Math.floor((array.length - 1) / 2);
  console.log(arr);
  let arr1 = Math.ceil((array.length - 1) / 2)
  console.log(arr1);
  let med = (array[arr] + array[arr1])/2;
  return med;
}
