const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/', userController.createNewUser)
router.delete('/:id', userController.deleteUser)

module.exports = router