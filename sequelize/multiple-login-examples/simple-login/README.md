
## Install the `bcryptjs` node module

```sh
npm i bcryptjs
```

## Ensure username is unique

From https://sequelize.org/master/manual/validations-and-constraints.html


Edit the migration and make sure that the username must be unique in your database.
In addition, ensure that they must have a value (`allowNull: false`).

```js
      username: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },
      hash: {
          type: Sequelize.STRING,
          allowNull: false
      },
```

## Generate a hash from the password

```js
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

```

## Get the user by their username

```js
    const user = await User.findOne({
        where: {
            username
        }
    });
```

## Ask bcrypt to check a password against a hash


```js
        const isValid = bcrypt.compareSync(password, user.hash);
```
