const body = document.querySelector("body")
const form = document.createElement("form")
let information = ["username", "password", "secret-code", "lucky-number", "pet-name"]
const button = document.createElement("button")

button.innerText = "LOGGGGGGGGIN"
form.id = "login"
body.append(form)

information.forEach(item => {
    let input = document.createElement("input")

    if (item == "password" || item == "secret-code") {
        input.type = "password"
    } else {
        input.type = "text"
    }

    input.name = item;
    input.id = item;
    input.placeholder = item;
    form.append(input)
})


let label = document.createElement("label")
label.setAttribute("for", "color")
label.innerText = "favorite color: "
let select = document.createElement("select")
select.name = "color";
select.id = "color";

let colorArr = ["pick a color", "red", "blue", "yellow", "purple", "green"]
colorArr.forEach(color => {
    let option = document.createElement("option")
    if (color == "pick a color") {
        option.value = "";
        option.innerText = color
    } else {
        option.value = color;
        option.innerText = color;
    }
    select.append(option)
})

form.append(label)
form.append(select)
form.append(button)


let loginForm = document.querySelector("#login")
loginForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    console.log("You have submitted your infomation, now it is mine.")
    let userInfo = evt.target.elements
    let results = [...userInfo]
        .filter(element => element.name)
        .map(element => ({ name: element.name, value: element.value }))

    let userDiv = document.createElement("div")
    results.forEach(result => {
        let eachResult = document.createElement("p")
        eachResult.innerText = `${result.name}: ${result.value}`
        userDiv.append(eachResult)
    })
    body.append(userDiv)

    evt.target.reset()
})
