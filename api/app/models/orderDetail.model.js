const { DataTypes, Deferrable } = require("sequelize");
const sequilize = require("../config/db");
const Order = require("./order.model");
const Product = require("./product.model");

const OrderDetail = sequilize.define(
  "orderdetail",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Order,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    qty: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.DOUBLE,
    },
    typediscount: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = OrderDetail;
