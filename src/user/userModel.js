var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    parentcontact: {
        type: String,
        required: true
    },
    allergies: {
        type: String,
        required: true
    },
    specialnotes: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('solent_nurseries', userSchema);