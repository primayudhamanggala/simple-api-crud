const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/primayudha')

const foods = require('./routes/food')
const restaurants = require('./routes/restaurant')

app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/foods', foods)
app.use('/api/restaurants', restaurants)

app.listen(3000, () => {
  console.log('Live');
})
