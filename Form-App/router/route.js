const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createNewUser)

module.exports = router