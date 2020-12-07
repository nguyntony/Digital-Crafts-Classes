const breakfastOptions = [
    'banana',
    'cereal',
    'croissant',
    'coffee',
    'granola + yogurt',
    'smoothie',
    'menthols and diet coke'
];

// for (let i = 0; i < breakfastOptions.length; i++) {
//     console.log(`I would like ${breakfastOptions[i]} to go.`);
// }

// what do this do? 
// this script will loop through the breakfastOptions array and for each option it will use a string interpolation to print the item with the string. 

// how to accomplish the same goal.

for (let breakfastItem of breakfastOptions) {
    console.log(`I would like ${breakfastItem} to go.`);
}

// const breakfastRecursive = (arr, idx) => {
//     if (arr.length === 0) {
//         return
//     }

//     idx = arr.length
//     console.log(`I would like ${arr[idx]} to go.`);
//     breakfastRecursive(arr, idx - 1)
// }
// breakfastRecursive(breakfastOptions)