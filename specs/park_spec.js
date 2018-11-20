const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    samantha = new Dinosaur('t-rex', 'carnivore', 50);
    tina = new Dinosaur('t-rex', 'carnivore', 40);
    steve = new Dinosaur('rachiosaurus', 'herbivore', 35);
    terry = new Dinosaur('avimimus', 'omnivore', 25);
  })

  it('should have a name', function () {
  });

  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
