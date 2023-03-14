const Customer = require("./customer.model");
const Product = require("./product.model");
const Order = require("./order.model");
const OrderDetail = require("./orderDetail.model");

Customer.hasMany(Order, {
  foreignKey: "customer_id",
});
Order.belongsTo(Customer, {
  foreignKey: "customer_id",
});

Order.hasMany(OrderDetail, {
  foreignKey: "order_id",
});
OrderDetail.belongsTo(Order, {
  foreignKey: "order_id",
});

Product.hasMany(OrderDetail, {
  foreignKey: "product_id",
});
OrderDetail.belongsTo(Product, {
  foreignKey: "product_id",
});

module.exports = { Customer, Product, Order, OrderDetail };
