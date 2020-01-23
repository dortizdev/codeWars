class Ship {
  Constructor (draft,crew){
    this.draft = draft,
    this.crew = crew
  }
  isWorthIt(){
    return this.draft - (this.crew * 1.5) > 20
  }
}
