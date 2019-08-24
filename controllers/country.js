const country = require('../models/Country');

module.exports = {
    index: (req, res) =>{
        Country.find({})
            .then(person => res.json(person))
    },
    create: (req, res) => {
        Country.create(req.body)
            .then(country => res.json(country))
    },
    update: (req, res) => {
        Country.fndOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        }).then(country =>  res.json(country));
    },
    destroy: (req, res) => {
        Country.findOneAndRemove(req.params.id)
            .then(country => res.json(country))
    }

}