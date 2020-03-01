var isSquare = function(n){
  if(n<0){
    return false
  }else if(n==0){
    return true
  }else if(n%Math.sqrt(n) == 0){
    return true
  }else{
    return false
  }
}
