let body = document.querySelector("body")
let header = document.createElement("h1");
let main = document.createElement("main");
let section = document.createElement("section");
let header2 = document.createElement("h2");
let para = document.createElement("p")
let ulist = document.createElement("ul")

header.innerText = "CONTENT"
body.append(header)
body.append(main)
main.append(section)

header2.innerText = "Section Title"
section.append(header2)

para.innerText = "here is some text"
section.append(para)

main.append(ulist)

for (let i = 0; i < 5; i++) {
    let listItem = document.createElement("li")
    listItem.append(`list item #${i + 1}`)
    ulist.append(listItem)
}

let section2 = document.createElement("section")
section2.id = "attributes"

body.append(section2) // adding a section#attributes to the body

let myArr = [
    {
        url: "https://www.google.com/",
        id: "google-link:",
        text: "gogogoole"
    },
    {
        url: "https://www.youtube.com/",
        id: "youtube-link",
        text: "youyoutube"
    },
    {
        url: "https://twitter.com/?lang=en",
        id: "twitter-link",
        text: "twiwtwitter"
    }
]

let ulist2 = document.createElement("ul")
section2.append(ulist2)

myArr.forEach(function (anchor) {
    let item2 = document.createElement("li")
    let item2a = document.createElement("a")
    item2.append(item2a)
    item2a.href = anchor.url
    item2a.id = anchor.id
    item2a.innerText = anchor.text

    ulist2.append(item2)
})

// what's happening in this for loop is that we are looping through an array of objects, so we use .forEach() I temporarily created an anchor variable which will act as each object in the array. for each object we want to create a li item and then append an a tag to it (html rules) and then in the a tag we will append the values of the object which is accessed as anchor.attribname 

