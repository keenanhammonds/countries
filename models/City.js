const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    Name: {
        type: String
    },
    Country: {
        type: String
    },
    timeZone: {
        type: String

    }
});

module.exports = mongoose.model('CitySchema', CitySchema);
