const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    username: {type: String, required: true},
    meal: {type: String, required: true},
    food: {type: String, required: true},
    calories: {type: Number, required: true}
},{
    timestamp: true,
});


const Food = mongoose.model('Food', foodSchema);

module.exports = Food;