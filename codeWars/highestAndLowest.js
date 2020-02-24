function highAndLow(numbers){
  let num = numbers.split(" "),
      sortedNums = num.sort((a,b)=> a-b)
  return sortedNums[sortedNums.length - 1] + " " + sortedNums[0]
}
