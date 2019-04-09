class Park {
  constructor(name, ticketPrice) {
    this._name = name;
    this._ticketPrice = ticketPrice;
    this.dinos = [];
  };
  get name() {
    return this._name;
  };
  get ticketPrice() {
    return this._ticketPrice;
  };
  addDino(dino) {
    this.dinos.push(dino);
  };
  removeDino() {
    this.dinos.pop();
  };
  findTopAttraction(dinos) {
    let topDino = dinos[0];
    console.log(topDino);  // delete this
    for (let dino of dinos) {
      if (dino.guestsAttractedPerDay > topDino.guestsAttractedPerDay) {
        topDino = dino;
      };
    };
    return topDino;
  };
  // alternative: sort dinos based on guestsAttractedPerDay and extract top one
  returnSpecies(species, dino) {
    let speciesDinos = [];
    for (let dino of dinos) {
      if (dino.species === species) {
        speciesDinos.push(dino);
      };
    };
    return speciesDinos;
  };




// calcVisitorsDay() will return visitors per day
// calcVisitorsYear() returns above * 365

// extension:
  removeSpecies(species, dinos) {
    let filteredDinos = [];
    for (let dino of dinos) {
      if (dino.species !== species) {
        filteredDinos.push(dino);
      };
    };
    park.dinos = filteredDinos;
  };

};

module.exports = Park;
