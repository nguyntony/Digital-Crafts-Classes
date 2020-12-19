

## Adding a Foreign Key to an existing table

- modify the model
- create the migration
- modify the migration (specifying the table and new column for FK)

### Modify the model

Manually add an `INTEGER` field to the model:

```js
  Album.init({
      title: DataTypes.STRING,
      artistId: DataTypes.INTEGER
  }, {

```

### Create the migration

```sh
npx sequelize-cli migration:generate --name adds-artistid-to-albums
```

### Modify the migration

Edit the `migrations/20201216183620-adds-artistid-to-albums.js` (Your filename will be different).

In the `up` function, add a call to `addColumn()`:

```js
      return queryInterface.addColumn(
          'Albums',    // What table are we modifying?
          'artistId',  // What column are we adding?
          {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: 'Artists', // What table do we point to?
                  key: 'id'
              }
          }
      );
```

### Run the migration

```sh
npx sequelize-cli db:migrate
```

