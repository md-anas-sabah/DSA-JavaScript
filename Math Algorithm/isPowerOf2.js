function isPowerOf2(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOf2(1)); //true
console.log(isPowerOf2(2)); //true
console.log(isPowerOf2(5)); //false
console.log(isPowerOf2(4)); //true

// Time COmplexity- O(logn)

// Optimized Solution

function isPowerOf2BitWise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}
