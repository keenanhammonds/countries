const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    name: {
        type: String
    },
    releaseData: {
        type: String
    }
});

module.exports = mongoose.model('AlbumSchema', AlbumSchema);