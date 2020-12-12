const userLeft = false
const userWatchingCatMeme = true

// const watchTutorialCallback = (callback, errorCallback) => {
//     if (userLeft) {
//         errorCallback({
//             name: "user left",
//             message: "sad face"
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: "user watching cat meme",
//             message: "cats rule"
//         })
//     } else {
//         callback("thumbs up and like")
//     }
// }

// watchTutorialCallback((message) => {
//     console.log(`success ${message}`)
// }, (error) => {
//     console.log(`failure ${error.name} ${error.message}`)
// })


const watchTutorialPromise = () => {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "user left",
                message: "sad face"
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "user watching cat meme",
                message: "cats rule"
            })
        } else {
            resolve("thumbs up and like")
        }
    })
}
// we are declaring a function that will return a new Promise, one of the perks of this is that now our function takes no callbacks and it is an empty parameter list, the new promise however will take two argument which is resolve and reject, we write a if-else statement in order to check the promises, in this case we are checking values of the variables declared on lines 1 and 2. 

// if the promise fails we want to use resolve, if the promise succeeds then we want to use resolve. and it is important to note that here when we are doing this, this is creating the promise, nothing is being invoked or called for this promise to act. 

// a difference from firstLesson.js is that here we are passing an object for the two instances if the promise is rejected. 

watchTutorialPromise().then((message) => {
    console.log(`success ${message}`)
}).catch((error) => {
    console.log(`failure:\nname: ${error.name}\nmessage: ${error.message}`)
})

// this is when we invoke the promise which is essentially invoking this function which returns a new promise, so we must first invoke the watchTutorialPromise function, after we can use .then() and .catch() 

// for succesful promises we use .then for rejected promises we use .catch(), both of these methods will be given a parameter or argument which will refer to what we passed when creating our promise, note how the then receives a string but the catch receives an object, which is why we have to handle our code accordingly, we can simply concatenate the strings for a successful promise but we must use string interpolation alongside of acessing an object in order to pass that message correctly. 



