function printSquare(num) {
    let row = []
    for (let i = 0; i < num; i++) {
        row.push("*")
    }
    row = row.join(" ")

    for (let i = 0; i < num; i++) {
        console.log(row)
    }
}

printSquare(10)