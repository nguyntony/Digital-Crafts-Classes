let json1 = `{
    "name": "Testing",
    "age": 50,
    "email": "noemail.com"
}`
console.log(JSON.parse(json1))
// this is turning the JSON into a js object


let jsObj = {
    name: "testing again",
    text: "will this work",
    num: 10
}
console.log(JSON.stringify(jsObj))
// this is turning the js object into a JSON

let objArr = [
    {
        name: "hi there",
        num: 1,
        isSmart: false
    },
    {
        name: "byebye",
        num: 2,
        isSmart: true
    },
    {
        name: "goodnight",
        num: 3,
        isSmart: false
    }
]

let jsToJSON = JSON.stringify(objArr)
console.log(jsToJSON)


console.log(JSON.parse(jsToJSON))