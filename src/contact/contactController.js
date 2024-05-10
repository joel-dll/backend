const mongoose = require('../../server').mongoose;

// Assuming a Contact model is already defined in the models folder
var Contact = require('./contactModel');

exports.createContact = function(req, res) {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newContact.save(function(err) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while creating the contact." });
        } else {
            res.send({ message: "Contact successfully created!" });
        }
    });
};
