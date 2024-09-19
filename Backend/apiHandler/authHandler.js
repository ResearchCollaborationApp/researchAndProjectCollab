// authHandler.js
require('dotenv').config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const MicrosoftStrategy = require('passport-microsoft').Strategy;
//const  getCollection = require('../controllers/getCollections');
const { signUpAUser} = require('../controllers/signUpAUser');

const databasePromise = require('../middleware/databaseConnector')


// Google OAuth login handler
function googleOAuthLoginHandler() {
    return passport.authenticate("google", { scope: ["profile", "email"] });
  }
  
  // Microsoft OAuth login handler
  function microsoftOAuthLoginHandler() {
    return passport.authenticate("microsoft", { prompt: 'select_account' });
  }

// Google OAuth Strategy
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"]
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const database = await databasePromise;
      const userCollection = await database.collection('users');
      let user = await userCollection.findOne({ googleId: profile.id });
      if (!user) {
        user = {
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value
        };
        await userCollection.insertOne(user);
        return done(null, user, { firstTimeUser: true });
      }
      return done(null, user, { firstTimeUser: false });
    } catch (error) {
      return done(error, null);
    }
  })
);

// Microsoft OAuth Strategy
passport.use(
  new MicrosoftStrategy({
    clientID: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_SECRET_VALUE,
    callbackURL: "/auth/microsoft/callback",
    scope: ['user.read'],
    tenant: 'common',
    authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    graphApiVersion: 'v1.0',
    addUPNAsEmail: false,
    apiEntryPoint: 'https://graph.microsoft.com',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const database = await databasePromise;
      const userCollection = await database.collection('users')
      let user = await userCollection.findOne({ microsoftId: profile.id });
      if (!user) {
        user = {
          microsoftId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value
        };
        await userCollection.insertOne(user);
        return done(null, user, { firstTimeUser: true });
      }
      return done(null, user, { firstTimeUser: false });
    } catch (error) {
      return done(error, null);
    }
  })
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});



// Export handlers
module.exports = {
  googleOAuthLoginHandler,
  microsoftOAuthLoginHandler
};
