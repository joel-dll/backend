// Import the 'mongoose' package, which provides a straightforward way to model your application data with MongoDB.
var mongoose = require('mongoose');

// Access the Schema constructor from the mongoose package, which allows you to define the structure of the database documents.
var Schema = mongoose.Schema;

// Define a new schema called 'userSchema' with specific fields and validation rules.
var userSchema = new Schema({
    name: {
        type: String,        // Define 'name' as a field of type String.
        required: true       // Make the 'name' field mandatory.
    },
    age: {
        type: String,        // Define 'age' as a field of type String. Note: consider using type Number if age is stored as a number.
        required: true       // Make the 'age' field mandatory.
    },
    parentcontact: {
        type: String,        // Define 'parentcontact' as a field of type String.
        required: true       // Make the 'parentcontact' field mandatory.
    },
    allergies: {
        type: String,        // Define 'allergies' as a field of type String.
        required: true       // Make the 'allergies' field mandatory.
    },
    specialnotes: {
        type: String,        // Define 'specialnotes' as a field of type String.
        required: true       // Make the 'specialnotes' field mandatory.
    }
    
});

// Export the model based on 'userSchema' under the name 'solent_nurseries'. This model will interact with the 'solent_nurseries' collection in MongoDB.
module.exports = mongoose.model('solent_nurseries', userSchema);
