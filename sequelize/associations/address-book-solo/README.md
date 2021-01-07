# Address Book Solo
- - - -
## Flash Messages Feature
#### What does it require?
- `npm i connect-flash`
- `npm i cookie-parser`
- `npm i express-session`

You will need to import these packages into your app.js and also add these lines of code…
```
app.use(cookieParser());
app.use(session({
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
    secret: 'cat'
}));
app.use(flash());
```
At the moment writing this, I am not sure if this app.use session will interfere with the other app.use sessions meant for the sessions folder. 

#### Next Steps
You will create a messages.js (this file will be utilized very similar to the layout.js). Inside this file you will create a fn that will accept the request and return an object. The object will have keys that describe the type of messages. And the value for each will be `req.flash()`
```
const getFlashMessages = (req) => {
    return {
        error: req.flash("error"),
        success: req.flash("success"),
        alert: req.flash("alert")
    }
}

module.exports = getFlashMessages
```
You will set it up like so and the string that we pass in flash is almost like the name of an array. So similar to if we did `const error = []`. After, you will export this fn.

You will also need to set up a partial so that we can display the messages whenever needed. So in your templates/partials you may have a file named “flashMessages.html”

Inside that file will have the same amount of types of error as ternary operators. 

If the array length is 0, it will act as falsey and will only display an empty string, which isn’t anything in html, however if the array has a length, it will map over that array and display the contents in which we want.
```
${messages.error.length ? messages.error.map(e => `
    <p><strong class="error">${e}</strong></p>
    `).join("") : ""}

${messages.success.length ? messages.success.map(e => `
    <p><strong class="success">${e}</strong></p>
    `).join("") : ""}

${messages.alert.length ? messages.alert.map(e => `
    <p><strong class="alert">${e}</strong></p>
    `).join("") : ""}
```

Since this is in your layout and if you spread your layout in whichever controller you have the ability to include `${flashMessages}` in that html and you can display a message if you like. 

In the controllers, since you will be requiring the layout, you will also need to require that fn that we created in the messages.js file. 

When you spread that layout, the flashMessages, is there as an option if you wish to include it in the html. One thing to note when doing this though, (I believe) that because we included the flashMessages in the layout and we are calling it constantly, we have to define the messages that you see in the flashMessages file, otherwise you will get an error. So that means, you will have to include “messages” in your locals
```
  res.render("address-book/delForm", {
        ...layout,
        locals: {
            title: "Delete Confirmation",
            friend: findFriend,
            messages: getFlashMessages(req)
        }
    })
```

#### How can I use it?
Well now, that you have the layout and the locals all set up, if you wish to use it, you can do so by invoking `req.flash()` and the two arguments you will pass is (the first argument will be the type of message) this will correspond with the keys that you set when creating that function because you also set the values of those keys to be the same string as the key name. And the second argument will be the string or message. 
```
req.flash('error', "Your entry does not match with the friend's name. Please try again.")
```
You will do it like this and then call for the res.render or redirect and on the page that you are directing the user for, you will include the ${flashMessages}

Once a message has been displayed/read, it will be deleted from flash. (This also counts console.logs)