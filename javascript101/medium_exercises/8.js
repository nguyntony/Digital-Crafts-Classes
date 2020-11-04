function leetspeak(message) {
    let messageArr = message.split('');

    messageArr.forEach(function (letter, index) {
        switch (letter) {
            case ("a"):
                messageArr[index] = 4
                break;
            case ("e"):
                messageArr[index] = 3
                break;
            case ("g"):
                messageArr[index] = 6
                break;
            case ("i"):
                messageArr[index] = 1
                break;
            case ("o"):
                messageArr[index] = 0
                break;
            case ("s"):
                messageArr[index] = 5
                break;
            case ("t"):
                messageArr[index] = 7
                break;
        }
    })
    console.log(messageArr.join(""))
}

leetspeak("Leetspeak, does this work?")