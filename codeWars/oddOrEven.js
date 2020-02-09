function oddOrEven(array) {
  let arr = []
  if(array.length===0){
     return "even"
  }
  arr = array.reduce((acc, cur) => acc + cur)
  if(arr % 2 === 0){
    return "even"
  }else if(arr % 2 != 0){
    return "odd"
  }else{
    return "even"
  }
}
