function nbYear(p0, percent, aug, p) {
    let year = 0,
        pop = p0
    while(pop<p){
      pop += pop * (percent/100) + aug
      year++
    }
    return year
}
