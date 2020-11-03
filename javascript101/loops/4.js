let num = 10
let total = 0
for (let i = 0; i <= num; i++) {
    if (!(i % 2)) continue;
    if (!(i % 3)) continue;
    console.log(i)
    total += i
}

console.log(total)