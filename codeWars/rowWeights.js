function rowWeights(array){
  let teamOne = [],
      teamTwo = [],
      weight  = []
  for(let i = 0; i<array.length; i++){
    if(i % 2 != 0){
      teamOne.push(array[i])
    }else{
      teamTwo.push(array[i])
    }
  }
  weight.unshift(teamOne.reduce((acc,val) => acc + val,0))
  weight.unshift(teamTwo.reduce((acc,val) => acc + val,0))
  return weight
}
