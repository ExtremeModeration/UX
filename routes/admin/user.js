/**
 * Created by steve on 2/23/15.
 */

module.exports = function(router){
    
    router.get('/admin/users', function(req, res, next){
        res.api.user.list(req.session.user, function(e, users){
            if (e) return next(e);
            res.render('admin/user-list',{users: users});
        });
    });
    
    router.get('/admin/users/:id', function(req, res, next){
        var user_id = req.params.id;
        res.api.user.get(req.session.user, user_id, function(e, user){
            if (e) return next(e);
            res.render('admin/user-edit', {user: user});
        });
    });
    
    return router;
};
