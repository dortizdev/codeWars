function calculateTip(amount, rating) {
  let r = rating.toLowerCase()
  if(r === "excellent"){
    return Math.ceil(amount * .2)
  }else if(r === "great"){
    return Math.ceil(amount * .15)
  }else if(r === "good"){
    return Math.ceil(amount * .1)
  }else if(r === "poor"){
    return Math.ceil(amount * .05)
  }else if(r === "terrible"){
    return 0
  }else{
    return "Rating not recognised"
  }
}
