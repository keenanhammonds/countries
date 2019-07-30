const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/music", {
    useNewUrlParser: true,
    useFindAndModify: false
});

module.exports = mongoose;