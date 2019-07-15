"use strict";

var firstAndPike = {
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    hourlyArray: [],
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      for(var i=0; i<hours.length; i++){
        firstAndPike.hourlyArray[i] = Math.floor(this.randCust()*firstAndPike.avgCookies);
      }
    }
}

var seaTacAirport = {
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    hourlyArray: [],
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      for(var i=0; i<hours.length; i++){
        seaTacAirport.hourlyArray[i] = Math.floor(this.randCust()*seaTacAirport.avgCookies);
      }
    }
}



var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
    hourlyArray: [],
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      for(var i=0; i<hours.length; i++){
        seattleCenter.hourlyArray[i] = Math.floor(this.randCust()*seattleCenter.avgCookies);
      }
    }
}



var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    hourlyArray: [],
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      for(var i=0; i<hours.length; i++){
        capitolHill.hourlyArray[i] = Math.floor(this.randCust()*capitolHill.avgCookies);
      }
    }
}



var alki = {
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    hourlyArray:[],
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      for(var i=0; i<hours.length; i++){
        alki.hourlyArray[i] = Math.floor(this.randCust()*alki.avgCookies);
        //rather than return sales, puts into a for loop to track the days sales.
      }
    }
}
//
// console.log(firstAndPike.randCookies());
// console.log(seaTacAirport.randCookies());
// console.log(seattleCenter.randCookies());
// console.log(capitolHill.randCookies());
// console.log(alki.randCookies());

var hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"]

function generate() {
  firstAndPike.randCust();
  firstAndPike.randCookies();
  seaTacAirport.randCust();
  seaTacAirport.randCookies();
  seattleCenter.randCust();
  seattleCenter.randCookies();
  capitolHill.randCust();
  capitolHill.randCookies();
  alki.randCust();
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
}
generate();

storeData(firstAndPike,"pike");
storeData(seaTacAirport,"seaTac");
storeData(seattleCenter,"seattle");
storeData(capitolHill,"capitol");
storeData(alki,"alki");
