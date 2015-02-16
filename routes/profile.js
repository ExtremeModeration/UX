/**
 * Created by steve on 2/15/15.
 */

module.exports = function(router){
    
    router.get('/profile', function(req, res){
        var user = req.session.user;
        if (!user) {
            res.redirect('/');
            return;
        }
        
        res.render('profile', {user: user});
    });
    
    router.get('/logout', function(req, res){
        req.session = null;
        res.redirect('/');
    });
    
    return router;
};
