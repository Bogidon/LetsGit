require('./common');

exports.addRoutes = function(app) {
  app.get('/project', function(req, res){
    render('project', {}, res);
  });
};