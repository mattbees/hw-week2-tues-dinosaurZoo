class Park {
  constructor(name, ticketPrice) {
    this._name = name;
    this._ticketPrice = ticketPrice;
    this.dinos = [];
    // experiment:
    this.dietTypes = {
      carnivore: 0,
      omnivore: 0,
      herbivore: 0
    };
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
  removeSpecies(speciesName, dinos) {
    let filteredDinos = [];
    for (let dino of dinos) {
      if (dino.species !== speciesName) {
        filteredDinos.push(dino);
      };
    };
    this.dinos = filteredDinos;
  };

  reportDietTypes() {
    for (let dino of this.dinos) {
      if (dino.diet === 'carnivore') {
        this.dietTypes.carnivore++;
      } else if (dino.diet === 'herbivore') {
         this.dietTypes.herbivore++;
      } else if (dino.diet === 'omnivore') {
        this.dietTypes.omnivore++;
      };
    };
    return this.dietTypes;
  };

};

module.exports = Park;
