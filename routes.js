// import express
const express = require('express')
// import productController
const productController = require('./controller/productController')
// import usercontroller
const usercontroller = require('./controller/userController')
// import wishlistcontroller
const wishlistController = require('./controller/wishlistController')



const router = new express.Router()

// path to get all product
router.get(`/all-product`,productController.allproductController)


// path to get a particular product
router.get('/product/:id',productController.getAProductController)

// path to register a user
router.post('/register',usercontroller.registerController)

// path to login user
router.post('/login', usercontroller.loginController)

// path to add wishlist item
router.post('/add-wishlist',usercontroller.addToWishlistController)

module.exports = router