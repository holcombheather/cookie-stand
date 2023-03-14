'use strict';

// Lab 06 - Objects

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
console.log(hours);

let seattleList = document.getElementById('seattleData');
let tokyoList = document.getElementById('tokyoData');
let dubaiList = document.getElementById('dubaiData');
let parisList = document.getElementById('parisData');
let limaList = document.getElementById('limaData');


function generateRandom(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
}

const seattle = {
  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgPurchase: 6.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiePerStore: 0,

  generateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(generateRandom(this.minCust, this.maxCust));
    }
  },
  generateCookiesPerHour: function () {
    this.generateCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.customerPerHour[i] * this.avgPurchase);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookiePerStore += hourlyCookies;
    }
  },
  renderList: function () {
    this.generateCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      seattleList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
    seattleList.appendChild(li);
  }
};

seattle.renderList();
console.log(seattle.customerPerHour);
console.log(seattle.cookiesPerHour);
console.log(seattle.totalCookiePerStore);


const tokyo = {
  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgPurchase: 1.2,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiePerStore: 0,

  generateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(generateRandom(this.minCust, this.maxCust));
    }
  },
  generateCookiesPerHour: function () {
    this.generateCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.customerPerHour[i] * this.avgPurchase);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookiePerStore += hourlyCookies;
    }
  },
  renderList: function () {
    this.generateCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
    tokyoList.appendChild(li);
  }
};

tokyo.renderList();
console.log(tokyo.customerPerHour);
console.log(tokyo.cookiesPerHour);
console.log(tokyo.totalCookiePerStore);


const dubai = {
  city: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgPurchase: 3.7,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiePerStore: 0,

  generateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(generateRandom(this.minCust, this.maxCust));
    }
  },
  generateCookiesPerHour: function () {
    this.generateCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.customerPerHour[i] * this.avgPurchase);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookiePerStore += hourlyCookies;
    }
  },
  renderList: function () {
    this.generateCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
    dubaiList.appendChild(li);
  }
};

dubai.renderList();
console.log(dubai.customerPerHour);
console.log(dubai.cookiesPerHour);
console.log(dubai.totalCookiePerStore);


const paris = {
  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgPurchase: 2.3,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiePerStore: 0,

  generateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(generateRandom(this.minCust, this.maxCust));
    }
  },
  generateCookiesPerHour: function () {
    this.generateCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.customerPerHour[i] * this.avgPurchase);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookiePerStore += hourlyCookies;
    }
  },
  renderList: function () {
    this.generateCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
    parisList.appendChild(li);
  }
};

paris.renderList();
console.log(paris.customerPerHour);
console.log(paris.cookiesPerHour);
console.log(paris.totalCookiePerStore);


const lima = {
  city: 'Lima',
  minCust: 3,
  maxCust: 24,
  avgPurchase: 1.2,
  customerPerHour: [],
  cookiesPerHour: [],
  totalCookiePerStore: 0,

  generateCustomersPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customerPerHour.push(generateRandom(this.minCust, this.maxCust));
    }
  },
  generateCookiesPerHour: function () {
    this.generateCustomersPerHour();
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.customerPerHour[i] * this.avgPurchase);
      this.cookiesPerHour.push(hourlyCookies);
      this.totalCookiePerStore += hourlyCookies;
    }
  },
  renderList: function () {
    this.generateCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.totalCookiePerStore} cookies`;
    limaList.appendChild(li);
  }
};

lima.renderList();
console.log(lima.customerPerHour);
console.log(lima.cookiesPerHour);
console.log(lima.totalCookiePerStore);


