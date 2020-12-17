const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const es6Renderer = require('express-es6-template-engine');

const userController = require('./controllers/user');
const homeController = require('./controllers/home');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');


app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.get('/', homeController.home);

app.get('/new', userController.newUser);
app.post('/new', userController.processNewUser);

app.get('/login', userController.login);
app.post('/login', userController.processLogin);


app.get('/members-only', (req, res) => {
    res.send(`

<h1>Only for logged-in users!</h1>
<h2>But not really enforced - see the sessions example</h2>
<a href="/">Start over</a>
    `);
});


server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});
