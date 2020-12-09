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
    const { id } = req.params;
    res.render("specific-phrase", {
        locals: {
            id,
            phrase: allPhrases[id]
        }
    })

})

app.get("/delete/:id", (req, res) => {
    const { id } = req.params
    allPhrases.splice(id, 1)
    res.render("delete")
})

server.listen(PORT, HOST, () => {
    console.log(`Working hard over at http://${HOST}:${PORT}`);
});
