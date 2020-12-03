// ex.1

const hey = () => console.log("hello, the num is odd");
const hush = () => console.log("hush, the num is even");

hey();
hush();

// ex.2
const sourceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getNums = (arr, which) => {
    if (which === "even") {
        return arr.filter((num) => !(num % 2));
    } else if (which === "odd") {
        return arr.filter((num) => num % 2);
    }
};

console.log(getNums(sourceArr, "odd"));
console.log(getNums(sourceArr, "even"));

// ex.3
const callMeMaybe = (num, fn1, fn2) => num % 2 ? fn1() : fn2();

// condition ? exprIfTrue : exprIfFalse
// what is my thinking here? I am taking the num and I will do module 2 which will either return 1 or 0 and those values also represent true or false, so if a number is even it will return 0 which is false, so if I want it do something then I would put what I want to do there in the false value.


callMeMaybe(100, hey, hush);
callMeMaybe(55, hey, hush)
