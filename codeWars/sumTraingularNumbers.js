function sumTriangularNumbers(n){
  let sum = 0
  if (n < 0){
    return 0
  }else{
  return (n * (n + 1) * (n + 2)) / 6
  }
}
