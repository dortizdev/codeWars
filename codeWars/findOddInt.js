function findOdd(A) {
    let answer;
    const mappedArray = {};
    
    A.forEach(function(i){ 
    mappedArray[i] = (mappedArray[i]||0) + 1
    });
    
    for (let j in mappedArray){
      if (mappedArray[j] % 2 === 1){
        answer = j;
      }
    }
    return parseInt(answer);
  }