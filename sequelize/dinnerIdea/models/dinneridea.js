'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DinnerIdea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DinnerIdea.belongsTo(models.User, {
        foreignKey: "uid",
        onDelete: "CASCADE"
      })
    }
  };
  DinnerIdea.init({
    uid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    recipe: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DinnerIdea',
  });
  return DinnerIdea;
};