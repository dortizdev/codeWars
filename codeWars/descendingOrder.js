function descendingOrder(n){
  let arr = n.toString().split(""),
      num = arr.sort((a,b) => b-a)
  return parseInt(num.join(""))
}
