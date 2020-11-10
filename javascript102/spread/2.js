// Using the spread operator when possible do the following:

const cars = [
    {
        make: "Chevy",
        model: "Corvette",
        year: 2019
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2018
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2020
    },
    {
        make: "GMC",
        model: "h2",
        year: 2010
    }
]

// Create a new array adding at least 2 more cars.
let twoCarsAdded = [
    {
        make: "Fesla",
        model: "Model 30",
        year: 2030
    },
    {
        make: "GMCDC",
        model: "h5",
        year: 2015
    }
]
let carsAdded2 = [...cars, ...twoCarsAdded]
console.log(carsAdded2)


// From that new array return another array removing any cars made before 2018.
let onlyAfter2018 = carsAdded2.filter(car => car.year > 2018)
console.log(onlyAfter2018)


// Create a new array with a 2010 ford focus added to the begining.
let fordFocus = { make: "ford focucs", year: 2010 }
let addFordFocus = [fordFocus, ...carsAdded2]
console.log(addFordFocus)


// Create a new array of the cars sorted by date without changing the original cars array.
let sortedCars = [...cars]
sortedCars.sort((a, b) => a.year - b.year)
console.log(sortedCars)
console.log("********")
console.log(cars)
