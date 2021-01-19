// how to use async/await with fetch()
async function getJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
    });
    const jokeData = await response.json();
    console.log(jokeData)
    console.log(jokeData.joke)
    return jokeData.joke
}

// another way you may see it
// async function main() {
//     const jokePromise = fetch("https://icanhazdadjoke.com", {
//         headers: { Accept: "application/json" }
//     })
//     const response = await jokePromise
//     const jokeData = await response.json()
//     console.log(jokeData)
//     console.log(jokeData.joke)
// }

function renderJoke(joke) {
    // you will have to use await here because we are awaiting for the getJoke()
    // const joke = await getJoke()

    // create dom element 
    const p = document.createElement('p')
    p.textContent = joke;

    // attach it to the existing dom element
    const jokeBox = document.querySelector('.joke-box')
    jokeBox.appendChild(p)
}

function main() {
    const btn = document.querySelector("[data-js-new-joke]")
    btn.addEventListener('click', async (event) => {
        // since this is a callback fn, you are able to pass event as an argument which will be the element
        event.preventDefault();
        const joke = await getJoke()
        renderJoke(joke)
    })
}

main()
