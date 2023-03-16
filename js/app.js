'use strict';

// Lab 07 - Single Constructor Function and Tables

const cookiedex = [];
const tableEl = document.getElementById('table-values');

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
console.log(hours);


function Location(city, minCust, maxCust, avgPurchase) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurchase = avgPurchase;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiePerStore = 0;
  cookiedex.push(this);
}

Location.prototype.generateRandom = function(min, max) {
  return Math.ceil(Math.random() * (max - min)) + min;
};

Location.prototype.generateCustomersPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.customerPerHour.push(this.generateRandom(this.minCust, this.maxCust));
  }
};

Location.prototype.generateCookiesPerHour = function() {
  this.generateCustomersPerHour();
  for (let i = 0; i < hours.length; i++) {
    let hourlyCookies = Math.ceil(this.customerPerHour[i] * this.avgPurchase);
    this.cookiesPerHour.push(hourlyCookies);
    this.totalCookiePerStore += hourlyCookies;
  }
};

Location.prototype.drawRow = function() {
  this.generateCookiesPerHour();

  const tableRow = document.createElement('tr');
  const locationHeader = document.createElement('th');
  locationHeader.textContent = this.city;
  tableRow.appendChild(locationHeader);

  for (let i = 0; i < hours.length; i++) {
    const tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(tableData);
  }

  const dailyTotal = document.createElement('td');
  dailyTotal.textContent = this.totalCookiePerStore;
  tableRow.appendChild(dailyTotal);

  tableEl.appendChild(tableRow);
};

function drawHeaderRow() {
  const headerRow = document.createElement('tr');
  const emptyHeader = document.createElement('th');
  headerRow.appendChild(emptyHeader);

  for (let hour of hours) {
    const headerData = document.createElement('th');
    headerData.textContent = hour;
    headerRow.appendChild(headerData);
  }

  const totalHeader = document.createElement('th');
  totalHeader.textContent = 'Daily Location Total';
  headerRow.appendChild(totalHeader);

  tableEl.appendChild(headerRow);
}

function drawFooterRow() {
  const footerRow = document.createElement('tr');
  const totalFooter = document.createElement('th');
  totalFooter.textContent = 'Totals';
  footerRow.appendChild(totalFooter);

  let grandTotal = 0;

  for (let hour of hours) {
    let hourlyTotal = 0;
    for (let location of cookiedex) {
      hourlyTotal += location.cookiesPerHour[hours.indexOf(hour)];
    }

    const footerData = document.createElement('td');
    footerData.textContent = hourlyTotal;
    footerRow.appendChild(footerData);

    grandTotal += hourlyTotal;
  }

  const grandTotalFooter = document.createElement('td');
  grandTotalFooter.textContent = grandTotal;
  footerRow.appendChild(grandTotalFooter);

  tableEl.appendChild(footerRow);
}

let seattle = new Location('Seattle', 23, 65, 6.3);
cookiedex.push(seattle);

let tokyo = new Location('Tokyo', 3, 24, 1.2);
cookiedex.push(tokyo);

let dubai = new Location ('Dubai', 11, 38, 3.7);
cookiedex.push(dubai);

let paris = new Location('Paris', 20, 38, 2.3);
cookiedex.push(paris);

let lima = new Location('Lima', 2, 16, 4.6);
cookiedex.push(lima);


seattle.generateCookiesPerHour();
tokyo.generateCookiesPerHour();
dubai.generateCookiesPerHour();
paris.generateCookiesPerHour();
lima.generateCookiesPerHour();

console.log('Cookies per hour: ', seattle.cookiesPerHour);
console.log('Cookies per hour: ', tokyo.cookiesPerHour);
console.log('Cookies per hour: ', dubai.cookiesPerHour);
console.log('Cookies per hour: ', paris.cookiesPerHour);
console.log('Cookies per hour: ', lima.cookiesPerHour);

drawHeaderRow();
cookiedex.forEach(location => location.drawRow());
drawFooterRow();
