# Promises
- - - -
BEFORE trying to understand async await, make sure you have an understanding of promises first.

Promises are good for a situation where you may take some time doing an action that you don’t have the user to wait for. If you wanted to download an image from a  server, you wouldn’t want your entire code/program to wait for that single action you can use promises to have it done in the background and continue to have your program run.

Promises are meant to replace callbacks so how can we use them to do that? In the `secondLesson.js` file you will see that we have a function which will use callbacks and below we will turn that into the same function but using promises instead.

