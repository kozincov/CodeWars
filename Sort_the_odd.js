function sortArray(array) {

var odd = array.filter(num => num % 2).sort((a,b) => a - b);
  return array.map(replace_odd_inorder);

  function is_odd(num) {

    return num % 2;
  }

  function replace_odd_inorder(num) {

    return is_odd(num) ? odd.shift() : num;
  }
}
