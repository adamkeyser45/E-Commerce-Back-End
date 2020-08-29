const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
  //   // define columns
  //   * `id`
  //   * Integer
  //   * Don't allow null values
  //   * Set as primary key
  //   * Use auto increment

  // * `tag_name`
  //   * String
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
