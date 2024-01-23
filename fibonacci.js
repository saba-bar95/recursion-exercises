function fibonacci(n) {
  let first = 1;
  let second = 1;
  let third;

  for (i = 2; i < n; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
}

// =============== Recursion Method

function fibonacciRec(val) {
  if (val <= 1) return val;
  return fibonacciRec(val - 1) + fibonacciRec(val - 2);
}
