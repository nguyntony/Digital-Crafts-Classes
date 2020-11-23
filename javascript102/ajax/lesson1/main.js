import ajax from "./modules/ajax.js"

// ajax("text1.txt", (fileContent) => {
//     document.body.append("this is importing just one file: ", fileContent)
// })

// const ul = document.createElement("ul")
// document.body.append(ul)


// // ul.append(document.createElement("li").append(document.createElement("h1").innerText = "unordered list"))

// let li = document.createElement("li")
// let h1 = document.createElement("h1")
// li.append(h1)
// ul.append(li)
// h1.innerText = "list"

// const nums = [1, 2, 3]
// nums.forEach((num) => {
//     let li = document.createElement("li")
//     ajax(`text${num}.txt`, (eachFile) => {
//         li.append(eachFile)
//     })
//     ul.append(li)
// })

ajax("https://rickandmortyapi.com/api/character/", (results) => {
    let parsedResults = JSON.parse(results)
    let resultsArr = parsedResults.results
    console.log(resultsArr)
    resultsArr.forEach((result) => {
        console.log(result.name)
    })
})
