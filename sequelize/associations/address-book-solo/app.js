require('dotenv').config();
const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const morgan = require('morgan');
const helmet = require('helmet');
const flash = require("connect-flash")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const app = express();
const server = http.createServer(app);

const routers = require('./routers')
// import routes

const PORT = 3000;
const HOST = '0.0.0.0';

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const logger = morgan('tiny');

app.use(express.urlencoded({ extended: true }));

// the three lines below is for connect-flash
app.use(cookieParser());
app.use(session({
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
    secret: 'cat'
}));
app.use(flash());

app.use(express.static("./public"))

app.use(logger)
// app.use(helmet)
// more routes go here
app.use(routers)


server.listen(PORT, HOST, () => {
    console.log(`Listening at`, HOST, PORT)
});