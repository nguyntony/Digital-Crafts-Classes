function cipher(message, offset) {
    let result = ""

    for (letter in message) {
        // using this kind of for loop actually doesn't return the letter in the message but the index of the letter.
        let code = message.charCodeAt(letter)
        // console.log(code)

        if (code > 64 && code < 91) {
            // this is the checker for capital letters and this is for unicode
            code += offset
            while (code > 90) {
                code = 64 + (code - 90)
            }

        } else if (code > 96 && code < 123) {
            // this is the checker for lowercase letters and this is for unicode
            code += offset
            while (code > 122) {
                code = 96 + (code - 122)
            }
        }
        result += String.fromCharCode(code)
    }
    console.log(result)
}


console.log("abc".charCodeAt(1))