function take(arr, n) {
let array = []
for(let i = 0;i<n;i++){
  if(arr[i] !== undefined){
  array.push(arr[i])
}
}
return array
}
