function myFunc(anon, num) {
    let i = 0;
    for (; i <= num; i++) {
        console.log(i)
    }
    anon();
}

myFunc(function () {
    console.log("I am an anon function and I want to say something.")
}, 10)

myFunc(function () {
    console.log("I am calling the function with a different function!")
}, 5)

const anotherFunc = function () {
    console.log("I'm going to assign this to a variable")
}

myFunc(anotherFunc, 10)