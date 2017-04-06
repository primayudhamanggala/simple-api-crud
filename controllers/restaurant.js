const dbRestaurant = require('../models/restaurant')

module.exports = {
  createRestaurant:(req, res) => {
    dbRestaurant.create(req.body,(err,restaurant) => {
      ((err)) ? res.send(err) : res.send(restaurant)
    })
  },
  getAllRestaurant:(req, res) => {
    dbRestaurant.find().populate('menu').exec((err,restaurant) => {
        ((err)) ? res.send(err) : res.send(restaurant)
      })
  },
  updateRestaurant:(req, res) => {
    dbRestaurant.findByIdAndUpdate(req.params.id, req.body, (err,restaurant) => {
      ((err)) ? res.send(err) : res.send(restaurant)
    })
  },
  deleteRestaurant:(req, res) => {
    dbRestaurant.findByIdAndRemove(req.params.id,(err,restaurant) => {
      ((err)) ? res.send(err) : res.send(restaurant)
    })
  }
}
