const express = require('express');
const userController = require('./App/Controller/userController');


const router = express.Router();

// Crud
router.post('/store', userController.create);
router.get('/index', userController.read);
router.put('/update/:id', userController.update);
router.delete('/delete/:id', userController.delete);

module.exports = router;