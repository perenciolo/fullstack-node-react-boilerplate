const jwt = require('jwt-simple');

const { jwtSecret } = require('../../config');
const User = require('../models/User');

function tokenForUser(user) {
  if (!user || !user.id) return null;

  // Issued at time. (Timestamp)
  const iat = new Date().getTime();

  return jwt.encode({ sub: user.id, iat }, jwtSecret);
}

function signup(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(422)
      .send({ error: 'You must provide an email and password' });

  User.findOne({ email }, (err, existingUser) => {
    // If a user with email does exist, return an error
    if (existingUser)
      return res.status(422).send({ error: 'Email already exists.' });

    const user = new User({
      email,
      password
    });

    user.save(err => {
      if (err) return next(err);

      res.json({
        success: true,
        token: tokenForUser(user)
      });
    });
  });
}

function signin(req, res) {
  res.json({
    success: true,
    token: tokenForUser(req.user)
  });
}

module.exports = { signup, signin };
