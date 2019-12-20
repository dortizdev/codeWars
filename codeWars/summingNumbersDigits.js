function sumDigits(number) {
let num = number.toString()
let sum = 0
  if(num.charAt(0) !== "-"){
  for(let i=0; i<num.length; i++)
    sum+=parseInt(num[i])
  }else{
  for(let i=1; i<num.length; i++){
    sum+=parseInt(num[i])
  }
}
return sum
}
