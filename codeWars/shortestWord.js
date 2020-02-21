function findShort(s){
let len = []
let word = s.split(" ")
for(let i=0; i<word.length; i++){
  len.push(word[i].length)
}
 return Math.min(...len)
}
