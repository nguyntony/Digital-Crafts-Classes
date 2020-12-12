// creating a promise
// a promise has two arguments, the first one being the resolve and the second one being reject; and these are callback fns
let p = new Promise((resolve, reject) => {
    // the code block here will now define what the actual promise is
    let a = 1 + 1 // this is the promise
    if (a == 2) { // and here we are checking that promise.
        resolve("success")
    } else {
        reject("failed")
    }
})

// now, after we created our promise we can chain the promise with a .then, you can read it like after this promise is fulfill then you will do this...
p.then((message) => {
    console.log("this is in the then " + message)
}).catch((message) => {
    console.log("this is in the catch " + message)
})

// the resolve and reject that we did earlier we passed it a simple string of either success or failed. that is only creating the promise, on line 14, we are actually invoking this promise with .then() what was passed in the resolve or reject will now be passed to the .then() and we can refer to it as something else, in this case we are referring it to as message. and the .then() will take an anon callback fn using that reference we chose and we are going to console.log a statement with message 

// the .then activates in the event where the promise is successful but we need to add the .catch() for the event where the promise is rejected in order to invoke the reject() that we created in the promise.

