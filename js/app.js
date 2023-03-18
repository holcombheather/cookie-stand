'use strict';

let cookiedex = [];
// let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
// let table = document.getElementById('dataTable'); //moved to render
let standOpen = 6;
let standClose = 20;
let hoursOpen = standClose - standOpen;
let table = document.getElementById('dataTable');

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

Location.prototype.customersRandom = function() {
  let min = Math.ceil(this.minCust);
  let max = Math.floor(this.maxCust);
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
};

Location.prototype.generateCookiesPerHour = function() {
  for (let i = standOpen; i <= standClose; i++) {
    let customers = this.customersRandom();
    this.customerPerHour.push(customers);
    let hourlyCookies = Math.ceil(customers * this.avgPurchase);
    this.cookiesPerHour.push(hourlyCookies);
    this.totalCookiePerStore += hourlyCookies;
  }
};


Location.prototype.render = function() {
  // let table = document.getElementById('dataTable'); //moved to be a global variable
  let tbody = document.createElement('tbody');

  table.appendChild(tbody);
  let dataRow = document.createElement('tr');

  let tableData = document.createElement('td');
  tbody.appendChild(dataRow);
  tableData.textContent = this.city;
  dataRow.appendChild(tableData);

  let cookiesPerHour = this.cookiesPerHour;

  for (let i = 0; i < cookiesPerHour.length; i++) {
    let tableData = document.createElement('td');
    tableData.textContent = cookiesPerHour[i];
    dataRow.appendChild(tableData);
  }

  let totalCookiePerStore = this.totalCookiePerStore;
  let tableDataTotal = document.createElement('td');
  tableDataTotal.textContent = totalCookiePerStore;
  dataRow.appendChild(tableDataTotal);
};


function displayTableHeader(){
  // let table = document.getElementById('dataTable');
  // console.log("displayTableHeader");
  let thead = document.createElement('thead');
  let headerRow = document.createElement('tr');

  table.appendChild(thead);

  thead.appendChild(headerRow);

  let blankTh = document.createElement('th');
  headerRow.appendChild(blankTh);

  for (let i = standOpen; i <= standClose; i++){
    let headHours = document.createElement('th');
    console.log(i);
    if (i === 12) {
      headHours.textContent = `${i}pm`;
    } else if (i > 12) {
      headHours.textContent = `${i - 12}pm`;
    } else {
      headHours.textContent = `${i}am`;
    }

    headerRow.appendChild(headHours);
  }

  let totalHeader = document.createElement('th');
  totalHeader.textContent = 'Total';
  headerRow.appendChild(totalHeader);
}

function displayTableBody(){
  for (let i = 0; i < cookiedex.length; i++){
    let store = cookiedex[i];
    // store.generateCookiesPerHour();
    store.render();
  }
}

function displayTableFooter(){
  console.log('tableFooter');
  // let table = document.getElementById('dataTable');


  let tfoot = document.createElement('tfoot');
  let footerRow = document.createElement('tr');


  table.appendChild(tfoot);
  tfoot.appendChild(footerRow);

  // let existingFooter = table.querySelector('tfoot');
  // if (existingFooter) {
  //   table.removeChild(existingFooter);
  // }

  let totalFooter = document.createElement('td');

  totalFooter.textContent = 'Total';
  footerRow.appendChild(totalFooter);

  let grandTotal = 0;

  let h = 0;
  while (h <= hoursOpen){
    let hourlyTotal = 0;

    for (let i = 0; i < cookiedex.length; i++){
      hourlyTotal += cookiedex[i].cookiesPerHour[h];
      grandTotal += cookiedex[i].cookiesPerHour[h];
    }
    let tableFooterTotal = document.createElement('td');
    tableFooterTotal.textContent = hourlyTotal;
    footerRow.appendChild(tableFooterTotal);

    h++;
  }


  let grandTotalFooter = document.createElement('td');
  grandTotalFooter.textContent = grandTotal;
  footerRow.appendChild(grandTotalFooter);
}


function addNewLocation(event) {
  event.preventDefault();

  let city = event.target.city.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgPurchase = parseFloat(event.target.avgPurchase.value);

  let newLocation = new Location(city, minCust, maxCust, avgPurchase);
  newLocation.generateCookiesPerHour();
  table.innerHTML = '';
  displayTableHeader();
  displayTableBody();

  // Update the table footer with the new store information
  displayTableFooter();

  // Clear the form input fields
  event.target.reset();
}

let form = document.getElementById('new-location-form');
form.addEventListener('submit', addNewLocation);


let seattle = new Location('Seattle', 23, 65, 6.3);
seattle.generateCookiesPerHour();
let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.generateCookiesPerHour();
let dubai = new Location ('Dubai', 11, 38, 3.7);
dubai.generateCookiesPerHour();
let paris = new Location('Paris', 20, 38, 2.3);
paris.generateCookiesPerHour();
let lima = new Location('Lima', 2, 16, 4.6);
lima.generateCookiesPerHour();



displayTableHeader();
displayTableBody();
displayTableFooter();






console.log(cookiedex);
console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);
