// importing required files and packages
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Category extends Model {}
// defining columns
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
