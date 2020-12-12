// const makeRequest = (location) => {
//     return new Promise((resolve, reject) => {
//         console.log(`Making a request to ${location}`)

//         if (location === "Google") {
//             resolve("Google says what up")
//         } else {
//             reject("We don't know you")
//         }
//     })
// }

// const processRequest = (response) => {
//     return new Promise((resolve, reject) => {
//         console.log("processing response")
//         resolve(`extra info: ${response}`)
//     })
// }

// makeRequest(`Google`).then(res => {
//     console.log(`response received`)
//     return processRequest(res)
// }).then(processedRes => {
//     console.log(processedRes)
// }).catch(err => {
//     console.log(err)
// })

// invoking the makeRequest() and we use .then() and we log out a success message and then we can return a processRequest() which we pass the res (Google) and since that is another promise we have to use another .then 


// how can we change what we did above to async await

async function doSomething() { // declare a function but make sure you call async to let js know that we will have asynchronous code


    const makeRequest = (location) => {
        return new Promise((resolve, reject) => {
            console.log(`Making a request to ${location}`)
            if (location === "Google") {
                resolve("Google says what up")
            } else {
                reject("We don't know you")
            }
        })
    }

    const processRequest = (response) => {
        return new Promise((resolve, reject) => {
            console.log("processing response")
            resolve(`extra info: ${response}`)
        })
    }
    //instead of having the promises global you can define them here to be used in the try catch block


    try {
        const response = await makeRequest("Google") // this reads as the rest of the code should wait until this line of code finishes, in this case the makeRequest needs to finish first. as soon as js hits this await keyword, it will leave this function and continue to run code while this runs in the background, here we are also assigned the resolve to the response variable
        console.log(`Response Received`)
        const processedResponse = await processRequest(response)
        console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
}

// if you wrap your code in a try catch statement this will allow you to catch the error if a promise was to be reject, catch takes an err and here we know that it's a string so we console.log the error

doSomething()