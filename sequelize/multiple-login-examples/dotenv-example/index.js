require('dotenv').config();

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

const app = express();
const server = http.createServer(app);

const PORT = 3000;
const HOST = '0.0.0.0';

const logger = morgan('tiny');

const Sequelize = require('sequelize');
const { User } = require('./models');

const db = [];

app.use(logger);
// Disabling for local development
// app.use(helmet());

// Parse any form data from POST requests
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`<h1>Hello!</h1><br><a href="/new">Sign up</a> or <a href="/login">Log in</a>`)
});

app.get('/new', (req, res) => {
    res.send(`
<h1>Sign up</h1>
<form method="POST">
  <label>
    Username:
    <input name="username" type="text" autofocus />
  </label>
  <label>
    Password:
    <input name="password" type="password" />
  </label> 
 <input type="submit" value="do it!" />
</form>
    `);
});

app.post('/new', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (username == '' || password == '') {
        // Really should give the user a message
        console.log('username or password is blank');
        res.redirect('/new');
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        try {
            console.log('adding new user');
            const newUser = await User.create({
                username,
                hash
            });
            res.redirect('/login');                        
        } catch (e) {
            // e.name will be "SequelizeUniqueConstraintError"
            console.log(e.name);
            if (e.name === "SequelizeUniqueConstraintError") {
                // We should tell the user that the username is taken
                // and then redirect them
            }
     
            res.redirect('/new');
        }
    }
});

app.get('/login', (req, res) => {
    res.send(`
<h1>Log in</h1>
<form method="POST">
  <label>
    Username:
    <input name="username" type="text" autofocus />
  </label>
  <label>
    Password:
    <input name="password" type="password" />
  </label> 
 <input type="submit" value="do it!" />
</form>
    `);
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Get the user by the username
    const user = await User.findOne({
        where: {
            username
        }
    });
    if (user) {
        console.log('valid user...checking password');
        const isValid = bcrypt.compareSync(password, user.hash);
        if (isValid) {
            console.log('password is good!');
            res.redirect('/members-only');
        } else {
            console.log('but password is wrong');
            res.redirect('/login');    
        }
    } else {
        console.log('not a valid user');
        res.redirect('/login');    
    }
});

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
