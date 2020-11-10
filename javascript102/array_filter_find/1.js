// Create an array of at least 6 todo items with each todo having keys, id, todo, status, deadline (timestamp).
// Make at least one date before today.
// Limit the status to "complete","in-progress","todo"
// Using filter, create an array of only the complete items.
// Using find, get the soonest todo item that has a status of "todo".
// using filter get an array of all of the past due items.

let todoList = [
    {
        id: "id1",
        todo: "wash dog",
        status: "completed",
        deadline: new Date("11/1/2020")
    },
    {
        id: "id2",
        todo: "wash car",
        status: "completed",
        deadline: new Date("11/1/2020")
    },
    {
        id: "id3",
        todo: "eat breakfast",
        status: "in-progress",
        deadline: new Date("11/10/2020")
    },
    {
        id: "id4",
        todo: "study es6",
        status: "todo",
        deadline: new Date("11/11/2020")
    },
    {
        id: "id5",
        todo: "study css",
        status: "todo",
        deadline: new Date("11/11/2020")
    },
    {
        id: "id6",
        todo: "do algorithms",
        status: "todo",
        deadline: new Date("11/11/2020")
    },
]

let completedTodo = todoList.filter(todo => todo.status == "completed")
console.log(completedTodo)
console.log("*******************\n")

// let soonestTodo = todoList
//     .filter(todo => todo.status == "todo")
//     .sort(a.deadline - b.deadline)
//     .find(todo => todo.deadline)

let now = new Date().getTime()
let soonest = todoList.sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
    .find(t => {
        if (t.deadline.getTime() > now && t.status == "todo") {
            return true;
        }
    })
console.log(soonest)
console.log("*******************\n")


let pastDueItems = todoList.filter(todo => todo.deadline.getTime() < now)
console.log(pastDueItems)