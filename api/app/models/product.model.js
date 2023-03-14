const { DataTypes } = require("sequelize");
const sequilize = require("../config/db");

const Product = sequilize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    unit: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Product;
