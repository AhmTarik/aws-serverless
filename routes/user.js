const express = require('express');
const {userController} = require('../controllers/index');
const router = express.Router();

// user auth
router.post('/users/', userController.create);
router.get('/users/:userId', userController.get);
router.patch('/users/:userId', userController.update);


module.exports = router;