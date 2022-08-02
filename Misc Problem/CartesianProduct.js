// Problem: Given two finite non-empty sets , find their Cartesian Product.
// Example: const A= [1,2] const B= [1,3] then AXB [[1,1],[1,3],[2,1],[2,3]]

function CartesianProduct(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

// Big-O -> O(nm)

const arr1 = [1, 3, 5];
const arr2 = [12, 5];

console.log(CartesianProduct(arr1, arr2));
