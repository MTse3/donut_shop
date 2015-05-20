window.onload = function () {
  var DonutShop = function (loca, minPerHour, maxPerHour, avePerCust) {
  this.loca       = loca;
  this.minPerHour = minPerHour;
  this.maxPerHour = maxPerHour;
  this.avePerCust = avePerCust;

  this.open = 7;
  this.close = 6 + 12;
  }

  DonutShop.prototype.generateRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  DonutShop.prototype.operationHours = function() {
    return (this.close - this.open);
  }

  //to calculate number of donuts to make per Hour
  DonutShop.prototype.donutsPerHour = function() {
    return parseInt((this.generateRandom(this.minPerHour, this.maxPerHour) * this.avePerCust))
  }

  DonutShop.prototype.render = function() {
    var totalPerDay, table, tr, td, newText, perDay, position, dPerHr, perHr;
    totalPerDay = 0;
    //creates Location Names
    table       = document.getElementById('donut-table');
    tr          = document.createElement('tr');
    td          = document.createElement('td');
    newText     = document.createTextNode(this.loca);
    td.appendChild(newText);
    tr.appendChild(td);

    //to make table and data per each hr
    for (i = 0; i <= this.operationHours(); i++) {
      dPerHr = this.donutsPerHour();
      td = document.createElement('td');
      newText = document.createTextNode(dPerHr);
      td.appendChild(newText);
      tr.appendChild(td);
      //calculates the number of donuts per day from the hrs above
      totalPerDay += dPerHr;
    }

    //to make table data for total per day
    td = document.createElement('td');
    perDay = document.createTextNode(totalPerDay);
    td.appendChild(perDay);
    tr.appendChild(td);
    table.appendChild(tr);
  }

  var locations = [];
  locations.push(new DonutShop('Downtown',8,43,4.5));
  locations.push(new DonutShop('Capitol Hill',4,37,2));
  locations.push(new DonutShop('South Lake Union',9,23,6.33));
  locations.push(new DonutShop('Wedgewood',2,28,1.25));
  locations.push(new DonutShop('Ballard',8,58,3.75));

  for (var j = 0; j < locations.length; j++) {
    locations[j].render();
  };

  var NewDonutShop = function() {

    var newlocation, newMin, newMax, newAve, newLocationObject;
    newlocation = document.getElementById('location').value;
    newMin = parseInt(document.getElementById('min-cust').value);
    newMax = parseInt(document.getElementById('max-cust').value);
    newAve = parseInt(document.getElementById('ave-purch').value);
    newLocationObject = new DonutShop(newlocation,newMin,newMax,newAve);
    locations.push(newLocationObject);
    newLocationObject.render();
  }

document.getElementById("submit-button").addEventListener('click', NewDonutShop);

};

