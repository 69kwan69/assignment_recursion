function fibs(n) {
  if (n == 1) return [0];
  else if (n == 2) return [0, 1];
  arr = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1]);
  }
  return arr;
}

function fibsRec(n) {
  if (n < 2) return n;
  return fibsRec(n - 1) + fibsRec(n - 2);
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // 21
