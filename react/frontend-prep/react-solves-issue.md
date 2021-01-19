# React
#react

## What problem does React solve?
Imagine Facebook, how when your friends are online, you are able to see a green dot by their name but if they go offline, you now see a red dot by their name. 

You could have conflicting user information when it is supposed to be in sync. Your Facebook dashboard will have a feed, a chat window and a friends list. Back in the day, each widget will make multiple fetch calls for the same data. 
![Facebook React](https://github.com/nguyntony/class/blob/master/react/frontend-prep/img-notes/fb-react.png)

**Sidenote** A browser may be only handle 12 ajax requests simultaneously	. 

With react, you are able to have these widgets inside of a parent container that will handle the fetch call (perhaps even 2) and then what is returned is an object with a bunch of keys (a single source of truth).

The widgets will be able to grab information from the master fetch call and this is a better way to efficiently update ui (this will result in less cpu, which means less battery consumption)

You will have functions that receive some data from the fetch return object and it will render information 
