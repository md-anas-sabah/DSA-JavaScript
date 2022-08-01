function linear_search(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}
//Big O = O(n)

console.log(linear_search([1, 2, 3, 4, 5], 4)); //3
