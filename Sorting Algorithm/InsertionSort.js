function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

//Big O = O(n^2)

const arr = [8, 3, 1, 4, 4];
insertion_sort(arr);
console.log(arr);
