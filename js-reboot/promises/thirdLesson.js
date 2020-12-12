const doLaundry = new Promise((resolve, reject) => {
    resolve("laundry done")
})

const study = new Promise((resolve, reject) => {
    resolve("studying done!")
})

const workout = new Promise((resolve, reject) => {
    reject("working out now!")
})

// we have three promises, all of them will resolve, what if we to do something after all three of these promises and we want to run these all at the same time.

Promise.all([
    doLaundry,
    study,
    workout
]).then((messages) => {
    console.log(messages)
}).catch((message) => {
    console.log(`I did not do this: ${message}`)
})

// you can read this as...we are going to get all of our promises and we want something to occur after all three are fulfilled and something to note is that, .then() will now receive an array of messages.
// all promises has to be fulfilled otherwise there will be a reject.


Promise.race([
    doLaundry,
    study,
    workout
]).then((message) => {
    console.log(message)
})

// using Promise.race instead of Promise.all will return a success after at least one of the promises have been fulfilled. so now .then() we actually only get one message