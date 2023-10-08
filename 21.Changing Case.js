// var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];
// console.log (cleanestCities);

// cleanestCities = cleanestCities.toLowerCase();
// console.log (cleanestCities);
// So when you use that array into lower case the error occurs 

var cleanCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];
console.log (cleanCities);

// Use map() to convert each element to lowercase
var lowercaseCities = cleanCities.map(function(city) {
  return city.toLowerCase();
});
console.log(lowercaseCities);

var state = "Australia";
console.log(state);
var state = state.toUpperCase();
console.log(state);


var kingdom = "Abu Dhabi";
console.log(kingdom);
var newKingdom = kingdom.toUpperCase();
console.log(newKingdom);


var country = "AMERICA".toLowerCase();
console.log(country);
var country = "united arab emirates".toUpperCase();
console.log(country);

var pets = ["pigeon","parrot","cat","dog"];
var newPets = pets[3].toUpperCase();
console.log(newPets);

array = "bulb"
if (array.toUpperCase() === "BULB") {
    console.log("Hurray!");
}
else {
    console.log("Oh Shit!");
}