const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/countries", {
    useNewUrlParser: true,
    useFindAndModify: false
});

mongoose.Promise = Promise;

module.exports = mongoose;