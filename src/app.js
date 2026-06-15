const express = require("express");
const app = express();

app.use(express.json());

const productsRouter = require("./routes/products.routes");
const ordersRouter = require("./routes/orders.routes");

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

module.exports = app;
