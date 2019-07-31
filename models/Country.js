const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const CitySchema = new Schema({ capitalcity: 'string' });

const CountrySchema = new Schema({
    name: {
        type: String
    },
    country: {
        type: String
    },
    capital: CitySchema,  
    subregion: {
        type: String
    }
});

module.exports = mongoose.model('CitySchema', CitySchema);
