1. Suppose you have an express app that serves a page that shows a list of pet names.
   Draw a diagram showing the Request/Response cycle.

When the user goes to your website, they must first navigate to the route that will have the pet names. They can navigate to the URL by a link or button that you may have on your website or they could manually type it in the address bar. Once the link matches the route in your express app it will trigger a request to grab this data/information, your app will handle the request then return a response with the html/data.

2. On the diagram, show which parts are the Model, View, and Controller.

The model can be a .json file that is in a models dir and it will have the data of your pets such as their names or breed.
The view will be the browser, so in this instance it could be a html file in a templates dir
The controller will be the actual route handling that you wrote for your script...

```js
app.get("/petnames", (req, res) => {
    res.render("petnames", {
        locals: {
            pets,
        },
    });
});
```
