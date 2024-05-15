// Import the 'mongoose' library to interact with MongoDB.
const mongoose = require('mongoose');

// Access the Schema constructor from the mongoose object to define a new schema.
const Schema = mongoose.Schema;

// Define a new schema for 'contact' with structure and validation rules.
const contactSchema = new Schema({
    name: {
        type: String,        // Specify the data type for 'name' as a string.
        required: true       // Make the 'name' field mandatory.
    },
    email: {
        type: String,        // Specify the data type for 'email' as a string.
        required: true       // Make the 'email' field mandatory.
    },
    message: {
        type: String,        // Specify the data type for 'message' as a string.
        required: true       // Make the 'message' field mandatory.
    }
}, { timestamps: true });    // Enable automatic creation of 'createdAt' and 'updatedAt' fields.

// Export the model, named 'Contact', based on the defined schema so it can be used in other parts of the application.
module.exports = mongoose.model('Contact', contactSchema);
