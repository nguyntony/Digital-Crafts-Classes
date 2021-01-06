const getFlashMessages = (req) => {
    return {
        error: req.flash("error"),
        success: req.flash("success"),
        alert: req.flash("alert")
    }
}

module.exports = getFlashMessages
