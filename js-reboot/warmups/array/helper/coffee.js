// # 2. Coffee

// Use the `coffee.json` file for this exercise.

// Given an array of receipt objects, write a function that returns the total amount spent on `'espresso'`.

// Update your function so that it accepts an additional String argument (e.g., 'black coffee') returns the total amount for that kind of order.



// const totalEspresso = (arr) => {
//     let espressoArr = arr.filter(item => item.order === "espresso")
//     let espressoCost = espressoArr.map(item => item.cost)

//     // console.log(`
//     // espresso length ${espressoArr.length}
//     // \n
//     // espresso cost length ${espressoCost.length}`)

//     // console.log(espressoCost)

//     return espressoCost.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     })
// }

// // totalEspresso(coffeeDB)
// const espressoCost = totalEspresso(coffeeDB)
// console.log(espressoCost)


const coffeeDB = require("../json/coffee.json");


const totalAmount = (arr, itemName) => {
    itemName = itemName.toLowerCase();
    const condition = arr.find((item) => item.order === itemName);

    if (condition) {
        let itemArr = arr.filter((item) => item.order === itemName);
        let itemCost = itemArr.map((item) => item.cost);
        let totalCost = itemCost.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
        totalCost = totalCost.toFixed(2);
        return `the total cost of ${itemName} is ${totalCost}`;
    } else {
        return `alert: ${itemName} does not exist`;
    }
};

const blackCoffeeCost = totalAmount(coffeeDB, "black coffee");
console.log(blackCoffeeCost);

const espressoCost = totalAmount(coffeeDB, "EspreSSo");
console.log(espressoCost);

const matchaLatteCost = totalAmount(coffeeDB, "matcha latte");
console.log(matchaLatteCost);


// I can better my code by instead of creating some many variables, I could chain the array methods