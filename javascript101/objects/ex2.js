let ships = [
    {
        // first ship
        name: "billy",
        topSpeed: 150,
        acceleration: 25,
        cargoCapacity: 100
    },
    {
        // second ship
        name: "bob",
        topSpeed: 200,
        acceleration: 50,
        cargoCapacity: 80
    },
    {
        // third ship
        name: "kelly",
        topSpeed: 75,
        acceleration: 80,
        cargoCapacity: 125
    }
]

// console.log the name and top speed of the 2nd ship.
console.log(`the name of the second ship is ${ships[1].name} and its top speed is ${ships[1].topSpeed}.`)


// loop through the array and print out every stat in a key:value style.
ships.forEach(function (eachShip) {
    for (key in eachShip) {
        console.log(`${key}: ${eachShip[key]}`)
    }
    console.log("")
})


// sort the array by the ship with the fastest speed and console log it out.
ships.sort(function (a, b) {
    return b.topSpeed - a.topSpeed
}
)

console.log(ships)