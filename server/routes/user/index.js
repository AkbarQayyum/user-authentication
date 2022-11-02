const express = require('express');
const router = express.Router()
let userController = require('../../controllers/user/index')
let verifyToken = require('../../middlewares/jwt/verify')
router.get('/',userController.getUser)
router.post('/register',userController.postUser)
router.post('/login', userController.loginUser)
router.get('/verify/:token',verifyToken, userController.verifyUsers)
module.exports=router