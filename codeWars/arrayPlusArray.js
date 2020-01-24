function arrayPlusArray(arr1, arr2) {
  let array = 0;
  let arrs = arr1.concat(arr2)
  for(let i = 0;i<arrs.length;i++){
    array+= arrs[i]
  }
  return array
}
