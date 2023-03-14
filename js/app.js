function Location(minCust, maxCust, avgCookieSale) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourSales = [];
}

const seattle = new Location(23, 65, 6.3);
const tokyo = new Location(3, 24, 1.2);
const dubai = new Location(11, 38, 3.7);
const paris = new Location(20, 38, 2.3);
const lima = new Location(2, 16, 4.6);

randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
}

randSalesData: function() {
    for (let i = 0; i < hours.length; i++) {
        let customersPerHour = this.randCustomers();
        let hourSales = math.round(customersPerHour * this.avgCookieSale);
        this.hourSales.push(hourSales);
    }
}

seattle.randCustomers();
