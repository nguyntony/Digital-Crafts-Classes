// Create an array of vehicle objects.

// each vehicle object needs to have keys of name, speed, passangers.
// using map, create a list of names of the vehicles.

let vehicles = [
    {
        name: "speedy",
        speed: 20,
        passengers: 5
    },
    {
        name: "slowcan",
        speed: 5,
        passengers: 5
    },
    {
        name: "turboknight",
        speed: 100,
        passengers: 5
    },
    {
        name: "ministuff",
        speed: 10,
        passengers: 5
    },
    {
        name: "lightnot",
        speed: 90,
        passengers: 5
    },
    {
        name: "brokenone",
        speed: 1000,
        passengers: 5
    },
]
let vehicleNames = vehicles.map(vehicle => vehicle.name)
console.log(vehicleNames)