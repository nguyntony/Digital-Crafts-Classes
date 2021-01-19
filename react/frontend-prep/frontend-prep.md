# Frontend React Prep 
#react

## Python Server
Instead of using live server you can actually run this line of code inside of the project directory `python3 -m http.server {portNumber}` (ie. portNumber is like 3000 or 3003)

This method uses python and it is acting like a server. Python has access to these files in the project directory. This is similar to when you are using express/node and you have `server.listen` at the end of the script, python eliminates this step because it is always listening and you can refresh the browser which will show the changes. 

**Note** Using this method, it is assumed that your .html file that you wish to host is named ‘index.html’

## API 
* It may be nice to use Postman alongside with your API because the api will return JSON data and by using Postman you will be able to see the data better as opposed to a bunch of text with no linebreaks. Postman formats the data so that it is easily readable.

#### How to use Postman
![](frontend-prep/Screen%20Shot%202021-01-19%20at%2012.09.29%20PM.png)
<img src='https://github.com/nguyntony/class/blob/master/react/frontend-prep/img-notes/postman.png' width='500'>
1. Create a new tab
2. Paste the url from the api into the postman url sections
3. Click on headers
4. Add ‘Accept’ as the Key
5. Add ‘application/json’ as the value 

#### Using APIs
1. Make the request using fetch() 
2. Grab the ‘joke’, however you will because it is an object
3. Render the joke onto the page

#### Using fetch()
1. Invoke fetch
2. Chain .then after invoking fetch(); what is returned after calling fetch is a response, you would want to pass ‘response’ as an arg and return `response.json()`

You are able to see what is returned by going to the ‘inspect’ > ‘network’ > ‘{url}’ > ‘response’
3. Chain another .then and the expected output is data, you will pass another callback fn and you will can do something with that data. 

#### How to specify headers with fetch
When you are using fetch, the first argument is the url and you may pass a second argument which is an object. One of the properties for that project is the ‘headers’ key which the value is also another object
<img src='https://github.com/nguyntony/class/blob/master/react/frontend-prep/img-notes/fetch-header.png' width='500'>


## Callback 
#### What is it? 
It is an argument that is a function. It does not have to be an arrow fn and it will be anon sometimes. 

Callback functions are passed as arguments for other functions 


## Promises
#### What is it?
It’s an object 
- with a .then(); what you pass into the .then() is a callback fn but the expected argument is the response, the response is a response object that has information about the response (ie. Headers, 
- with a .catch(); what you pass into the .catch() is another callback fn but the expected argument that the callback fn will receive is an error
- for the callback fn that we pass into the .then() and .catch() we are passing anon functions in our code.





