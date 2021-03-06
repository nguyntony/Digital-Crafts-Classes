let htmlContent = ({ title, heading, additional }) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/api/people">People DB</a>
    </nav>
    <h1>${heading}</h1>
    <div>${additional}</div>
</body>
</html>
    `
}

module.exports = htmlContent;