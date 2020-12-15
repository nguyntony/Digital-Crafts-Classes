# ElephantSQL
- - - -
This is a service that holds databases on AWS server (that is the server that they use), their livelihood is based on security.

1. Create new instance (then specify name and plan)
2. Select region (the default selected region should suffice)
3. Review
4. Confirm

This is walking through the steps to create a new db that elephant is hosting. 

### Sequelize 
This is a JS library that speaks to Postgres

**Steps to install**
Make sure that you’re in the directory that you want to be in.
1. `npm i sequelize pg pg-hstore` (installing the modules)
2. `npm i --save-dev sequelize-cli` (saving the tools)
3. `npx sequelize-cli init` (“this tool knows how to work with this directory”) (cli stands for command line interface)
4. Go to your details page of your instance on elephantsql (you can do this by pressing on the name of your instance on the homepage)
5. “**User & Default database**” will hold the value that we want to put in the config.json as username and database 
6. “**Password**” will hold the value that we want to put in the password, note the password will be a string (the default is null) 
7. “**Server**” will hold the value that we want to put in the host (do not include what is in the parentheses, just the url
8. Insert “postgres” in dialect
9. `npx sequelize-cli model:generate --name ModelName —-attributes keyname:datatype,keyname:datatype`

This will create a new model and new migration. The model is an object that allows method like .create and the migration is a set of instructions to maneuver through the database. 

10. `npx sequelize-cli db:migrate`
11. Import the sequelize model and the model that you created. 
```js
const Sequelize = require("sequelize")
const { ModelName } = require("./models")
```


### Summarization 
The idea is to create a model once and then use it many times and your app may need more models, that is totally fine! You just need to create that model when you need it. 


