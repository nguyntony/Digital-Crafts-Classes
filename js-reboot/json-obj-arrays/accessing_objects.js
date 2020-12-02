const places = require("./json/places.json")

// write a fn that prints out an array of the city names in GA

const getCities = (state) => Object.keys(places[state])

console.log(getCities("Georgia"))



// You can predeclare functions that will act upon on one item and pass it as the value to the .filter or .map functions and this predeclared fn will basically take place of the callback fn.