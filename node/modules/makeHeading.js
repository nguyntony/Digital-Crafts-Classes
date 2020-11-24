const makeHeading = (page) => {
    let heading;
    switch (page) {
        case "about":
            heading = `<h1>This is about!</h1>`;
            break;
        case "contact":
            heading = `<h1>This is contact</h1>`;
            break;
        case "foo":
            heading = "<h1>I Pitty THE foo</h1>"
            break;
        default:
            heading = `<h1>This is Home</h1>`;
    }
    return heading
}

module.exports = makeHeading;

// we created a function that will make the heading for our page. we used a switch case so that depending on which page that the person is on it will return a different heading. page is a variable that we made up but if you look on add_css.js, let page = url.searchParams.get("page") we did add this so that this will grab the page key value from the searchParams object. so here, we are taking the page which would be the value and we want to run the switch case on it, the switch case checks the value of page whether it is equal to about, contact or foo and then it will change the heading accordingly. 

// we also want to export this 