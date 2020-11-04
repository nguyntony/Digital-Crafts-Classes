function tipAmount(bill, service) {
    let tipPercent, tip

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

    tip = bill * tipPercent
    return `Your tip is ${tip}`
}

console.log(tipAmount(140, "good"))