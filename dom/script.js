console.log("Does this do anything?")

let mainContent = document.createElement("div")
let htmlbody = document.querySelector("body")

mainContent.setAttribute("id", "main-content")
htmlbody.append(mainContent)

let ulist = document.createElement("ul")
mainContent.append(ulist)

for (let i = 0; i < 5; i++) {
    let listItem = document.createElement("li")
    listItem.append(`item #${i + 1}`)
    ulist.append(listItem)
}

// let section = document.querySelector("#section")
// let p = document.createElement("p")
// p.append("will this work?")
// section.append(p)