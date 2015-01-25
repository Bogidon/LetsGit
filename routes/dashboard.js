var Repo = require('../models/repo.js');
require('./common');

exports.addRoutes = function(app) {
	app.get('/dashboard', ensureAuthenticated, function(req, res)
	{
		/*var testRepo = new Repo({
			name: 'test1', 
			path: 'www.google.com', 
			createdAt: "2015-01-25T05:45:49.307Z",
			updatedAt: "2015-01-25T05:46:07.434Z",
			userId: req.user._id
		});
		testRepo.save();*/
		/*for (var i = 0; i < 6; i++)
		{
			var testRepo = new Repo({
				name: 'test' + i, 
				path: 'www.google.com/' + Math.random(), 
				createdAt: new Date().toJSON(),
				updatedAt: new Date().toJSON(),
				userId: req.user._id
			});
			testRepo.save();
		}*/

		Repo.find({userId: req.user._id}, function(error, data){
	    	//console.log(data);
			renderDashboard('dashboard', {css:["dashboard"], repos:data}, res);
	    });
		//console.log(req.user);
	});
};

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}
