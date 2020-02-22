function removeDuplicateWords (s) {
  let str = s.split(' ')
      str = str.filter(function(item,index){
        return str.indexOf(item) == index
 })
  return str.join(' ')
}
