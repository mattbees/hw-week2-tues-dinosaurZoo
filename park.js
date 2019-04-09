class Park {
  constructor(name, ticketPrice) {
    this._name = name;
    this._ticketPrice = ticketPrice;
    this.dinos = [];
  };
  get _name() {
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
    let top = dinos[0].guestsAttractedPerDay();
    let topDino = dinos[0];
    for (let dino of dinos) {
      if (dino.guestsAttractedPerDay() > top) {
        top = dino.guestsAttractedPerDay();
        topDino = dino;
      };
    };
    return topDino.name;
  };
  returnSpecies(species, dino) {
    let speciesDinos = [];
    for (let dino of dinos) {
      if (dino.species === species) {
        speciesDinos.push(dino);
      };
    };
    return speciesDinos;
  };

  removeSpecies(species, dinos) {
    let filteredDinos = [];
    for (let dino of dinos) {
      if (dino.species !== species) {
        filteredDinos.push(dino);
      };
    };
    return filteredDinos;
  };

};

// park.removeSpecies(species, dinos) - removes all dinos of a particular species from the array.
