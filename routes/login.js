var passport = require('passport');
exports.addRoutes = function(app) {
	app.post('/login', passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login'}));
}