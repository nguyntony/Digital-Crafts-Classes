# Hello Express!
#express


### Where to start
- - - -
1. Create directory for your project
2. `cd {directory}`  Go into that directory
3. `npm init -y`  This will create a package.json file in your directory.
4. In this package.json file, this is where you can configure certain things but it will also serve as a map to let the user know what dependencies there are, etc.


### Installing Modules
- - - -
1. `pwd`  Make sure that you are in the desired directory
2. `npm i {module_name}`  this will create a node_modules folder in your directory
3. IMPORTANT! make sure you create a .gitignore file and add node_modules to that file, you do not want to push this folder onto GitHub!!!


### Installing Nodemon (Module)
- - - -
Nodemon is an express module 
1. `pwd`  Make sure that you are in your desired directory
2. `npm install nodemon --save-dev`  this will install nodemon just inside of your directory and will add it to the dev dependencies inside of your package.json file

What does that mean? This is different from installing express because our app runs using express so this will install nodemon in a way that will not install nodemon alongside the initial install when someone tries to install our app. Express is crucial for our app and nodemon is a nice tool but our app does not depend on nodemon to run. However, if they look into our package.json file they will see that we did use nodemon. 
