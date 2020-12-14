// 3. In JavaScript, write an example of the kind of data that is in the Model layer.

// imagine that this file is in your models directory.

// you may want to import the actual db which may be a .json file
const petsDB = require("./pets")

// then you may want to do something with that database, you would make a copy so that you will always have an original

const pets = [...petsDB]

// note that the data is an array of objects and doing this will still have it be an array of objects. 

// and you could grab the pets name only. 

const petNames = pets.map(pet => pet.name)

// then you could export this 

module.exports = {
    all: pets,
    petNames
}