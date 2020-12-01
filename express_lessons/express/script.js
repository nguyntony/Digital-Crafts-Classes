fetch("http://localhost:4430/home")
    .then(res => res.text())
    .then(text => console.log(text))