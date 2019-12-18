function generateRange(min, max, step){
  let arr = [min]
  for(let i = min; i < max; i+=step){
    min = min + step
    if(min <= max){
      arr.push(min)
    }
  }
  return arr
}
