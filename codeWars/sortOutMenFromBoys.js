function menFromBoys(arr){
  let men = [],
      boys = []
      for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
          men.push(arr[i])
        }else{
          boys.push(arr[i])
        }
      }
      men.sort((a,b) => a-b)
      boys.sort((a,b) => b-a)
      let all = men.concat(boys),
          nums = [...new Set(all)];
  return nums
}
