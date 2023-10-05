var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
    console.log(fullNames);
  }
}


var animals = ["goat", "cat", "crow"];
var products = ["milk", "cheese", "burger"];
var foodItems = [];
var k = 0;

for (var i = 0; i < animals.length; i++) {
  for (var j = 0; j < products.length; j++) {
    foodItems[k] = animals[i] + products[j];
    k++;
    console.log(foodItems);
  }
}


for (var i = 0; i < 1; i++) {
  for (var j = 0; j < 1; j++) {
    console.log(i + j);
  }
}


var fruits = ["lemon ", "orange "];
var variations = ["juice", "curd"];
var products = [];
var h = 0;
for (var i = 0; i < fruits.length; i++) {
  for (var j = 0; j < variations.length; j++) {
    products[h] = fruits[i] + variations[j];
    h++;
    console.log(products[0]);
  }
}
console.log(products[0]);