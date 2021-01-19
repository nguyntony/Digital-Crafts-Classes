// how to use fetch with an api
fetch('https://icanhazdadjoke.com', {
    headers: { Accept: 'application/json' }
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
