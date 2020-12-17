
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { layout } = require('../utils')

const home = (req, res) => {
    res.render('home', {
        ...layout
    })
};

const newUser = (req, res) => {
    res.render('login-form', {
        locals: {
            title: 'Sign up'
        },
        ...layout
    });
};

const processNewUser = async (req, res) => {
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
};

const login = (req, res) => {
    res.render('login-form', {
        locals: {
            title: 'Log in'
        },
        ...layout
    });
};

const processLogin = async (req, res) => {
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
};


module.exports = {
    home,
    newUser,
    processNewUser,
    login,
    processLogin,
};
