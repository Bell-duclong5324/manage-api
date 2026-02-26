const Product = require("../models/models-api");

exports.createProduct = async (data) => {
  return await Product.create(data);
};

exports.getAllProducts = async () => {
  return await Product.find();
};