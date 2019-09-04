const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  beforeEach(function () {
   park = new Park('Jurassic Park', 5, [])
  })

  it('should have a name', function() {
  const actual = park.name
  assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
  const actual = park.price
  assert.strictEqual(actual, 5)
  });


  it('should have a collection of dinosaurs',function(){
  const actual = park.dinosaurs
  assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('Tony')
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, ['Tony'])
  });

  it('should be able to remove a dinosaur from its collection', function(){
  park.addDinosaur('Tony')
  park.removeDinosaur()
  const actual = park.dinosaurs
  assert.deepStrictEqual(actual, [])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
  const dinosaur1 = park.addDinosaur('t-rex', 'carnivore', 50)
  const dinosaur2 = park.addDinosaur('velociraptor', 'carnivore', 30)
  const actual = park.mostPopularSpecies()
  assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
