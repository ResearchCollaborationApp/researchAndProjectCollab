// server.js
require('dotenv').config();
const express = require('express');
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

//routes
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const userRoutes =  require('./routes/userRoutes')
// Create express app
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Use auth routes
app.use('/auth', authRoutes);
app.use('/user',userRoutes);


// // Get skills and posts (example routes)
// app.get("/getResearch/api/skills", async (req, res) => {
//   const collection = getCollection("skills", "skills");
//   const skills = await collection.find({}).toArray();
//   res.json(skills);
// });

// app.get("/api/posts", async (req, res) => {
//   const offset = parseInt(req.query.offset) || 0;
//   const limit = parseInt(req.query.limit) || 10;
//   const collection = getCollection("posts", "posts");
//   try {
//     const posts = await collection.find().skip(offset).limit(limit).toArray();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching posts', error });
//   }
// });

// // Example boards route
// app.get("/api/boards", async (req, res) => {
//   const collection = getCollection("boards", "boards");
//   const boards = await collection.find({}).toArray();
//   res.json(boards);
// });
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
