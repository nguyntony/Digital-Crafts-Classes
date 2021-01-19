# Frontend React Prep 
#react

## Python Server
Instead of using live server you can actually run this line of code inside of the project directory `python3 -m http.server {portNumber}` (ie. portNumber is like 3000 or 3003)

This method uses python and it is acting like a server. Python has access to these files in the project directory. This is similar to when you are using express/node and you have `server.listen` at the end of the script, python eliminates this step because it is always listening and you can refresh the browser which will show the changes. 

**Note** Using this method, it is assumed that your .html file that you wish to host is named ‘index.html’

## API 
* It may be nice to use Postman alongside with your API because the api will return JSON data and by using Postman you will be able to see the data better as opposed to a bunch of text with no linebreaks

#### How to use Postman
![](frontend-prep/Screen%20Shot%202021-01-19%20at%2012.09.29%20PM.png)
1. Create a new tab
2. Paste the url from the api into the postman url sections
3. Click on headers
4. Add ‘Accept’ as the Key
5. Add ‘application/json’ as the value 