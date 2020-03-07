function capitalize(s){
  let even = '',
      odd = '',
      arr = []
  for(let i = 0; i < s.length; i++) {
      if(i % 2 === 0){
        even += s[i].toUpperCase()
      }else{
        even += s[i]
      }
  }
  arr.push(even)
  for(let i = 0; i < s.length; i++){
      if (i % 2 !== 0) {
        odd += s[i].toUpperCase()
      }else{
        odd += s[i]
      }
  }
  arr.push(odd)
  return arr
}
