const { validationResult } = require("express-validator");
const Product = require("../../../models/product.model");

const index = async (req, res) => {
  try {
    let data = await Product.findAll();
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

    const { name, unit, price } = req.body;
    let insertData = await Product.create({
      name,
      unit,
      price,
    });

    if (insertData) {
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

    const { name, unit, price } = req.body;
    const { id } = req.params;

    let dataUpdate = await Product.update(
      {
        name,
        unit,
        price,
      },
      {
        where: {
          id,
        },
      }
    );

    if (dataUpdate) {
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
    let dataDelete = await Product.destroy({
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
    let data = await Product.findOne({
      where: {
        id: id,
      },
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
