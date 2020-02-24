function DNAStrand(dna){
  let d = dna.split(""),
      e = []
  for(let i=0; i<d.length; i++){
    if(d[i] == "A"){
      e.push("T")
    }else if(d[i] == "T"){
      e.push("A")
    }else if(d[i] == "G"){
      e.push("C")
    }else{
      e.push("G")
    }
  }
  return e.join("")
}
