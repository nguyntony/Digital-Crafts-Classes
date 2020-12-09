# Middleware
#express
- - - -
Middleware are basically functions that are used in the middle of the request and response. In express…everything is considered middleware. A piece of middleware can modify the request and/or the response.


It is important to note that req is an object, so that means you can create a new key/value pair for the request object.
```js
req.stuff = "hi i'm stuff"
```
You can actually do this inside of one middleware and they are connect then that req.stuff will be able to use in the next middleware. 


### Request Response Cycle
For every incoming request, express is preparing a response, this cycle happens A LOT on your webpage. 


### req.session
Each time a visitor is on your website they will have their own “session” and the session object will likely have 
```js
req.session.user = {
	id: 12345,
	username: "nguyntony",
	needsPasswordReset: true
}
```
We will be install a node module that will handle this “session” for us. 


### app.use()
app.use can accept a route path and middleware, if you want to use the middleware on every page you can omit the route path. This reads like “use this middleware on X path.” Once again, if you omit the route path (ie. Not including one) you will use that middleware on every page of your website, if a route path is given, it will match that route path and it will only use that middleware for that route path. 

With middleware is does a “fuzzy” match on the url path. “Fuzzy” matching is another term for regular expressions or regex which is string matching.

app.use will be placed before our app.get


### req.url
This is the property for the url path of the request object, so the homepage will be localhost “/“, the backslash if the req.url 


### req.method
This is the property that describes whether the method is GET or POST (?)


### Morgan
What does Morgan do? Every time someone access the path that matches with the logger (in this case we are using it in **all cases** when someone accesses any pages on our website) When using Morgan in this way, in our (server-side console) we will see the GET {path} 200 - - 0.371 ms


1. `npm i morgan`
2. `const morgan = require("morgan")`
3. `const logger = morgan("tiny")`
4. `app.use(logger)`


**Quick lesson on status codes**
* 200: OK
* 304: the browser is getting the data from a cached resource
* 404: page not found (the user is asking for something that does not exist)(
* 5XX: there is an error in the program, the developer needs to fix it


### Helmet











