function printBox(width, height) {
    topBottom = ""
    for (let i = 0; i < width; i++) {
        topBottom += '-'
    }

    middleSpace = ""
    for (let j = 2; j < width; j++) {
        middleSpace += " "
    }

    console.log(topBottom)

    for (let middleRows = 2; middleRows < height; middleRows++) {
        console.log("|" + middleSpace + "|")
    }

    console.log(topBottom)
}

printBox(7, 7)