function digitize(n) {
  let arr = [],
      num = n.toString().split("").reverse().join("")
      for(let i=0; i<num.length; i++){
        arr.push(parseInt(num[i]))
      }
  return arr
}
