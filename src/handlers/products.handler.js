const productService = require("../services/products.services");

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

const getProductById = (req, res) => {
  const product = productService.getProductById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

const createProduct = (req, res) => {
  const product = productService.createProduct(req.body);
  res.status(201).json(product);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
