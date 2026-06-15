const express = require("express");
const router = express.Router();
const ordersController = require("../handlers/orders.handler");

router.get("/", ordersController.getAllOrders);
router.post("/", ordersController.createOrder);

module.exports = router;
