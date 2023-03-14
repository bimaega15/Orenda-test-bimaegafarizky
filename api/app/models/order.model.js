const { DataTypes, Deferrable } = require("sequelize");
const sequilize = require("../config/db");
const Customer = require("./customer.model");
const moment = require("moment");

const Order = sequilize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    noinvoice: {
      type: DataTypes.STRING,
    },
    datetransaction: {
      type: "TIMESTAMP",
      get() {
        let datetransaction = this.getDataValue("datetransaction");
        let varMoment = datetransaction;
        if (varMoment != null) {
          varMoment = moment(this.getDataValue("datetransaction")).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
        return varMoment;
      },
    },
    total: {
      type: DataTypes.DOUBLE,
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    typediscount: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Customer,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
    finaltotal: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Order;
