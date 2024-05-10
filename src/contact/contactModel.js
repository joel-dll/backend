const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
}, {
    timestamps: true
});

module.exports = mongoose.model('test1', ContactSchema);