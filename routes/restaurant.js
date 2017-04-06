const express = require('express');
const router = express.Router()
const restaurantController = require('../controllers/restaurant')

router.post('/', restaurantController.createRestaurant)

router.get('/', restaurantController.getAllRestaurant)

router.get('/:id', restaurantController.getOneRestaurant)

router.put('/:id', restaurantController.updateRestaurant)

router.delete('/:id', restaurantController.deleteRestaurant)

module.exports = router;
