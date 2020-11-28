console.log("hello world");

// Console log from 1 to 100 using node.
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

// Create a function that accepts a string as an argument.
// Have the program write to the terminal "The cow says ... {the value supplied}"
// Call that function 3 times with 3 different strings as the argument.
const cowSays = (sound) => {
  console.log(`The cow says...${sound}.`);
};

cowSays("moooomoooo");
cowSays("hi there");
cowSays("leave me alone");

// Using the array below, create a new array of just the names using mape in node.js.
let people = [
  { name: "batman", powers: "none" },
  { name: "iron man", power: "rich" },
  { name: "The Hulk", powers: "being green" },
  { name: "Superman", powers: "Being an Alien" },
];

let peopleNames = people.map((person) => person.name);

console.log(peopleNames);
