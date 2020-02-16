const passport = require('passport');

const AuthController = require('../controllers/AuthController');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/test-auth', requireAuth, (req, res) => res.send('Hello PUTA!'));
  app.post('/signup', AuthController.signup);
  app.post('/signin', requireSignin, AuthController.signin);
};
