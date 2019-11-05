function calculator(a,b,sign){
if (a === NaN || b === NaN){
  return "unknown value"
} else if (sign === "+"){
  return a + b
} else if (sign === "-"){
  return a-b
} else if (sign === "*"){
  return a*b
} else if (sign === "/"){
  return a/b
} else {
  return "unknown value"
}
}
