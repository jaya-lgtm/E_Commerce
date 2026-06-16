const orderService = require("../services/order.services");

const getAllOrders = (req, res) => {
  const orders = orderService.getAllOrders();
  res.json(orders);
};

const createOrder = (req, res) => {
  const order = orderService.createOrder(req.body);
  res.status(201).json(order);
};

const getOrderById = async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  res.json(order);
};

const deleteOrder = async (req, res) => {
  const order = await orderService.deleteOrder(req.params.id);
  res.json(order);
};

module.exports = {
  getAllOrders,
  createOrder,
  getOrderById,
  deleteOrder
};
