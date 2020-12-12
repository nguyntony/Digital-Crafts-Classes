# Async Await
- - - -
Refer to Promises before trying to understand.

Javascript is a single thread language, this means that it will run your code synchronously how it is written (there is scenario where you can call a function before it is defined in your file order but that isn’t the issue here). 

Let’s say a user wants to retrieve something from a database of yours on your webpage, you do not want the webpage to be slowly rendered or this retrieval of information to interrupt the flow of the webpage so you can use promises in order to deal with that. Async await is basically using promises but it is syntactic sugar that will make it easier to read. 

Similarly in Promises how you declare a function which will return a Promise with async await you will declare a function and then use the keyword `async` before the function declaration. In this case, I have wrote out new Promises globally then call them within my doSomething() to make it easier to read. 