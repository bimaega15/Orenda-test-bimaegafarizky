const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  index,
  createData,
  updateData,
  deleteData,
  getById,
} = require("./controller");

let formValidation = [
  body("name").notEmpty().withMessage("Name is required").trim(),
  body("unit").notEmpty().withMessage("Unit is required").trim(),
  body("price").notEmpty().withMessage("Price is required").trim(),
];

router.route("/").get(index).post(formValidation, createData);
router.route("/:id/getById").get(getById);
router.route("/:id/update").put(formValidation, updateData);
router.route("/:id/delete").delete(deleteData);

module.exports = router;
