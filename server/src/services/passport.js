const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const { jwtSecret } = require('../../config');
const User = require('../models/User');

// Create Local Strategy
const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify email and password, if ok call 'done' with user
  // Otherwise, call 'done' with false
  User.findOne({ email }, (err, user) => {
    if (err) return done(err, false);
    if (!user) return done(null, false);

    // Compare password + salt against hashed password
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err, false);
      if (!isMatch) return done(null, false);

      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

  secretOrKey: jwtSecret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in DB
  // If it does, call 'done' with that user
  // otherwise, call 'done' without an user object
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
