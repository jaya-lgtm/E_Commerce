const { products } = require("../models/products.models");
let nextProductId = 1;

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === Number(id));
};

const createProduct = (data) => {
  const product = {
    id: nextProductId++,
    name: data.name || "Untitled product",
    price: data.price || 0,
    description: data.description || "",
  };
  products.push(product);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
