const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let restaurantSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  owner: String,
  address: String,
  open_status: Boolean,
  menu: [{
    type: Schema.Types.ObjectId,
    ref: 'Food'
  }]
})

let Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant;
