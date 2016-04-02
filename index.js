var products = "1 for R3,2 for R7, 3 for R10,5 for R14.50.";

if (products[products.length-1] === ".")
  products = products.slice(0,-1);

var numbers = products.split(",");

var deals = [];

 numbers.forEach(function(products){
deals.push(products.split("for R"));

 });

var dealList = [];

 deals.forEach(function(products){
   var quantity = Number(products[0]);
   var price =Number(products[1]);

 var perAvoPrice = (price/quantity);

   dealList.push(Number(perAvoPrice.toFixed(2)));


 });

var cheapestDeal = Math.min.apply(null, dealList);
var expensiveDeal = Math.max.apply(null, dealList);


var total = 0;

for(var i = 0; i < dealList.length; i++){
  total += dealList[i];
}

var averageDeal = Number((total/dealList.length).toFixed(2));

console.log(dealList);
console.log(cheapestDeal);
console.log(expensiveDeal);
console.log(averageDeal);
