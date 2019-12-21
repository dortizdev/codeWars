function sumStr(a,b) {
  let sum
  if(a==="" && b===""){
    sum = 0
  }else if(b===""){
    sum = parseInt(a)
  }else if(a===""){
    sum = parseInt(b)
  }else{
    sum = parseInt(a)+parseInt(b)
  }
  return sum.toString()
}
