# dotenv
- - - -
**Summary of the process** 
You can use the `dotenv`  module to hide sensitive information. In your app you will have a `.env` file that will be git ignored because that is where the private information will be. In another file named, `dist.env` this is a file that will have the variables names of the private information, this is how your project will be able to access these values without having it public. In your `index.js` file you will have this line at the very beginning `require("dotenv").config()` and now we need to set up another file so that Sequelize will be able to access that data and you will do that by creating a `.sequelizerc` file and in the file you will have …

```sh
'use strict';

require('dotenv').config();    // don't forget to require dotenv
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js'),
  'models-path': path.resolve('models'),
  'seeders-path': path.resolve('seeders'),
  'migrations-path': path.resolve('migrations'),
};
```

Notice how the config says to go to `config.js` so in your config directory you will have a file with that name and the contents will be

```js
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
        host: process.env.DB_HOST,
    dialect: 'postgres',
  }
};
```

After you do this

Make sure you go to the `index.js` in the `models` directory and change the require() config.json to config.js