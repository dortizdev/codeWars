function squareDigits(num){
  let nums = num.toString().split(""),
      square = nums.map(n => n * n).join("")
  return parseInt(square)
}
