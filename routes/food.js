const express = require('express');
const router = express.Router()
const foodController = require('../controllers/food')

router.post('/', foodController.createFood)

router.get('/', foodController.getAllFood)

router.get('/:id', foodController.getOneFood)

router.put('/:id', foodController.updateFood)

router.delete('/:id', foodController.deleteFood)

module.exports = router;
