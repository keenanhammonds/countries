const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    Name: {
        type: String
    },
    Country: {
        type: String
    }
});

module.exports = mongoose.model('ArtistSchema', ArtistSchema)
