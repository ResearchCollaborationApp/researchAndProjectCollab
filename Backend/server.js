require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const GoogleOAuth2Strategy = require("passport-google-oauth2").Strategy;
const LinkedInOAuth2Strategy = require("passport-linkedin-oauth2").Strategy;
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const googleClientID = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const linkedinClientID = "86x0iud8qklort";
const linkedinClientSecret = "9OTQohIPzgt59Xbp";

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
  new GoogleOAuth2Strategy({
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
        }
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
//linkedin authorization
passport.use(
  new LinkedInOAuth2Strategy({
      clientID: linkedinClientID,
      clientSecret: linkedinClientSecret,
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
      state: true
  },
  async (accessToken, refreshToken, profile, done) => {
      try {
          const userFromMongo = getCollection("users", "linkedInUsers");
          let user = await userFromMongo.findOne({ linkedinId: profile.id });

          if (!user) {
              user = {
                  linkedinId: profile.id,
                  displayName: profile.displayName,
                  email: profile.emails[0].value,
                  image: profile.photos[0].value
              };

              await userFromMongo.insertOne(user);
          }

          return done(null, user);
      } catch (error) {
          return done(error, null);
      }
  })
);
//outlook authorization
passport.use(new OIDCStrategy({
  identityMetadata: `https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`,
  clientID: process.env.OUTLOOK_CLIENT_ID,
  clientSecret: process.env.OUTLOOK_SECRET_VALUE,
  responseType: 'code',
  responseMode: 'query',
  redirectUrl: process.env.OUTLOOK_REDIRECT_URI,
  allowHttpForRedirectUrl: true,
  scope: ['profile', 'offline_access', 'https://outlook.office.com/Mail.Read']
}, (iss, sub, profile, accessToken, refreshToken, done) => {
  // You can use profile information to find or create the user in your database
  return done(null, profile);
}));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Initialize Google auth signin
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

//success redirect should lead the user to dashboard page
//for now it will take the user to the home page
app.get("/auth/google/callback", passport.authenticate("google", {
  successRedirect: "http://localhost:3000",
  failureRedirect: "http://localhost:3000/signin"
}));

// Initial LinkedIn OAuth login
app.get("/auth/linkedin", passport.authenticate("linkedin", { scope: ["r_emailaddress", "r_liteprofile"], state: true }));

//success redirect should lead the user to dashboard page
//for now it will take the user to the home page
app.get("/auth/linkedin/callback", passport.authenticate("linkedin", {
    successRedirect: "http://localhost:3000",
    failureRedirect: "http://localhost:3000/signin"
}));

// routes
app.get('/auth/outlook', passport.authenticate('azuread-openidconnect'));

app.get('/auth/outlook/callback',
  passport.authenticate('azuread-openidconnect', {
    successRedirect: '/',
    failureRedirect: ''
  })
);


app.get("/logout",(req,res,next)=>{
  req.logout(function(err){
      if(err){return next(err)}
      res.redirect("http://localhost:3000");
  })
})


