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

## What is a front-end script file?
You will need to create a public folder and in your app.js you will need to use express.static (this will come with express). 
- `app.use(express.static("./public"))`
You will need to add this line of code where you will put middleware and this line of code will host static files. (Ie such as your css file OR you can have script files here)

When you want to use these files, for example you will need to link a css file to the link tag inside of the head tag and it will look like this 
- `<link rel="stylesheet" href="/styles.css">`
It is important to note that because these files are in your public folder and that you are hosting static files (by doing the above) to link these files it is like if they are on the root directory which is why you only have a single /

Another example would be 
- `<script src="/deleteButton.js"></script>`
You can add this script tag in your html files that are in your templates and you will be able to do DOM manipulation here!!! 

## Model creation 
This is a tidbit for myself on how I like to create models. When I need to create models, you need to take the time to understand what kind of attributes are needed in this model. I think it is crucial to understand how you want that data to be stored, such as whether the name is a string or if the uid is and integer. You will also need to understand if there are any constraints or validators that you want to include here. For example, the username attribute may want the unique:true or the email attribute may want to have a validator of whether the value is an email or not. 

At the moment of writing this, I am not sure how to include the constraints and validators without destroying data, with that being said, if there is no data stored in the model and you need to include these constraints and validators, IT IS OKAY to undo the db:migrate and then re run the db: migrate

### How to undo a migrate?
- `npx sequelize-cli db:migrate:undo` 
This will undo the most recent migration if you want to undo all migrations append `:all` to the line above. After you do this, you will DESTROY all existing data and then run the migrations again, this may not be big deal if there are no data existing in your model yet. 

### How to add a column?
Okay, so what happens if you forgot to add an entire column, that’s easy. You create a migration for the sole purpose. The migration file that is created from this will look a bit different form the migrations file that is created when you first create a model. In this file, you will see something about up and down. It is better if you just refer to this [link](https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527) on how to add a column. 

### What is association?
Inside of your model file you will have a section that has `static associate(models)` Here, is where you will define any relationships between models. THE POINT of doing this is to be blessed with special methods. You are also noting the foreignKey that will be used between the two tables. 

An example of a special method is
- `user.createTransaction({name, amount})` OR
```
const { friendID } = req.params
    const { name, age, species } = req.body

    const friend = await Friend.findByPk(friendID)
    friend.createPet({ name, age, species })
```

### What are references?
So doing the above will provide special methods, but you aren’t really establishing a relationship between two tables, of course you are inserting information that coincides between two tables but you are not really defining a relationship. You can see this in beekeeper, before doing this, the FK is just a column but if you look at the PK you will see a blue key icon, which the db understands as the PK.

Now doing this references step you may want to do this in the same step as when you are defining constraints and validators. I believe that it is best done during that step so that that information will be able to migrate. If you create a new column then you can include this references there because it is a new migration / new column

```
  "Pets", // model name
  "FriendId", // attribute name
  {
    type: Sequelize.DataTypes.INTEGER,
    references: {
      model: "Friends", // target model
      key: "id" // target key
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
  }
)

```
The references will look like this. This snippet is taken out of a new column migration, which is why you see the first two arguments as the model name, attribute name

The model in the object that you set to references is the model in which the originated key comes from. In this case, FriendId is the id key of Friend in the Friends model. 

It is important to note that the snippet shows the syntax of when you are creating a new column, if you do not need to create a new column, then your model should already include the attribute that you wish to set up as a reference. At this point you will just follow the references syntax. 