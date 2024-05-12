const ContactService = require('./contactService');

exports.createContact = async function(req, res) {
    try {
        const contactData = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
        const result = await ContactService.addContact(contactData);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ message: "Some error occurred while creating the contact.", error: error.message });
    }
};
