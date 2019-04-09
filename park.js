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
    for (let dino of dinos) {
      if (dino.guestsAttractedPerDay > topDino.guestsAttractedPerDay) {
        topDino = dino;
      };
    };
    return topDino;
  };
  // alternative: sort dinos based on guestsAttractedPerDay and extract top one
  returnSpecies(species, dinos) {
    let speciesDinos = [];
    for (let dino of dinos) {
      if (dino.species === species) {
        speciesDinos.push(dino);
      };
    };
    return speciesDinos;
  };

  calcVisitorsDay() {
    let total = 0;
    for (let dino of this.dinos) {
      total += dino.guestsAttractedPerDay;
    };
    return total;
  };

  calcVisitorsYear() {
    return this.calcVisitorsDay()*365;
  };


  calcTicketSales() {
    return this.calcVisitorsYear()*this.ticketPrice;
  };

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
