// Import the ContactService module which contains logic for database operations related to contacts.
const ContactService = require('./contactService');

// Export the 'createContact' function to make it available for import in other files.
exports.createContact = async function(req, res) {
    try {
        // Extract contact details from the request body and store them in an object.
        const contactData = {
            name: req.body.name,        // Get the name from the request body.
            email: req.body.email,      // Get the email from the request body.
            message: req.body.message   // Get the message from the request body.
        };

        // Call the 'addContact' method from the ContactService to add the contact data to the database.
        // Await is used to wait for the Promise from addContact to resolve.
        const result = await ContactService.addContact(contactData);

        // If the contact is successfully added, send a 201 HTTP status code and the result.
        res.status(201).send(result);
    } catch (error) {
        // If an error occurs, catch the exception and send a 500 HTTP status code and error message.
        res.status(500).send({ message: "Some error occurred while creating the contact.", error: error.message });
    }
};
