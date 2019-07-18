"use strict";
/*DATA
====================================================================================*/
var hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"]
var scaling = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]

/*FUNCTIONS
====================================================================================*/
function salesTable() {
  var thead = document.getElementById("thead");
  var td = document.createElement("td");
  thead.appendChild(td);
  for(var i = 0; i < hours.length; i++) {
    td = document.createElement("td");
    td.textContent = hours[i];
    thead.appendChild(td);
  }
  td = document.createElement("td");
  td.textContent = "Total";
  thead.appendChild(td);
}

function Restaurant(name,minCust,maxCust,avgCookies,id){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyArray = [];
  this.id = id;
  this.dailyTotal = 0;
}


Restaurant.prototype.randCust = function() {
  var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  return numCust;
};

Restaurant.prototype.randCookies = function() {
  for(var i=0; i<hours.length; i++) {
    this.hourlyArray[i] = Math.floor(this.randCust()*this.avgCookies*scaling[i]);
  }
};

Restaurant.prototype.totalSales = function() {
  for(var i = 0; i < hours.length; i++) {
    this.dailyTotal += this.hourlyArray[i];
  }
};

Restaurant.prototype.render = function(restaurant) {
  this.randCookies();
  var restaurantTable = document.getElementById(this.id);
  var td = document.createElement("td");
  td.textContent = this.name;
  restaurantTable.appendChild(td);
  var totalSales = 0;
  for(var j = 0; j < this.hourlyArray.length; j++) {
    td = document.createElement("td");
    td.textContent = this.hourlyArray[j];
    restaurantTable.appendChild(td);
  }
  restaurant.totalSales();
  var totalSales = document.createElement("td");
  totalSales.textContent = restaurant.dailyTotal;
  restaurantTable.appendChild(totalSales);
};

function hourlySales(first, second, third, fourth, fifth) {
  var dailyTotal = 0;
  var restaurantTotal = document.getElementById("totalOfTable");
  var td = document.createElement("td");
  td.textContent = "Overall Hourly Totals";
  restaurantTotal.appendChild(td);
  for(var k = 0; k < hours.length; k++) {
    var total = firstAndPike.hourlyArray[k] + seaTacAirport.hourlyArray[k] + seattleCenter.hourlyArray[k] + capitolHill.hourlyArray[k] + alki.hourlyArray[k];
    td = document.createElement("td");
    td.textContent = total;
    restaurantTotal.appendChild(td);
    dailyTotal = dailyTotal + total;
  }
  td = document.createElement("td");
  td.textContent = dailyTotal;
  restaurantTotal.appendChild(td);
}

salesTable();

var firstAndPike = new Restaurant("First And Pike", 23, 65, 6.3, "pikeTable");
firstAndPike.render(firstAndPike);
var seaTacAirport = new Restaurant("SeaTac Airport", 3, 24, 1.2, "seaTacTable");
seaTacAirport.render(seaTacAirport);
var seattleCenter = new Restaurant("Seattle Center", 11, 38, 3.7, "seattleTable");
seattleCenter.render(seattleCenter);
var capitolHill = new Restaurant("Capitol Hill", 20, 38, 2.3, "capitolTable");
capitolHill.render(capitolHill);
var alki = new Restaurant ("Alki", 2, 16, 4.6, "alkiTable");
alki.render(alki);

hourlySales(firstAndPike, seaTacAirport, seattleCenter, capitolTable, alki);

function newRestaurant(event) {
  event.preventDefault();
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookies = event.target.avgCookies.value;
  var restName = event.target.restName.value;

  var newRestaurant = new Restaurant(minCust, maxCust, avgCookies, restName);
  console.log(newRestaurant);
  Restaurant.render();
}
var form = document.querySelector("form");
form.addEventListener("submit", newRestaurant);
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
