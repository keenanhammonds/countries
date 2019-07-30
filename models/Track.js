const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    title: String,
    Artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist"
    },
    Album: {
        type: Schema.Types.ObjectId,
        ref: "Artist"
    }
});

module.exports = mongoose.model('TrackSchema', TrackSchema);