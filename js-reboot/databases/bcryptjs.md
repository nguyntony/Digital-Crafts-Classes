# bcryptjs
- - - -
[Github Code](https://github.com/DigitalCraftsStudents/multiple-login-examples/tree/main/simple-login) (Simple - Login) The code that we are looking at and will be annotating.

### How to findOne
```js
const user = await User.findOne({
        where: {
            username
        }
```
* specify a where clause,  we are passing username which we have grabbed from destructing from req.body; so we want to search based on that username. 
* sidenote: you can also use the where clause on findAll 

```js
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
```
* we are passing user into the if statement, if something is returned then user should be truthy, if nothing is returned then it will evaluate to false. 
* in the else statement we want to use the redirect to take them back to a fresh login page. 
* if there is a user, we want to make sure that the user is valid 
* we are using bcrypt to check the password. 
* STORE HASHES not passwords (in your db)
* a hash is a one-way encrypted version of the password. (It is jumbled so it is not human readable) 


### Signing up
```js
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
```
* salt is a string that helps bcrypt randomize the scrambled version of your password 
* hash is a result of a one way hashing function 

So here we are creating a salt which may be interpreted as a formula and later we hash it, almost like mixing it together to create a hidden password and we are saving the hash to db. 

### Unique user name error
```js
catch (e) {
            // e.name will be "SequelizeUniqueConstraintError"

            if (e.name === "SequelizeUniqueConstraintError") {
                // We should tell the user that the username is taken
                // and then redirect them
            }
```

### Case sensitivity 
It is the developer’s responsibility, so you should trim off any whitespace and also make it all lowercase or uppercase





