function sumOfMinimums(arr) {
let sum = 0
for(x of arr){
  sum += Math.min(...x)
}
return sum
}
