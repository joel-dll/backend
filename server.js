// Import the Express library to help build the web server.
var express = require('express');

// Create an instance of an Express application.
var server = express();

// Import routes from the './routes/routes' module.
var routes = require('./routes/routes');

// Import the mongoose library to interact with MongoDB.
var mongoose = require('mongoose');

// Import the cors middleware to enable Cross-Origin Resource Sharing.
const cors = require('cors');

// Set the 'strictQuery' option to false to allow flexibility in query conditions.
mongoose.set('strictQuery', false);

// Connect to a MongoDB database with the provided URI, enabling new URL parser and unified topology.
mongoose.connect(
    "mongodb+srv://Joel:123@full-stack-web-applicat.fqa1a2h.mongodb.net/test&SolentNursery_childList",
    { useNewUrlParser: true, useUnifiedTopology: true },
    function checkDB(error) {
        // Callback function to handle the connection attempt.
        if (error) {
            // Log to the console if there is an error during the database connection.
            console.log("error")
        } else {
            // Log to the console once successfully connected to the database.
            console.log("Mongo DB (test&SolentNursery_childList) Connected!")
        }
    }
);

// Use CORS middleware to handle cross-origin requests.
server.use(cors());

// Enable Express to parse JSON bodies in requests.
server.use(express.json());

// Tell the server to use the imported routes for handling requests.
server.use(routes);

// Listen on port 8000 and handle the server start event.
server.listen(8000, function check(error) {
    if (error) {
        // Log to the console if there's an error when starting the server.
        console.log("error")
    } else {
        // Confirm in the console that the server is running and on which port.
        console.log("Server started on Port 8000 (http://localhost:8000)")
    }
});
