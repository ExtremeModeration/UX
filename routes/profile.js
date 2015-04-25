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
        
        res.api.viewer.getViewerPoints(user, user.username, function(viewer){
            res.render('profile', {user: user, viewer: viewer});
        })
    });
    
    router.get('/logout', function(req, res){
        req.session = null;
        res.redirect('/');
    });
    
    return router;
};
