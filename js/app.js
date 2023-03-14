//store min/max hourly customers, and avg cookies per customer in object properties

function Location(minCust, maxCust, avgCookieSale) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourSales = [simulatedResults];
  this.hours = ['7AM', '8AM', '9AM', '10AM'];
}

const seattle = new Location(23, 65, 6.3);
const tokyo = new Location(3, 24, 1.2);
const dubai = new Location(11, 38, 3.7);
const paris = new Location(20, 38, 2.3);
const lima = new Location(2, 16, 4.6);

//uses a method of that object to generate a random number of customers per hour

function randCustomers(avgCookieSale) {
  return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
}


//calculate and store the simulated amounts of cookies for each hour at each location using avg cookies purchased and the random number of customers generated
//store the results for each location in a separate array as a property of the object representing that location

function simulatedResults() {
  for (let i = 0; i < location.hours.length; i++) {
    let customersPerHour = this.randCustomers();
    let hourSales = parseInt(customersPerHour * this.avgCookieSale);
    this.hourSales.push(hourSales);
  }
}

//display the values of each array as unordered lists in sales.html

function display() {
  let locationName = Location;
  let salesList = document.getElementById('sales-table');

  let listItem = document.createElement('li');
  listItem.textContent = locationName + ' Sales:';
  salesList.appendChild(listItem);

  let totalSales = 0;
  for (let i = 0; i < hours.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = hours[i] + ': ' + this.hourSales[i] + ' cookies';
    salesList.appendChild(listItem);
    totalSales += this.hourSales[i];
  }

  let totalListItem = document.createElement('li');
  totalListItem.textContent = 'Total: ' + totalSales + ' cookies';
  salesList.appendChild(totalListItem);
}



randCustomers(seattle);
simulatedResults(seattle);
display(seattle);

randCustomers(tokyo);
simulatedResults(tokyo);
display(tokyo);

randCustomers(dubai);
simulatedResults(dubai);
display(dubai);

randCustomers(paris);
simulatedResults(paris);
display(paris);

randCustomers(lima);
simulatedResults(lima);
display(lima);
