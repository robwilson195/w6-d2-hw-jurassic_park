const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    samantha = new Dinosaur('t-rex', 'carnivore', 50);
    tina = new Dinosaur('t-rex', 'carnivore', 40);
    steve = new Dinosaur('rachiosaurus', 'herbivore', 35);
    terry = new Dinosaur('avimimus', 'omnivore', 25);

    park = new Park(`Franco's Dinos`, 40);
  })

  it('should have a name', function () {
    assert.strictEqual(park.name, `Franco's Dinos`);
  });

  it('should have a ticket price', function () {
    assert.strictEqual(park.ticketPrice, 40);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, []);

  });

  it('should be able to count its dinosaurs', function () {
    assert.strictEqual(park.dinoCount(), 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(samantha);
    assert.strictEqual(park.dinoCount(), 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(samantha);
    park.addDino(tina);
    park.removeDino(samantha);
    assert.strictEqual(park.dinoCount(), 1);
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to remove all dinosaurs of a particular species');

});
