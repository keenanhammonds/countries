const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    capital: {
        type: String
    },
    regiion: {
        type: String
    },
    currency: {
        type: String
    }
});

module.exports = mongoose.model('CountrySchema', CountrySchema);