// 5. In JavaScript, write a function that converts your example Model data into your example View format.

// the code that we wrote in the html file, you can actualy write in js and then just import it or call it into the html file itself. 

// may need to import the models.

const petModels = require("./models/pet")

// petModels is import and object with the keys all and petNames
// all is an array of objects
// petNames is just an array

// to get the petnames
// we write the code that would essentially be seen in the html file, so we access that petModels object by passing a key of petNames which is an array and we map over it and turn each name into an li element

// so now in our html file we can just pass ${htmlPetNamesList}

const petNamesList = (req, res) => {
    const htmlPetNamesList = petModels.petNames.map(pet => `
    <li>${pet}</li>
    `).join('')

    res.render("/petnames", {
        locals: {
            htmlPetNamesList
        }
    })
}