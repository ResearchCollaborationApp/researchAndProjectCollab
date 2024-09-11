require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const LinkedInStrategy = require("passport-linkedin").Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const linkedinClientID = process.env.LINKEDIN_CLIENT_ID;
const linkedinClientSecret = process.env.LINKEDIN_CLIENT_SECRET;
// Create express app
const app = express();

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

// Function to get the collection from a specific database
const getCollection = (dbName, collectionName) => {
  const db = mongoose.connection.useDb(dbName); // Select the database
  return db.collection(collectionName); // Access the collection
};


app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  credentials: true
}));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.get("/getResearch/api/skills", async(req, res)=>{
  const collection = getCollection("skills", "skills");
  const skills = await collection.find({}).toArray();
  res.json(skills);
})

app.get("/api/posts", async (req, res)=>{
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || 10;
  const collection = getCollection("posts", "posts")
  try {
    const posts = await collection.find().skip(offset).limit(limit).toArray();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies', error });
  }
})

// Setup session
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true
}));

// Setup passport
app.use(passport.initialize());
app.use(passport.session());

//google authorization
passport.use(
  new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: "/auth/google/callback",
    scope:["profile", "email"]
  },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const userFromMongo = getCollection("users", "googleUsers");
        let user = await userFromMongo.findOne({ googleId: profile.id });
        if (!user) {
            user = {
              googleId: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value,
              image: profile.photos[0].value
            };
          await userFromMongo.insertOne(user);
          return done(null, user, {firstTimeUser: true})
        }
        return done(null, user, {firstTimeUser:false});
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Initialize Google auth signin
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

//success redirect should lead the user to dashboard page
//for now it will take the user to the home page
app.get("/auth/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("http://localhost:3000/signin");
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      // Check if the user is logging in for the first time
      if (info.firstTimeUser) {
        console.log("is a first time user")
        return res.redirect("http://localhost:3000/createprofile");
      }
      console.log("is already a member at getResearch")
      return res.redirect("http://localhost:3000/feedpage");
    });
  })(req, res, next);
});


//linkedin authorization
passport.use(
  new LinkedInStrategy(
    {
      clientID: linkedinClientID,
      clientSecret: linkedinClientSecret,
      callbackURL: "http://localhost:4000/auth/linkedin/callback",
      scope: ['profile', 'email', 'openid'],
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      req.session.accessToken = accessToken;
      process.nextTick(async function () {
        try {
          const userFromMongo = getCollection("users", "linkedinUsers");
          let user = await userFromMongo.findOne({ linkedinId: profile.id });
          if (!user) {
            user = {
              linkedinId: profile.id,
              displayName: profile.givenName,
              email: profile.email,
              image: profile.picture
            };
            await userFromMongo.insertOne(user);
          }
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      });
    }
  )
);
// Initial LinkedIn OAuth login
app.get("/auth/linkedin", passport.authenticate("linkedin",{ state: 'JFKDODFK' }));

//success redirect should lead the user to dashboard page
//for now it will take the user to the home page
app.get("/auth/linkedin/callback", passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000/createprofile",
    failureRedirect: "http://localhost:3000/signin"
}));

//microsoft authorization
passport.use(new MicrosoftStrategy({
  clientID: process.env.MICROSOFT_CLIENT_ID,
  clientSecret: process.env.MICROSOFT_SECRET_VALUE,
  callbackURL: "http://localhost:4000/auth/microsoft/callback",
  scope: ['user.read'],
  tenant: 'common',
  authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
  tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  graphApiVersion: 'v1.0',
  addUPNAsEmail: false,
  apiEntryPoint: 'https://graph.microsoft.com',
},
async function(accessToken, refreshToken, profile, done) {
  // Simulate a user object based on profile information
  try {
    const userFromMongo = getCollection("users", "microsoftUsers");
    let user = await userFromMongo.findOne({ microsoftId: profile.id });
    if (!user) {
      user = {
        microsoftIdId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value
      };
      await userFromMongo.insertOne(user);
    }
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}
));

app.get('/auth/microsoft',
  passport.authenticate('microsoft', { prompt: 'select_account' })
);

app.get('/auth/microsoft/callback', 
  passport.authenticate('microsoft', { 
    successRedirect: "http://localhost:3000/createprofile",
    failureRedirect: "http://localhost:3000/signin" })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/api/user", (req, res)=>{
  if (req.user){
    res.json(req.user)
  }
  else {
    res.status(401).json({ message: 'Unauthorized' });
  }
})
app.get("/auth/check-session", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ loggedIn: true, user: req.user });
  } else {
    return res.json({ loggedIn: false });
  }
});

app.get("/signout",(req,res,next)=>{
  req.logout(function(err){
      console.log("signout clicked")
      if(err){return next(err)}
      res.redirect("http://localhost:3000");
  })
})

//get the collab boards list from the backend
app.get("/api/boards", async(req, res)=>{
  const collection = getCollection("boards", "boards");
  const boards = await collection.find({}).toArray();
  res.json(boards);
})
