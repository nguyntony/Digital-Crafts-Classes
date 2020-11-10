// Create an object called ship that has keys name, age, speed, acceleration and values of your choice. Use this object and destructuring for the following operations.
// create a variable name, age from the object.
// create variable for acceleration only from the object.
// create variables age, speed from the object.


let ship = {
    name: "shipname",
    age: 1,
    speed: 10,
    acceleration: 39,
}

let { name, age } = ship
let { acceleration } = ship
let { speed } = ship
console.log(name)
console.log(age)
console.log(acceleration)


// let ship_age = { age }
// let ship_speed = { speed }
// console.log(ship_age)
// console.log(ship_speed)

// (bonus) (hint you will need to read into the link above) create variables called ship_age, ship_speed from the age and speed keys of the object.

let { age: ship_age, speed: ship_speed } = ship
console.log(ship_age, ship_speed)

// you can take the key and it needs to be the key in the object and you can assign the value to a variable. 