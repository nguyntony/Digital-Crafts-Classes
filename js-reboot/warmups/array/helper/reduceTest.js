const db = require("./json/coffee.json")

console.log(db)

// attempting to reduce

const totalAmount = db.reduce((acc, currValue) => {
    return acc + currValue.cost
}, 0)

console.log(totalAmount)