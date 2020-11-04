function decipher(message, offset) {
    let result = ""

    for (letter in message) {
        // using this kind of for loop actually doesn't return the letter in the message but the index of the letter.
        let code = message.charCodeAt(letter)
        // console.log(code)

        if (code > 64 && code < 91) {
            // this is the checker for capital letters and this is for unicode
            code -= offset
            while (code < 65) {
                code = 91 - (65 - code)
            }

        } else if (code > 96 && code < 123) {
            // this is the checker for lowercase letters and this is for unicode
            code -= offset
            while (code < 97) {
                code = 123 - (97 - code)
            }
        }
        result += String.fromCharCode(code)
    }
    console.log(result)
}

decipher("za lzwjw", 200)