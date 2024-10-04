function fibIter(n) {
  x = [0, 1];
  for (i = 2; i < n; i++) {
    x.push(x.at(-1) + x.at(-2));
  }
  return x;
}

console.log(fibIter(8));

function fib(n) {
  if (n <= 2) {
    return [0, 1];
  }
  x = fib(n - 1);
  x.push(x[n - 2] + x[n - 3]);
  return x;
}

console.log(fib(8));

