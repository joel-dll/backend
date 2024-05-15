// Import the userService module, which contains functions for interacting with the user database.
var userService = require('./userService');

// Define an asynchronous function to handle GET requests for fetching user data.
var getDataConntrollerfn = async (req, res) => {
    // Await the retrieval of data from the database using the userService.
    var employee = await userService.getDataFromDBService();
    // Send a response with status and the retrieved employee data.
    res.send({ "status": true, "data": employee });
}

// Define an asynchronous function to handle POST requests for creating a new user.
var createUserControllerFn = async (req, res) => {
    // Await the creation of a user in the database and store the status of the operation.
    var status = await userService.createUserDBService(req.body);
    if (status) {
        // If the user is successfully created, send a success response.
        res.send({ "status": true, "message": "User created successfully" });
    } else {
        // If there is a failure in creating the user, send an error response.
        res.send({ "status": false, "message": "Error creating user" });
    }
}

// Define an asynchronous function to handle PATCH requests for updating a user.
var updateUserController = async (req, res) => {
    // Log the user ID and the new data received in the request for debugging.
    console.log(req.params.id);
    console.log(req.body);
    
    // Await the update of a user in the database and store the result.
    var result = await userService.updateUserDBService(req.params.id, req.body);

    if (result) {
        // If the user is successfully updated, send a success response.
        res.send({ "status": true, "message": "User Updated" });
    } else {
        // If there is a failure in updating the user, send an error response.
        res.send({ "status": false, "message": "User Update Failed" });
    }
}

// Define an asynchronous function to handle DELETE requests for deleting a user.
var deleteUserController = async (req, res) => {
    // Log the user ID for debugging.
    console.log(req.params.id);
    // Await the deletion of a user from the database and store the result.
    var result = await userService.removeUserDBService(req.params.id);
    if (result) {
        // If the user is successfully deleted, send a success response.
        res.send({ "status": true, "message": "User Deleted" });
    } else {
        // If there is a failure in deleting the user, send an error response.
        res.send({ "status": false, "message": "User Deletion Failed" });
    }
}

// Export the controller functions to make them available to other parts of the application.
module.exports = { getDataConntrollerfn, createUserControllerFn, updateUserController, deleteUserController };
