const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const CountrySchema = new Schema({
    name: {
        type: String,
        sparse: true
    },
    region: {
        type: String,
        sparse: true
    },
    subregion: {
        type: String,
        sparse: true
    },
    population: {
        type: Number,
        sparse: true
    },
    currencies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Currency"
        }
    ]
});

module.exports = mongoose.model('Country', CountrySchema);
