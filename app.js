"use strict";

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randCust: function() {
    var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return numCust;
},
  randCookies: function() {
    var numCookies = Math.floor(this.randCust() * this.avgCookies);
    return numCookies;
  }
}
var seaTacAirport = {
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      var numCookies = Math.floor(this.randCust() * this.avgCookies);
      return numCookies;
    }
}
var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      var numCookies = Math.floor(this.randCust() * this.avgCookies);
      return numCookies;
    }
}
var capitolHill = {
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      var numCookies = Math.floor(this.randCust() * this.avgCookies);
      return numCookies;
    }
}
var alki = {
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    randCust: function() {
      var numCust = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
      return numCust;
  },
    randCookies: function() {
      var numCookies = Math.floor(this.randCust() * this.avgCookies);
      return numCookies;
    }
}
console.log(firstAndPike.randCust());
console.log(seaTacAirport.randCust());
console.log(seattleCenter.randCust());
console.log(capitolHill.randCust());
console.log(alki.randCust());
