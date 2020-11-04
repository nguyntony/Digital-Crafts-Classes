// what is an array?
let exampleArray = []

// this is how you declare an array and this exampleArray will be an empty array.
// arrays are ordered lists

// to access an array you would have the variable with the brackets []
let exArray = [1, 2, 3, 4]
exArray[3]

// this would print 4 because index starts at 0, you will need to console.log this for it to print something.

// how to add an item in an array, you use the .push() and pass it a value.
exArray.push(5)


// .pop() will remove the last element
exArray.pop()


// .unshift() will add an element to the front of the array.
exArray.unshift(0)


// .shift() will remove the first element 
exArray.shift()


// .length is an attribute that will tell you how many items are in the array
// note that you do not need the () because it is a property
exArray.length
for (let i = 0; i < exArray.length; i++) {
    console.log(exArray[i])
}

// according to clint ^ this is an old school way doing this, a better way of doing this is:

// forEach() will require a callback func as the first parameter
exArray.forEach(function (num) {
    console.log(num)
})


// you can pass index as the second value and you will grab the index this way.
exArray.forEach(function (num, index) {
    console.log(num, index)
})


// you can pass the source array as sourceArr and pass it as the third arugment to print the source array.
exArray.forEach(function (num, index, sourceArr) {
    console.log(num, index, sourceArr)
})