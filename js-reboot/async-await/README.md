# Async Await
- - - -
Refer to Promises before trying to understand.

Javascript is a single thread language, this means that it will run your code synchronously how it is written (there is scenario where you can call a function before it is defined in your file order but that isn’t the issue here). 

Let’s say a user wants to retrieve something from a database of yours on your webpage, you do not want the webpage to be slowly rendered or this retrieval of information to interrupt the flow of the webpage so you can use promises in order to deal with that. Async await is basically using promises but it is syntactic sugar that will make it easier to read. 

Similarly in Promises how you declare a function which will return a Promise with async await you will declare a function and then use the keyword `async` before the function declaration. In this case, I have wrote out new Promises globally then call them within my doSomething() to make it easier to read. 


### Summarization 
Async await is crucial to js because it allows the developer to write programs that can perform asynchronous tasks. If a user wanted to download something from your website, you would not want the whole website to be paused to do this one task, you can define a function using the keyword **async** and inside of the code block you use the keyword **await**. When js runs your program and sees this keyword, it will continue on with the code of the script and when that line of code with the **await** is complete, it will return to finish what it needs to do. 

It seems like the most practical use it do this inside of functions hence async await, because it is basically promises, but using keywords to perform a similar action. 

Another advantage of using async await is that you can write your code in a synchronous manner…

```js
const response = await fetch(url);
const db = await response.json()
```
You could do something like this where you assign the data that is returned from the fetch into a variable and then call .json on it. Note that you do need **await** for both lines of code.