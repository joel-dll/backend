const Contact = require('./contactModel');

class ContactService {
    static async addContact(contactData) {
        try {
            const contact = new Contact(contactData);
            await contact.save();
            return { success: true, message: 'Contact saved successfully', data: contact };
        } catch (error) {
            console.error('Error saving contact:', error);
            throw new Error('Unable to save contact');
        }
    }
}

module.exports = ContactService;
