function fib(n) {
  const f = [0, 1];
  for (let i = 0; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f;
}

console.log(fib(3));
