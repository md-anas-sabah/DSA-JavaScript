function bubbleSort(arr) {
  let swapped;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

//Big O - O(n^2)
let arr = [1, -4, 31, 12, 32];
bubbleSort(arr);

console.log(arr);
