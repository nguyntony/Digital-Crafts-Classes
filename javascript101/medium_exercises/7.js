function printBanner(message) {
    let length = message.length + 4
    let top = []

    for (let i = 0; i < length; i++) {
        top.push("-")
    }
    console.log(top.join(""))
    console.log(`- ${message} -`)
    console.log(top.join(""))
}

printBanner("How about this really long message?")