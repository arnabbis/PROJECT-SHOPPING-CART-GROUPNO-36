const express = require('express');
const mongoose = require("mongoose")
const router = express.Router();
const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const cartController = require("../controllers/cartController")
const orderController = require('../controllers/orderController')
const mid = require('../middleware/auth')

//================================USER===================================


router.post("/register", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/user/:userId/profile", mid.authentication, userController.getUser)
router.put("/user/:userId/profile", mid.authentication, userController.userUpdate)


//============================PRODUCT====================================


router.post("/products", productController.createProduct)
router.get("/products/:productId", productController.getProductDetails)
router.put("/products/:productId", productController.updateTheProduct)
router.delete("/products/:productId", productController.productDelete)
router.get("/products", productController.productsDetails)

// =============================CART====================================


router.post("/users/:userId/cart", cartController.createCart)
router.put("/users/:userId/cart", cartController.updateCart)
router.get("/users/:userId/cart", cartController.getCart)
router.delete("/users/:userId/cart", cartController.deleteCart)


//==============================ORDER=====================================


router.post("/users/:userId/orders", orderController.createOrder)
router.put("/users/:userId/orders", orderController.updateOrder)


//========================================================================


module.exports = router