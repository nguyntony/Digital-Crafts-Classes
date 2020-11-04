function totalAmount(bill, service) {
    let tipPercent, total

    switch (service) {
        case ("good"):
            tipPercent = 0.2
            break;
        case ("fair"):
            tipPercent = 0.15
            break;
        case ("bad"):
            tipPercent = 0.1
            break;
    }

    total = bill += bill * tipPercent
    return `Your total including tip is ${total}`
}

console.log(totalAmount(140, "good"))