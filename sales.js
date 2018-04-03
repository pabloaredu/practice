var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData) {
  var companyData = {};
  for(var i = 0; i < salesData.length; i++) {
    var item = salesData[i]
    var key = item.name;
    companyData[key] = item.sales[0];
  }

  return companyData;
};


function sumArray (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

var myArray = [1,2,3];

console.log(sumArray(myArray))
// console.log(calculateSalesTax(companySalesData));
// var results = calculateSalesTax(companySalesData, salestaxRates);