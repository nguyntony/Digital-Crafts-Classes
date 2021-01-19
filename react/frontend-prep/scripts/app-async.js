// how to use async/await with fetch()
async function main() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
    });
    const jokeData = await response.json();
    console.log(jokeData)
    console.log(jokeData.joke)
}
main()

// another way you may see it
// async function main() {
//     const jokePromise = fetch("https://icanhazdadjoke.com", {
//         headers: {Accept: "application/json"}
//     })
//     const response = await jokePromise
//     const jokeData = await response.json()
//     console.log(jokeData)
//     console.log(jokeData.joke)
// }