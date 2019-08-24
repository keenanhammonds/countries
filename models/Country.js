const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const CountrySchema = new Schema({
    name: String,
    region: String,
    population: Number,
    currencies: Array
});

module.exports = mongoose.model('Country', CountrySchema);
