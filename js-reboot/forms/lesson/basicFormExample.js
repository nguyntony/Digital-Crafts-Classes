const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');


const db = [];

app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1><br><a href="/new">Go to the form</a>`)
});

// in your form you need to add the method="POST"
app.get('/new', (req, res) => {
    res.send(`
<h1>Say something!</h1>
<form method="POST">
  <label>
    Thoughts?
    <input name="thought" type="text" autofocus />
  </label>
  <input type="submit" value="do it!" />
</form>
    `);
});

// the client-side is posting something
app.post('/new', (req, res) => {
    // we are extracting that information here based on what is the name label in the html.
    const { thought } = req.body;
    // this is us "saving" the data to a "database"
    db.push(thought);
    // this will redirect the user to another page which is another GET request.
    res.redirect('/list');
});

app.get('/list', (req, res) => {
    res.send(`
<a href="/new">Go to the form</a>
<ul>
  ${db.map(thought => `<li>${thought}</li>`).join('')
        }
</ul>
    `);
});

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});