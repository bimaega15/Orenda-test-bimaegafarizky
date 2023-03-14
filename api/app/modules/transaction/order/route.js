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
  body("noinvoice").notEmpty().withMessage("No. Invoice is required").trim(),
  body("total")
    .notEmpty()
    .withMessage("Total is required")
    .trim()
    .isNumeric()
    .withMessage("Total must decimal"),
  body("discount").trim().isNumeric().withMessage("Discount must decimal"),
  body("customer_id").notEmpty().withMessage("Customer is required").trim(),

  body("product_id").notEmpty().withMessage("Product is required").trim(),
  body("qty").notEmpty().withMessage("Qty is required"),
];

router.route("/").get(index).post(formValidation, createData);
router.route("/:id/getById").get(getById);
router.route("/:id/update").put(formValidation, updateData);
router.route("/:id/delete").delete(deleteData);

module.exports = router;
