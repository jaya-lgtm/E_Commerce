const orderService = require("../services/order.services");

const getAllOrders = (req, res) => {
  const orders = orderService.getAllOrders();
  res.json(orders);
};

const createOrder = (req, res) => {
  const order = orderService.createOrder(req.body);
  res.status(201).json(order);
};

module.exports = {
  getAllOrders,
  createOrder,
};
