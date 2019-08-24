const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const Currency = require('./Country.js')


const CountrySchema = new Schema({
    name: String,
    region: String,
    population: Number,
    currency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Currency'
    }
});

module.exports = mongoose.model('Country', CountrySchema);
