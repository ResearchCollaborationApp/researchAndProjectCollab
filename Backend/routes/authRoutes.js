// authRoutes.js
const express = require('express');
const router = express.Router();
const { googleOAuthLoginHandler, microsoftOAuthLoginHandler } = require('../apiHandler/authHandler');

const passport = require('passport')
// Route to initiate Google OAuth
router.get('/google', googleOAuthLoginHandler);

// Route to handle Google OAuth callback
router.get('/google/callback', (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.redirect("http://localhost:3000/signin");
    req.logIn(user, (err) => {
      if (err) return next(err);
      if (info.firstTimeUser) return res.redirect("http://localhost:3000/createprofile");
      return res.redirect("http://localhost:3000/feedpage");
    });
  })(req, res, next);
});

// Route to initiate Microsoft OAuth
router.get('/microsoft', microsoftOAuthLoginHandler());

// Route to handle Microsoft OAuth callback
router.get('/microsoft/callback', (req, res, next) => {
    passport.authenticate("microsoft", (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.redirect("http://localhost:3000/signin");
      req.logIn(user, (err) => {
        if (err) return next(err);
        if (info.firstTimeUser) return res.redirect("http://localhost:3000/createprofile");
        return res.redirect("http://localhost:3000/feedpage");
      });
    })(req, res, next);
});

router.get("/check-session", (req, res) => {
    if (req.isAuthenticated()) {
      return res.json({ loggedIn: true, user: req.user });
    } else {
      return res.json({ loggedIn: false });
    }
});

//logout route
router.get("/signout", (req, res, next) => {
    req.logout(function (err) {
      if (err) return next(err);
      res.redirect("http://localhost:3000");
    });
  });

module.exports = router;
