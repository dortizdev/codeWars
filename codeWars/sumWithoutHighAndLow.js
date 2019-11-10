function sumArray(array) {
  if(array !== [] && array !== null && array !== "None"){
  array.sort((a, b) => a - b)
  array.pop()
  array.shift()
  let total = array.reduce((a, b) => a + b, 0)
  return total
  }else{
  return 0
  }
}
