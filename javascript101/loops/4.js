// // let num = 200
// // let total = 0
// // for (let i = 0; i <= num; i++) {
// //     if ((i % 2) && (i % 3)) continue;
// //     // console.log(i)
// //     total += i
// // }

// // console.log(total);

// `
// when using modulo in this case, if you want to find a number that is divisible by a number it will return 0
// so in this case we want to ignore numbers that are divisible by 2 and 3 so we use the continue so that it will skip for that iteration in the loop

// but also prior knowledge the if statement can evaluate conditions but we are passing it the i % 2, 3 
// so when modulo returns 0 it is crucial to note that the 0 is a falsey statement which then will not run continue because the if statement evaluated it as false

// therefore this is important to add the ! so that it will turn the opposite 0 or falsey which then now makes it true
// so now the statement is saying that for numbers in the iteration that passes this check will return 0 but we want it to continue we call the ! so that numbers that are divisible will now be considered as true for the if statement, so if we reach a number that we want to skip it. 
// `

// // ignore numbers divisible by 2 and 3

// // let end = 11
// // for (let i = 0; i < end; i++) {
// //     ((i % 2 && i % 3)) ? console.log(i) : null
// // }
// let value = 0;
// let number = 200;
// for (let i = 0; i <= number; i++) {
//     value += (i % 2 != 0 && i % 3 != 0) ? i : 0
//     //if(i % 2 != 0 && i % 3 != 0) value += i
//     // if ((i % 2) && (i % 3)) {
//     //     value += i
// }


// console.log(value)

let end = 11;
let total = 0;
for (let num = 0; num < end; num++) {
    if num
}