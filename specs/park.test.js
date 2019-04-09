const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach( () => {
    park = new Park('Big Park', 20);
    dino1 = new Dinosaur('Diplodocus', 'herbivore', 45);
    dino2 = new Dinosaur('T-Rex', 'carnivore', 65);
    dino3 = new Dinosaur('Diplodocus', 'herbivore', 50);
    dino4 = new Dinosaur('Stegasaurus', 'omnivore', 55);
    park.dinos = [dino1, dino2];
  });

  test('should have a name', () => {
    expect(park.name).toBe('Big Park');
  });

  test('should have a ticket price', () => {
    expect(park.ticketPrice).toBe(20);
  });

  test('should have a collection of dinosaurs', () => {
    expect(park.dinos).toEqual([dino1, dino2]);
  });

  test('should be able to add a dinosaur to its collection', () => {
    park.addDino(dino3);
    expect(park.dinos.length).toBe(3);
  });

  test('should be able to remove a dinosaur from its collection', () => {
    park.removeDino();
    expect(park.dinos.length).toBe(1);
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    expect(park.findTopAttraction(park.dinos)).toEqual(dino2);
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    park.addDino(dino3);
    park.addDino(dino4);
    expect(park.returnSpecies('Diplodocus', park.dinos)).toEqual([dino1, dino3]);
  });

  test('should be able to calculate total visitors per day', () => {
    console.log(park.calcVisitorsDay());
    expect(park.calcVisitorsDay()).toBe(110);
  });

  test('should be able to calculate total visitors per year', () => {
    console.log(park.calcVisitorsYear());
    expect(park.calcVisitorsYear()).toBe(40150);
  });

  xtest('should be able to calculate ticket sales per year', () => {
    expect(park.calcTicketSales()).toBe(/*arg*/);
  });

// extension:
  xtest('should be able to remove all dinosaurs of a particular species', () => {
    expect(park.removeSpecies(species, dinos)).toEqual(/*args*/);
  });

});
