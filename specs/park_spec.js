const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let samantha;
let tina;
let steve;
let terry;
let park;

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

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(samantha);
    park.addDino(tina);
    park.addDino(steve);
    park.addDino(terry);
    assert.strictEqual(park.popularDino(), samantha);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDino(samantha);
    park.addDino(tina);
    park.addDino(steve);
    park.addDino(terry);
    assert.deepStrictEqual(park.dinosOfSpecies('t-rex'), [samantha, tina]);
  });

  xit('should be able to remove all dinosaurs of a particular species');

});
