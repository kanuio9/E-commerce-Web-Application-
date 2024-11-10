const express = require("express");

const router = express.Router();

const productController = require("../controllers/product.controller.js");
const authenticate = require("../middleware/authenticate.js");

router.get("/", authenticate, productController.createProduct);
router.get("/creates", authenticate, productController.createMultipleProducts);
router.delete("/:id", authenticate, productController.deleteProduct);
router.put(":/id", authenticate, productController.updateProduct); 

module.exports = router;