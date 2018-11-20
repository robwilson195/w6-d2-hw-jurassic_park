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
  this.ticketPrice += 1;
  for (let i = 0 ; i < this.dinoCount() ; i++) {
    this.ticketPrice += 1;
    if (this.dinosaurs[i] === oldDino) {
      this.dinosaurs.splice(i,1);
      break;
    }
  }
};

module.exports = Park;
