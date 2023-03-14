const Product = require("../../../models/product.model");
const Order = require("../../../models/order.model");
const OrderDetail = require("../../../models/orderDetail.model");
const moment = require("moment");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  try {
    let data = await Order.findAll({
      include: [
        {
          model: OrderDetail,
          include: [
            {
              model: Order,
            },
            {
              model: Product,
            },
          ],
        },
      ],
    });
    if (data) {
      return res.status(200).json({
        status: 200,
        message: "Successfully fetched data",
        result: data,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Failed to fetch data",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "A data error has occurred",
      result: error.message,
    });
  }
};

const createData = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: "Invalid form validation",
        result: errors.array(),
      });
    }

    const {
      noinvoice,
      total,
      discount,
      typediscount,
      customer_id,
      finaltotal,

      product_id,
      qty,
      discountDetail,
      typeDiscountDetail,
    } = req.body;

    let datetransaction = moment().format("YYYY-MM-DD HH:mm:ss");

    let insertData = await Order.create({
      noinvoice,
      datetransaction,
      total,
      discount,
      typediscount,
      customer_id,
      finaltotal,
    });
    let order_id = insertData.id;

    let insertDetail = [];
    let productIdDetail = product_id.split(",");
    for (let i = 0; i < productIdDetail.length; i++) {
      const elementProduct = productIdDetail[i];
      const elementQty = qty.split(",")[i];
      const elementDiscountDetail = discountDetail.split(",")[i];
      const elementTypeDiscountDetail = typeDiscountDetail.split(",")[i];

      insertDetail.push({
        order_id,
        product_id: elementProduct,
        qty: elementQty,
        discount: elementDiscountDetail == "" ? null : elementDiscountDetail,
        typediscount:
          elementTypeDiscountDetail == "" ? null : elementTypeDiscountDetail,
      });
    }

    let createOrderDetail = await OrderDetail.bulkCreate(insertDetail);

    if (insertData || createOrderDetail) {
      return res.status(200).json({
        status: 200,
        message: "Successfully insert data",
        result: req.body,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Failed to insert data",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "A data error has occurred",
      result: error.message,
    });
  }
};

const updateData = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 400,
        message: "Invalid form validation",
        result: errors.array(),
      });
    }

    const {
      noinvoice,
      total,
      discount,
      typediscount,
      customer_id,
      finaltotal,

      product_id,
      qty,
      discountDetail,
      typeDiscountDetail,
    } = req.body;
    const { id } = req.params;

    let datetransaction = moment().format("YYYY-MM-DD HH:mm:ss");

    let dataUpdate = await Order.update(
      {
        noinvoice,
        datetransaction,
        total,
        discount,
        typediscount,
        customer_id,
        finaltotal,
      },
      {
        where: {
          id,
        },
      }
    );

    // update detail
    await OrderDetail.destroy({
      where: {
        order_id: id,
      },
    });

    let insertDetail = [];
    let productIdDetail = product_id.split(",");
    for (let i = 0; i < productIdDetail.length; i++) {
      const elementProduct = productIdDetail[i];
      const elementQty = qty.split(",")[i];
      const elementDiscountDetail = discountDetail.split(",")[i];
      const elementTypeDiscountDetail = typeDiscountDetail.split(",")[i];

      insertDetail.push({
        order_id: id,
        product_id: elementProduct,
        qty: elementQty,
        discount: elementDiscountDetail == "" ? null : elementDiscountDetail,
        typediscount:
          elementTypeDiscountDetail == "" ? null : elementTypeDiscountDetail,
      });
    }
    let updateOrderDetail = await OrderDetail.bulkCreate(insertDetail);

    if (dataUpdate || updateOrderDetail) {
      return res.status(200).json({
        status: 200,
        message: "Successfully update data",
        result: req.body,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Failed to update data",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "A data error has occurred",
      result: error.message,
    });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    let dataDelete = await Order.destroy({
      where: {
        id,
      },
    });
    if (dataDelete) {
      return res.status(200).json({
        status: 200,
        message: "Successfully deleted data",
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Failed to delete data",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "A data error has occurred",
      result: error.message,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await Order.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: OrderDetail,
          include: [
            {
              model: Order,
            },
            {
              model: Product,
            },
          ],
        },
      ],
    });
    if (data) {
      return res.status(200).json({
        status: 200,
        message: "Successfully fetched data",
        result: data,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Failed to fetch data",
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: "A data error has occurred",
      result: error.message,
    });
  }
};

module.exports = {
  index,
  createData,
  updateData,
  deleteData,
  getById,
};
