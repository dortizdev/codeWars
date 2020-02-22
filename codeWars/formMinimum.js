function minValue(values){
  let vals = values.sort((a, b) => a - b),
      val = vals.filter((item, index) => values.indexOf(item) === index)
  return parseInt(val.splice("").join(""))
}
