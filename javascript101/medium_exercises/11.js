function cipher(message, offset) {
    let alphabet = "abcdefghijklmonpqrstuvwxyz"
    let alphabetArr = alphabet.split("")
    // let alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

    // offset > 27 ?
    let newLetter = undefined

    alphabetArr.forEach(function (letter, index) {
        switch (letter) {
            case ("a"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("b"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("c"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("d"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("e"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("f"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("g"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("h"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("i"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("j"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("k"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("l"):
                newLetter = alphabetArr[index + offset]
                break;
            case ("a"):
                newLetter = alphabetArr[index + offset]
                break;
        }
    })

    let encodedArr = []
    let messageArr = message.split("")
    messageArr.forEach(function (letter, index) {
        switch (letter) {
            case ("a"):
                messageArr[index + offset]
        }

    })
    console.log(encodedArr.join(""))
}

cipher("hi there", 3)