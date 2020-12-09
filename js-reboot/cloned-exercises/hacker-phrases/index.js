const http = require('http');
const express = require('express');

const faker = require('faker');

const app = express();
const server = http.createServer(app);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


const PORT = 5000;
const HOST = '0.0.0.0';

let allPhrases = [];

app.get('/', (req, res) => {

    allPhrases = [];
    res.render('home');
});

app.get('/next', (req, res) => {
    // Every time we refresh
    let phrase = faker.hacker.phrase();
    allPhrases.push(phrase);
    res.render('next', {
        locals: {
            phrase
        }
    })
});

app.get('/all', (req, res) => {
    // creating a variable which will hold the value of how many items there are in the allPhrases array (db)
    const totalPhrases = allPhrases.length
    res.render('all', {
        locals: {
            all: allPhrases,
            totalPhrases, // assigning the same key and value name

        }
    })
});

app.get("/show/:id", (req, res) => {
    // two things are going on right here, in the all.html file we are using .map to iterate over allPhrases and we are generating a link for each item, a neat thing that .map can do is also give the index of the item of each list element so we use that index there to be able to pass it as an id for the href in the a tag for each link. 
    // it's important to note that in the all.html the link that we are passing a link with the id and here we are grabbing that format to use as a route. and we are destructuring to grab that element from the url. and because the id is matched to index of the phrases in the list, we are able to use that id and pass it as an index on the allPhrases so that we can retrieve a specific phrase. 
    const { id } = req.params;
    res.render("specific-phrase", {
        locals: {
            id,
            phrase: allPhrases[id]
        }
    })

})


app.get("/delete/:id", (req, res) => {
    // we are following a similar format here with the delete link, instead of the a tag showing the phrase we are showing the delete message and it has an href and we are using that url format to use as a route here. and similar to the last exercise, we are using the index of the phrase as the id and that allows us to use splice on allPhrases and pass the id (which is the index) and we need to pass a 1 as the second argument to remove one item. 
    const { id } = req.params
    allPhrases.splice(id, 1)
    res.render("delete")
})

server.listen(PORT, HOST, () => {
    console.log(`Working hard over at http://${HOST}:${PORT}`);
});
