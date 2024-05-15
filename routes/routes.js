// Import the 'express' module to use its functionalities for building web apps and APIs.
var express = require('express');

// Create a router object from Express to handle routing of requests.
const router = express.Router();

// Import the user controller to handle requests related to user operations.
var userController = require('../src/user/userController');

// Import the contact controller to handle requests related to contact operations.
var contactController = require('../src/contact/contactController');

// Import the student controller to handle requests related to student operations.
var studentController = require('../src/student/studentController');



// Define a route to handle GET requests for fetching all users using the user controller's function.
router.route('/user/getAll').get(userController.getDataConntrollerfn);

// Define a route to handle POST requests for creating a new user using the user controller's function.
router.route('/user/create').post(userController.createUserControllerFn);

// Define a route to handle PATCH requests for updating an existing user by their ID using the user controller's function.
router.route('/user/update/:id').patch(userController.updateUserController);

// Define a route to handle DELETE requests for deleting a user by their ID using the user controller's function.
router.route('/user/delete/:id').delete(userController.deleteUserController);

// Define a route to handle POST requests for creating a new contact using the contact controller's function.
router.route('/contact').post(contactController.createContact);


// Export the router object so it can be used by other parts of the application.
module.exports = router;
