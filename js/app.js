'use strict';

// Lab 07 - Single Constructor Function and Tables
let cookiedex = [];
let table = document.getElementById('table-values');
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function Location(city, minCust, maxCust, avgPurchase) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurchase = avgPurchase;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiePerStore = 0;
  cookiedex.push(this);
  this.test = 0;
}

Location.prototype.customersRandom = function() {
  let min = Math.ceil(this.minCust);
  let max = Math.floor(this.maxCust);
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};

Location.prototype.generateCookiesPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    let customers = this.customersRandom();
    this.customerPerHour.push(customers);
    let hourlyCookies = Math.ceil(customers * this.avgPurchase);
    this.cookiesPerHour.push(hourlyCookies);
    this.totalCookiePerStore += hourlyCookies;
  }
};

// delete below, repetitive from above (from older attempt)
// Location.prototype.generateCookiesPerHour = function() {
//   this.generateCustomersPerHour();
//   for (let i = 0; i < hours.length; i++) {
//     let hourlyCookies = Math.ceil(this.customerPerHour[i] * this.avgPurchase);
//     this.cookiesPerHour.push(hourlyCookies);
//     this.totalCookiePerStore += hourlyCookies;
//   }
// };

Location.prototype.render = function() {
  let table = document.getElementById('dataTable');
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);
  let dataRow = document.createElement('td');
  
  let tableData = document.createElement('td');
  tbody.appendChild(dataRow);
  tableData.textContent = this.location;
  dataRow.appendChild(tableData);

  let cookiesPerHour = this.cookiesPerHour;

  for (let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = cookiesPerHour[i];
    dataRow.appendChild(tableData);
  }
};

// Location.prototype.drawHeaderRow = function drawHeaderRow() {
//   const headerRow = document.createElement('tr');
//   const emptyHeader = document.createElement('th');
//   headerRow.appendChild(emptyHeader);

//   for (let hour of hours) {
//     const headerData = document.createElement('th');
//     headerData.textContent = hour;
//     headerRow.appendChild(headerData);
//   }

//   const totalHeader = document.createElement('th');
//   totalHeader.textContent = 'Daily Location Total';
//   headerRow.appendChild(totalHeader);

//   table.appendChild(headerRow);
// };

// Location.prototype.drawFooterRow = function drawFooterRow() {
//   const footerRow = document.createElement('tr');
//   const totalFooter = document.createElement('th');
//   totalFooter.textContent = 'Totals';
//   footerRow.appendChild(totalFooter);

//   let grandTotal = 0;

//   for (let hour of hours) {
//     let hourlyTotal = 0;
//     for (let location of cookiedex) {
//       hourlyTotal += location.cookiesPerHour[hours.indexOf(hour)];
//     }

//     const footerData = document.createElement('td');
//     footerData.textContent = hourlyTotal;
//     footerRow.appendChild(footerData);

//     grandTotal += hourlyTotal;
//   }

//   const grandTotalFooter = document.createElement('td');
//   grandTotalFooter.textContent = grandTotal;
//   footerRow.appendChild(grandTotalFooter);

//   tableEl.appendChild(footerRow);
// };

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location ('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);

// drawHeaderRow();
// cookiedex.forEach(location => location.drawRow());
// drawFooterRow();

seattle.generateCookiesPerHour();


console.log(cookiedex);
console.log(seattle);
console.log(tokyo);
