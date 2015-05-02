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
            res.api.viewer.getViewerPoints(req.session.user, user.username, function(viewer){
                res.render('admin/user-edit', {user: user, viewer: viewer});
            });
        });
    });
    
    router.put('/admin/users/:id', function(req, res, next){
        res.api.user.get(req.session.user, req.params.id, function(e, user){
            if (e) return next(e);
            
            if (req.session.user._id === req.params.id) {
                res.status(500);
                res.send({message: 'cannot update self'});
                return;
            }
            
            if (req.body.role === '') req.body.role = null;
            if (req.body.role !== 'admin' && req.body.role !== null) {
                req.body.role = user.role;
            }
            
            user.role = req.body.role;
            
            res.api.user.update(req.session.user, user, function(e, result){
                if (e) return next(e);
                res.send(result);
            });
        });
    });
    
    return router;
};
