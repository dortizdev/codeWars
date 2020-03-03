function diagonal(n, p) {
  let num = n => (n === 0) ? 1 : n * num(n - 1),
      sum = Math.round(num(n + 1) / (num(n - p) * num(p + 1)))
  return sum
}
