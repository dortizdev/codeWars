function setAlarm(employed, vacation){
  if(employed===true && vacation ===true){
    return false
  }else if(employed===false && vacation ===true){
    return false
  }else if(employed===false && vacation ===false){
    return false
  }else{
    return true
  }
}
