const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    Name: {
        type: String
    },
    Country: {
        type: String
    },
    tracks: {
        type: Schema.Types.ObjectId,
        ref: "Track"
    }
});

module.exports = mongoose.model('ArtistSchema', ArtistSchema);
