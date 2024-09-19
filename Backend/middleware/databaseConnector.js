//This file handles the Database connection registeres in MongoDb atlas registered with acbikash13
require('dotenv').config();
const uri =  process.env.MONGO_URI;

const { MongoClient} = require('mongodb');
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  let db;
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    db = client.db("researchCollab");
    console.log("You successfully connected to MongoDB!");
  } catch (err) {
      console.log("Error connecting to the database " + err)
  }
  return db;
}
module.exports =  connectToDatabase();