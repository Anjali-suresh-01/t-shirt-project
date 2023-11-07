// MongoDB code to store and retrieve user color preferences
// This code creates a MongoDB database to store user color preferences

// Import the MongoDB driver
const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'tshirt';

// Connect to the MongoDB server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Create a collection for user color preferences
  const collection = db.collection('colors');

  // Insert a document with a user's color preference
  collection.insertOne({
    user: 'John Doe',
    color: 'blue'
  }, function(err, result) {
    console.log("Inserted document with user color preference");
  });

  // Find all documents with a user's color preference
  collection.find({ user: 'John Doe' }).toArray(function(err, docs) {
    console.log("Found documents with user color preference");
    console.log(docs);
  });

  // Close the MongoDB client
  client.close();
});
