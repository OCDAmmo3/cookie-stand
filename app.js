"use strict";
//DATA ====================================================================================
var hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"]
var scaling = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]
var allSales = 0;
var hourlyTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//FUNCTIONS ====================================================================================

function Restaurant(name,minCust,maxCust,avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyArray = [];
  this.dailyTotal = 0;
  this.randCust = function() {
    var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return numCust;
  }
  this.randCookies = function() {
    for(var i=0; i<hours.length; i++) {
      this.hourlyArray[i] = Math.floor(this.randCust()*this.avgCookies*scaling[i]);
    }
  }
  this.totalSales = function() {
    for(var i = 0; i < hours.length; i++) {
      this.dailyTotal += this.hourlyArray[i];
    }
    allSales += this.dailyTotal;
  }
}


function salesTable() {
  var thead = document.getElementById("thead");
  var td = document.createElement("th");
  td.textContent = "Locations";
  thead.appendChild(td);
  for(var i = 0; i < hours.length; i++) {
    td = document.createElement("th");
    td.textContent = hours[i];
    thead.appendChild(td);
  }
  td = document.createElement("th");
  td.textContent = "Total";
  thead.appendChild(td);
}

function render(restaurant) {
  var restaurantTable = document.getElementById("tbody");
  var newRow = document.createElement("tr");
  newRow.setAttribute("id", restaurant.name);
  restaurantTable.appendChild(newRow);

  var restaurantTotal = document.getElementById(restaurant.name);
  var restaurantName = document.createElement("td");
  restaurantName.textContent = restaurant.name;
  restaurantTotal.appendChild(restaurantName);

  for (var i = 0; i < hours.length; i++) {
    hourlyTotal[i] += restaurant.hourlyArray[i];

    var newSalesElement = document.createElement("td");
    var totalPurchased = restaurant.hourlyArray[i];
    newSalesElement.textContent = totalPurchased;
    restaurantTotal.appendChild(newSalesElement);
  }
  var totalSales = document.createElement("td");
  totalSales.textContent = restaurant.dailyTotal;
  restaurantTotal.appendChild(totalSales);
};

function hourlySales() {
  var restaurantTotal = document.getElementById("tfooter");
  var tdFooter = document.createElement("td");
  tdFooter.textContent = "Overall Hourly Totals";
  restaurantTotal.appendChild(tdFooter);

  for(var i = 0; i < hours.length; i++) {
    var hourlyElement = document.createElement("td");
    hourlyElement.textContent = hourlyTotal[i];
    restaurantTotal.appendChild(hourlyElement);
  }
  var totalFooterSales = document.createElement("td");
  totalFooterSales.textContent = allSales;
  restaurantTotal.appendChild(totalFooterSales);
}

function clearTotals() {
  var footerRestaurant = document.getElementById("tfooter");
  footerRestaurant.innerHTML = "";
}

function newRestaurant(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookies = parseFloat(event.target.avgCookies.value);

  var newRestaurant = new Restaurant(name, minCust, maxCust, avgCookies);

  newRestaurant.randCookies();
  newRestaurant.totalSales();

  render(newRestaurant);

  clearTotals();

  hourlySales();
}

var form = document.querySelector("form");
form.addEventListener("submit", newRestaurant);

var firstAndPike = new Restaurant("First And Pike", 23, 65, 6.3);
var seaTacAirport = new Restaurant("SeaTac Airport", 3, 24, 1.2);
var seattleCenter = new Restaurant("Seattle Center", 11, 38, 3.7);
var capitolHill = new Restaurant("Capitol Hill", 20, 38, 2.3);
var alki = new Restaurant ("Alki", 2, 16, 4.6);

// Executions ==================================================================================

firstAndPike.randCookies();
seaTacAirport.randCookies();
seattleCenter.randCookies();
capitolHill.randCookies();
alki.randCookies();

firstAndPike.totalSales();
seaTacAirport.totalSales();
seattleCenter.totalSales();
capitolHill.totalSales();
alki.totalSales();

salesTable();

render(firstAndPike);
render(seaTacAirport);
render(seattleCenter);
render(capitolHill);
render(alki);

hourlySales();