// Import the userModel, which is a Mongoose model for users.
var userModel = require('./userModel');

// Export a function named 'getDataFromDBService' which retrieves all users from the database.
module.exports.getDataFromDBService = () => {
    // Return a new promise to handle asynchronous database operations.
    return new Promise(function checkURL(resolve, reject) {
        // Use the find method to retrieve all documents from the userModel collection.
        userModel.find({}, function returnData(error, result) {
            if (error) {
                // If an error occurs, reject the promise with a value of false.
                reject(false);
            } else {
                // If the operation is successful, resolve the promise with the result.
                resolve(result);
            }
        });
    });
}

// Export a function named 'createUserDBService' which creates a new user with given details.
module.exports.createUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        // Create a new instance of the userModel with the provided user details.
        var userModelData = new userModel({
            name: userDetails.name,
            age: userDetails.age,
            parentcontact: userDetails.parentcontact,
            allergies: userDetails.allergies,
            specialnotes: userDetails.specialnotes
        });

        // Save the new userModel instance to the database.
        userModelData.save(function resultHandle(error, result) {
            if (error) {
                // If an error occurs during save, reject the promise.
                reject(false);
            } else {
                // If the user is successfully saved, resolve the promise with true.
                resolve(true);
            }
        });
    });
}

// Export a function named 'updateUserDBService' which updates a user by their ID with new details.
module.exports.updateUserDBService = (id, userDetails) => {
    console.log(userDetails);  // Log the details being used for the update for debugging.
    return new Promise(function myFn(resolve, reject) {
        // Find a user by ID and update their details.
        userModel.findByIdAndUpdate(id, userDetails, function returnData(error, result) {
            if (error) {
                // If an error occurs during update, reject the promise.
                reject(false);
            } else {
                // If the update is successful, resolve the promise with the updated document result.
                resolve(result);
            }
        });
    });
}

// Export a function named 'removeUserDBService' which deletes a user by their ID.
module.exports.removeUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        // Find a user by ID and delete them.
        userModel.findByIdAndDelete(id, function returnData(error, result) {
            if (error) {
                // If an error occurs during deletion, reject the promise.
                reject(false);
            } else {
                // If the deletion is successful, resolve the promise with the result of the deletion.
                resolve(result);
            }          
        });
    });
}
