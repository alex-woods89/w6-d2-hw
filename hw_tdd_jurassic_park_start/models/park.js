const Park = function(name, price, dinosaurs){
  this.name = name
  this.price = price
  this.dinosaurs = dinosaurs
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function (){
  this.dinosaurs.pop()
}

Park.prototype.mostPopularSpecies = function(){
 const array = this.dinosaurs.sort()
 return array.pop
}

module.exports = Park;
