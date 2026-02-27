const express = require("express");
const router = express.Router();
const productController = require("../controller/controller-api");

router.post("/", productController.create);
router.get("/", productController.getAll);

module.exports = router;
router.get("/:id", productController.getById);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);