require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Create express app
const app = express();


// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Function to get the collection from a specific database
const getCollection = (dbName, collectionName) => {
    const db = mongoose.connection.useDb(dbName); // Select the database
    return db.collection(collectionName); // Access the collection
};

// Route to get all documents from the collection
app.get('/getResearch/api/skills', async (req, res) => {
    try {
        const dbName = 'skills'; // Replace with your actual database name
        const collectionName = 'skills'; // Replace with your actual collection name
        const collection = getCollection(dbName, collectionName);
        const data = await collection.find({}, { projection: { _id: 0, skillName: 1 } }).toArray(); // Retrieve all documents
        res.status(200).json(data); // Send the data as a JSON response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});

// Connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // Listen for requests after connection
    app.listen(process.env.PORT, () => {
        console.log(`Connected to database and listening on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.log(error);
});
