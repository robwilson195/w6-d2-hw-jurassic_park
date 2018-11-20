const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.dinoCount = function () {
  return this.dinosaurs.length;
};

module.exports = Park;
