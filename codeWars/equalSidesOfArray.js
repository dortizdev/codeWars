function checkIndex(arr, index) {
  let sum1 = 0;
  let sum2 = 0;
  if (index == -1) {
    return false
  }
   for(let i = 0; i < index; i++){
     sum1+= arr[i]
   }
   for(let i = index+1; i <= arr.length-1; i++){
     sum2+= arr[i]
   }
  if (sum1 === sum2){
    return true
  }else{
   return false
  }
}

function findEvenIndex(arr)
{
  for (let i = 0 ; i < arr.length ; i++) {
    if(checkIndex(arr, i)){
      return i
    }
  }
  return -1
}
