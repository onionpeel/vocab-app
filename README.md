#Vocab-app

This application allows a user to search for words in a Japanese dictionary.  The user can create an account and then the results from the word search can be added to create a personalized vocabulary list.

##Installation
```
git clone git@github.com:onionpeel/vocab-app.git
cd vocab-app
npm install
npm client-install

```
Redis is used for caching the results of the dictionary searches, so when running locally, a Redis instance needs to be created.
MongoDB is the backend database.  This can be set up through the MongoDB website.

###Configuration
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

###Run
`npm run dev`
This starts one server for the front end and another for the backend application.
