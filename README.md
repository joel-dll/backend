# Full Stack Web Application (Solent Nursery)

This is a full-stack web application for managing contacts and users. It uses Node.js, Express, and MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js v18.20.2
- npm (Node Package Manager)
- MongoDB v6.6.1
- Express v4.19.2
- mongoose 6.12.8

  (very important to install those versions to have a full compatibility between backend and frontend)

### Installing

A step by step series of examples that tell you how to get a development environment running.

1. Clone the repository to your local machine:

   https://github.com/joel-dll/backend

2. Navigate to the project directory:
   cd path-to-backend

### Start the server

1. On terminal type : node server.js

   example: joelfreitas@Joels-Air backend % node server.js

This command will start the server with the settings appropriate for a production environment.

## API Endpoints

- **GET /user/getAll**: Fetches all users.
- **POST /user/create**: Creates a new user.
- **PATCH /user/update/:id**: Updates an existing user by ID.
- **DELETE /user/delete/:id**: Deletes a user by ID.
- **POST /contact**: Creates a new contact.

## Built With

* [Node.js](https://nodejs.org/) - The runtime server
* [Express](https://expressjs.com/) - The web framework
* [MongoDB](https://www.mongodb.com/) - The database

## Authors

* **Vitor Freitas** - *Solent Nursery - [joel-dll] (https://github.com/joel-dll/backend)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

   MIT - https://github.com/libeyondea/backend-node-express/blob/main/LICENSE
