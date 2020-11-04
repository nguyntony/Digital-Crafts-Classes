function positiveNumbers(arr) {
    let positiveArr = []

    arr.forEach(function (num) {
        num > 0 ? positiveArr.push(num) : null
    })

    console.log(positiveArr)
}

positiveNumbers([-3, 1, 10, 6, -2, -8])