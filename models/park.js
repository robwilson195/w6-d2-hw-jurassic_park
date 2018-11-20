const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.dinoCount = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDino = function (newDino) {
  this.dinosaurs.push(newDino)
};

Park.prototype.addDino = function (newDino) {
  this.dinosaurs.push(newDino)
};

Park.prototype.removeDino = function (oldDino) {
  for (let i = 0 ; i < this.dinoCount() ; i++) {
    if (this.dinosaurs[i] === oldDino) {
      this.dinosaurs.splice(i,1);
      break;
    }
  }
};

Park.prototype.popularDino = function () {
  let busiestDinosaur = null;
  let mostVisits = 0;
  for (let i = 0 ; i < this.dinoCount() ; i++ ) {
    if (this.dinosaurs[i].guestsAttractedPerDay > mostVisits) {
      busiestDinosaur = this.dinosaurs[i];
      mostVisits = this.dinosaurs[i].guestsAttractedPerDay;
    }
  }
  return busiestDinosaur;
};

Park.prototype.dinosOfSpecies = function (type) {
  let dinos = [];
  for (let dino of this.dinosaurs) {
    if (dino.species === type) {
      dinos.push(dino);
    }
  }
  return dinos;
};

module.exports = Park;
