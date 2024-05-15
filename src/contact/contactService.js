// Import the Contact model from the 'contactModel' file for database operations.
const Contact = require('./contactModel');

// Define a class named ContactService to encapsulate methods related to contact data operations.
class ContactService {
    // Declare a static method 'addContact' that can be called on the class itself, not on an instance of the class.
    static async addContact(contactData) {
        try {
            // Create a new instance of the Contact model with the provided data.
            const contact = new Contact(contactData);

            // Save the new contact instance to the database; 'await' pauses execution until the promise resolves.
            await contact.save();

            // Return a success status and message along with the saved contact data if save operation is successful.
            return { success: true, message: 'Contact saved successfully', data: contact };
        } catch (error) {
            // Log an error message to the console if the save operation fails.
            console.error('Error saving contact:', error);

            // Throw a new error indicating that the contact could not be saved.
            throw new Error('Unable to save contact');
        }
    }
}

// Export the ContactService class so it can be imported and used in other files.
module.exports = ContactService;
