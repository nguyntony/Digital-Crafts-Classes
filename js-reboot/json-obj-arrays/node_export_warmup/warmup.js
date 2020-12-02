const moment = require("moment")

const todayDate = () => {
    const today = moment().format("MM/DD/YYYY")
    return today
}

// todayDate()

module.exports = todayDate;

