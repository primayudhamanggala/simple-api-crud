const dbFood = require('../models/food')

module.exports = {
  createFood: (req, res) => {
    dbFood.create(req,body, (err, food) => {
      ((err)) ? res.send(err) : res.send(food)
    })
  },
  getAllFood:(req, res) => {
    dbFood.find({},(err,food) => {
      ((err)) ? res.send(err) : res.send(food)
    })
  },
  updateFood:(req, res) => {
    dbFood.findByIdAndUpdate(req.params.id, req.body, (err,food) => {
      ((err)) ? res.send(err) : res.send(food)
    })
  },
  deleteFood:(req, res) => {
    dbFood.findByIdAndRemove(req.params.id ,(err,food) => {
      ((err)) ? res.send(err) : res.send(food)
    })
  }
}
