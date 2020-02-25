function twoOldestAges(ages){
  let arr = [],
      age = ages.sort((a,b) => a-b)
  for(let i=age.length-1; i>=age.length-2; i--){
    arr.unshift(age[i])
  }
  return arr
}
