
const passport = require('passport');


module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    app.get('/auth/google/callback',  passport.authenticate('google'),(req,res) => {
        res.send("authenticated");
    });

    app.get('/api/logout', function(req, res){
        req.logout();
        res.redirect('/');
        res.send(req.user);
      });
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};

