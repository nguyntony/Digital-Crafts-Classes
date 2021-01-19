# Fetch Explanation 
With the script that we have inside of this directory, what are we doing?

1. We made a fetch call which returns a promise and we wrapped this fetch call inside of a function and the keyword `async`. The fetch call will return a promise object and we will await it or we could use .then(). You will need to .json() the returned response object.

2. We made another function that will render the joke, this function will work hand in hand with the fn explained above, so what will that do? 

We are creating an html element and selecting the element in which, where we want to append the child

**Note** You could have this function be async and call the above function above, but we want to modularize it so we will do step 3.

3. Finally we are making another function, this one doesn't have to be async, this function will be for the button on our html page that will select the button and it will have an eventlistener. The callback fn passed as the second argument will be async because this function will make the getJoke() call which means you need to await getJoke(). After that we are going to renderJoke()

4. We also created our very own attribute and we are selecting that in our main fn.