function accum(s) {
  let arr = s.toLowerCase().split('')
    for(let i = 0; i < arr.length; i++){
      arr[i] = arr[i].toUpperCase() + arr[i].repeat(i)
  }
  return arr.join('-')
}
