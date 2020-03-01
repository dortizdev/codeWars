function getMiddle(s){
  let letters = ""
  if(s.length % 2 == 0){
    letters = s[(s.length / 2) - 1] + s[s.length / 2];
  }else{
    letters = s[Math.floor(s.length / 2)];
  }
  return letters
}
