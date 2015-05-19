var DonutShop = function (loca, minPerHour, maxPerHour, avePerCust) {
  this.loca       = loca;
  this.minPerHour = minPerHour;
  this.maxPerHour = maxPerHour;
  this.avePerCust = avePerCust;
}

DonutShop.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//to calculate number of donuts to make per Hour
DonutShop.prototype.donutsPerHour = function() {
  return parseInt((this.generateRandom(this.minPerHour, this.maxPerHour) * this.avePerCust))
}

//to calculate number of donuts per day
DonutShop.prototype.donutsPerDay = function() {
  var open = 7;
  var close = 6 + 12;
  var total = 0;

  for (var i = 0; i <= (close - open); i++) {
    total += this.donutsPerHour();
  }
  return total;
}

DonutShop.prototype.render = function() {
  var totalPerDay = 0;
  //to make table data per each hr
  for (i = 0; i <= 11; i++) {
    var td = document.createElement('td');
    var position = document.getElementById(this.loca);
    position.appendChild(td);

    var dPerHr = this.donutsPerHour();
    totalPerDay += dPerHr;

    var perHr = document.createTextNode(dPerHr);
    td.appendChild(perHr);
  }
  //to make table data for total per day
  var td = document.createElement('td');
  var position = document.getElementById(this.loca);
  position.appendChild(td);
  var perDay = document.createTextNode(totalPerDay);
  td.appendChild(perDay);
}

var downtown = new DonutShop('downtown',8,43,4.5);
var capitolHill = new DonutShop('cap-hill',4,37,2);
var southLakeUnion = new DonutShop('slu',9,23,6.33);
var wedgewood = new DonutShop('wedgewood',2,28,1.25);
var ballard = new DonutShop('ballard',8,58,3.75);

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();

//console.log(downtown.donutsPerDay());
//console.log(capitolHill.donutsPerDay());
//console.log(southLakeUnion.donutsPerDay());
//console.log(wedgewood.donutsPerDay());
//console.log(ballard.donutsPerDay());
