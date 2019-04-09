const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dino;

  beforeEach( () => {
    park = new Park(/*args*/);
    dino = new Dinosaur(/*args*/);
  });

  xtest('should have a name', () => {
    expect(park.name).not.toBe(undefined);
  });

  xtest('should have a ticket price', () => {
    expect(park.ticketPrice).not.toBe(undefined);
  });

  xtest('should have a collection of dinosaurs', () => {
    expect(park.dinos).not.toBe(undefined); // BETTER TEST?
  });

  xtest('should be able to add a dinosaur to its collection', () => {
    park.addDino(dino);
    expect(park.dinos.length).toBe(/*arg*/);
  });

  xtest('should be able to remove a dinosaur from its collection', () => {
    park.removeDino();
    expect(park.dinos.length).toBe(/*arg*/);
  });

  xtest('should be able to find the dinosaur that attracts the most visitors', () => {
    expect(park.findTopAttraction(dinos)).toBe(/*arg*/);
  });

  xtest('should be able to find all dinosaurs of a particular species', () => {
    expect(park.returnSpecies(species, dinos)).toEqual(/*args*/);
  });

  xtest('should be able to remove all dinosaurs of a particular species', () => {
    expect(park.removeSpecies(species, dinos)).toEqual(/*args*/);
  });

});
