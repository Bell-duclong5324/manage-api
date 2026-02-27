const Product = require("../models/models-api");

exports.createProduct = async (data) => {
  return await Product.create(data);
};

exports.getAllProducts = async () => {
  return await Product.find();
};
exports.updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};