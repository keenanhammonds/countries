const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/music", {
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.Promise = Promise;

module.exports = mongoose;