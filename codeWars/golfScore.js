function golfScoreCalculator(parList, scoreList){
  let count = 0
  let par = Array.from(parList.split(""), x => parseInt(x))
  let score = Array.from(scoreList.split(""), x => parseInt(x))
  for(let i=0;i<par.length;i++){
    count += score[i] - par[i]
  }
  return count
}
