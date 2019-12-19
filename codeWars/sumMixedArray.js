function sumMix(x){
  let num = 0;
  for(let i=0; i<x.length; i++){
  if(typeof x[i] === "number"){
    num += x[i]
    }else{
    num += parseInt(x[i])
    }
  }
  return num
}
