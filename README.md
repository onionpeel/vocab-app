# Vocab-app

This application allows a user to search for words in a Japanese dictionary.  The user can create an account and create a personalized vocabulary list.

# Features
-The frontend is built with React, Redux, Bootstrap and React-Bootstrap
-React-Router handles the client-side routing
-User input is stored in a MongoDB database, using Mongoose to model the data
-Dictionary searches are cached using Redis
-The backend runs on an Express server
-Express-Validator validates form input
-bcryptjs encrypts passwords
-JSON web tokens are used to maintain a user's activity in local storage
-Asynchronous calls are made using Axios
-Project configurations are organized through the npm package, config

## Installation
```
git clone git@github.com:onionpeel/vocab-app.git
cd vocab-app
npm install
cd client
npm install

```
Redis is used for caching the results of the dictionary searches. A Redis instance needs to be created for the searches to work.
MongoDB is the backend database.  This can be set up through the MongoDB website.

### Configuration
Local
In the config directory create a `default.json` file.  Set up that file as follows, filling in the necessary information

```
{
  "mongoDbUri": "<enter the database URI, including the DB name and password>",
  "JWTPrivateKey": "<enter a random group of characters to be used as the key>"
}
```
Production
JWT_PRIVATE_KEY, MONGODB_URI and REDIS_URL should be set directly on the server.  These will override any values set in `config/default.json`.

### Run
`npm run dev`
This starts one server for the front end and another for the backend application.
