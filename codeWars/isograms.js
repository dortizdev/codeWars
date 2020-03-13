function isIsogram(str){
  let s = str.toLowerCase();
  for(let i = 0; i < s.length; i++){
    for (let j = i + 1 ; j < s.length; j++)
      if (s[i] === s[j]){
        return false
      }
    }
  return true
}
