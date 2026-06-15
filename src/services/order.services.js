const { orders } = require("../models/orders.models");
let nextOrderId = 1;

const getAllOrders = () => {
  return orders;
};

const createOrder = (data) => {
  const order = {
    id: nextOrderId++,
    items: data.items || [],
    total: data.total || 0,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  return order;
};

module.exports = {
  getAllOrders,
  createOrder,
};
