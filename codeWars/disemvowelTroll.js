function disemvowel(str){
  let vowels = ['a','e','i','o','u','A','E','I','O','U',],
      strArray = str.split(''),
      filtered = strArray.filter(letter => !vowels.includes(letter))
  return filtered.join('')
}
