// { "code": "XCD", "name": "East Caribbean dollar", "symbol": "$" }
const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
    currencies: Array
})

module.exports = mongoose.model('Currency', CurrencySchema);
