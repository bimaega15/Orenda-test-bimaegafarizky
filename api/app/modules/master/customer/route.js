const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { Op } = require("sequelize");
const { Customer } = require("../../../models/index");

const {
  index,
  createData,
  updateData,
  deleteData,
  getById,
} = require("./controller");

let formValidation = [
  body("name").notEmpty().withMessage("Name is required").trim(),
  body("phone").notEmpty().withMessage("Phone is required").trim(),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .trim()
    .isEmail()
    .withMessage("Invalid e-mail"),
];

router
  .route("/")
  .get(index)
  .post(
    formValidation,
    body("email").custom(async (value, meta) => {
      let checkEmail = await Customer.count({
        where: {
          email: value,
        },
      });
      if (checkEmail > 0) {
        return Promise.reject("Email already in use");
      }
    }),
    createData
  );
router.route("/:id/getById").get(getById);
router.route("/:id/update").put(
  formValidation,
  body("email").custom(async (value, meta) => {
    const { id } = meta.req.params;
    let checkEmail = await Customer.count({
      where: {
        email: value,
        id: {
          [Op.not]: id,
        },
      },
    });
    if (checkEmail > 0) {
      return Promise.reject("Email already in use");
    }
  }),
  updateData
);
router.route("/:id/delete").delete(deleteData);

module.exports = router;
