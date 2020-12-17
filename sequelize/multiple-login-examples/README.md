
## simple-login

Shows how to use `bcryptjs` to store password hashes.

A hash is the result of running a plain text password (what you type) into an unreadable string of numbers and letters.

A hash can be recomputed by passing the original password to bcrypt, but it's mathematically impossible to turn a hash into the original password.

The `salt` is an additional input that bcrypt uses to randomize the hash. The salt itself is generated randomly. Bcrypt tacks this on to the end of the hash.

The purpose of a salt is not that it is secret - it is so that two passwords produce two different hashes.

## login-templates

Adds `express-es6-template-engine` to app

## login-templates-controllers

Moves route handler functions to `/controllers` directory.

## login-templates-routers

Moves route matching to `/routers` directory.

## dotenv-example

Based on `simple-login`, shows how to hide your login info using the `dotenv` module.

Requires reconfiguring sequelize to use the hidden info.


## login-sessions

Uses `dotenv` to hide session secrets.

Demonstrates how to use `express-sessions` to know if a user is logged in.

Can be used to store information as a user moves from page to page.
