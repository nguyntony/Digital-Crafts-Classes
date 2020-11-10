const button = document.querySelector("button")
button.onclick = function (event) {
    event.target.classList.toggle("buttonBackgroundChange")
}

let titles = document.querySelectorAll(".title")


const toggleAdditional = function (event) {
    event.target.nextElementSibling.classList.toggle("additional")
}


titles.forEach(function (title) {
    title.onclick = toggleAdditional
})
