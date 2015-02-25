/**
 * Created by steve on 2/23/15.
 */

module.exports = function(router){
    
    router.get('/admin/users', function(req, res, next){
        res.render('admin/user-list',{users: []});
    });
    
    router.get('/admin/users/{id}', function(req, res, next){
        res.render('admin/user-edit',{user: {}});
    });
    
    return router;
};
