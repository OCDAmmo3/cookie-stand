"use strict";

var hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"]


function salesTable() {
  var thead = document.getElementById("thead");
  var td = document.createElement("td");
  thead.appendChild(td);
  for(var i = 0; i < hours.length; i++) {
    td = document.createElement("td");
    td.textContent = hours[i];
    thead.appendChild(td);
  }
}

function Restaurant(name,minCust,maxCust,avgCookies,id){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyArray = [];
  this.id = id;
}
//Constructor function set up
Restaurant.prototype.randCust = function() {
  var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  return numCust;
};
Restaurant.prototype.randCookies = function() {
  for(var i=0; i<hours.length; i++){
    this.hourlyArray[i] = Math.floor(this.randCust()*this.avgCookies);
  }
};
Restaurant.prototype.render = function() {
  this.randCookies();
  var restaurantTable = document.getElementById(this.id);
  var td = document.createElement("td");
  td.textContent = this.name;
  restaurantTable.appendChild(td);
  for(var j = 0; j < this.hourlyArray.length; j++) {
    td = document.createElement("td");
    td.textContent = this.hourlyArray[j];
    restaurantTable.appendChild(td);
  }
}
salesTable();
console.log(hours);

var firstAndPike = new Restaurant("First And Pike", 23, 65, 6.3, "pikeTable");
firstAndPike.render();
var seaTacAirport = new Restaurant("SeaTac Airport", 3, 24, 1.2, "seaTacTable");
seaTacAirport.render();
var seattleCenter = new Restaurant("Seattle Center", 11, 38, 3.7, "seattleTable");
seattleCenter.render();
var capitolHill = new Restaurant("Capitol Hill", 20, 38, 2.3, "capitolTable");
capitolHill.render();
var alki = new Restaurant ("Alki", 2, 16, 4.6, "alkiTable");
alki.render();

/*
function generate() {
  firstAndPike.randCookies();
  seaTacAirport.randCookies();
  seattleCenter.randCookies();
  capitolHill.randCookies();
  alki.randCookies();
}
function storeData(location,id){
  var locationList = document.getElementById(id);
  for(var liIndex = 0; liIndex < location.hourlyArray.length; liIndex++){
    var li = document.createElement("li");
    var listString = hours[liIndex] + ": " + location.hourlyArray[liIndex] + " cookies.";
    li.textContent = listString;
    locationList.appendChild(li);
  }
  var totalCookies = document.createElement("li");
  var totalCount = 0;
  for (liIndex = 0; liIndex < hours.length; liIndex++){
    totalCount = totalCount + location.hourlyArray[liIndex];
  }
  var totalMessage = `Total: ${totalCount} cookies`;
  totalCookies.textContent = totalMessage;
  locationList.appendChild(totalCookies);
}

generate();
storeData(firstAndPike,"pike");
storeData(seaTacAirport,"seaTac");
storeData(seattleCenter,"seattle");
storeData(capitolHill,"capitol");
storeData(alki,"alki");
*/
