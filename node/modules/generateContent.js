const makeHeading = require("./makeHeading")
// right here, we are importing the makeHeading function from the same folder. 


const navigation = `
<nav>
    <span><a href="?page=home">Home</a></span>
    <span><a href="?page=contact">Contact</a></span>
    <span><a href="?page=about">About</a></span>
</nav>
`
// this isn't needed anywhere else which is why you see it here. 


let generateContent = ({ page, additional, count }) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Selection:${page}</title>
                <link rel="stylesheet" href="./styles.css" type="text/css">
            <head>
            <body>
                ${navigation}
                ${makeHeading(page)}
                The count is ${count || 0}. I hope you are happy.
                <ul>
                    ${additional.join("")}
                </ul>
                <footer>
                    copyleft 2020
                </footer>
            </body>
        </html>
    `
}
// we are making another function that will take a single object with these key/value names, the key name will be the same as the variable name for the value and we pass it here into this string which will make our html mockup

module.exports = generateContent;