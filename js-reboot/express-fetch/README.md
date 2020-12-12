# Fetch
- - - -
To understand how fetch works, I am using a [Rick & Morty API](https://rickandmortyapi.com/api/character/) to use alongside with express in order to display data to a webpage. 

### Installation
Node does not have fetch readily available for you to use, you need to install the node-fetch module and require it in your project in order to user fetch.
* `npm i node-fetch`
* `const fetch = require("node-fetch")`


### Using fetch
With fetch, the first argument that you pass is the url. There is some more advance stuff that fetch can do when you pass a second argument which would be an object and you can set a method type. But for this exercise, I did not do that (something to explore in the future) 

```js
fetch("url-link-path")
	.then(res => res.json())
	.then(data => console.log(data))
```

Fetch returns a promise and in this case it is a response object, because it is a promise we can use .then(). Note how that I am using .json() because the API returns json data which isn’t readable by the browser, we need to use .json() in order for it to transform to something that is readable. After that I then chain the res object to another .then() which will now reference that object as data. 