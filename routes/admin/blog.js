/**
 * Created by steve on 2/16/15.
 */

var adminService = require('../../services/Admin'),
    api = require('../../services/EMApi');

module.exports = function(router){
    
    router.get('/admin/blog', function(req, res, next){
        api.blog.list(function(e, blogs){
            if (e) return next(e);
            res.render('admin/blog', {
                adminNav: adminService.adminNav(req),
                blogs: blogs
            }); 
        });
    });
    
    router.get('/admin/blog/new', function(req, res){
        res.render('admin/blog-new', {
            adminNav: adminService.adminNav(req)
        });
    });
    
    router.post('/admin/blog/save', function(req, res, next){
        var blog = req.body,
            user = req.session.user;
        
        blog.author = user.name;
        
        api.blog.create(user, blog, function(e, blog){
            if (e) return next(e);
            res.redirect('/admin/blog');
        });
    });
    
    router.get('/admin/blog/edit/:slug', function(req, res, next){
        api.blog.get(req.params.slug, function(e, blog){
            if (e) return next(e);
            res.render('admin/blog-edit', {
                adminNav: adminService.adminNav(req),
                blog: blog
            });
        })
    });
    
    router.post('/admin/blog/update', function(req, res, next){
        var blog = req.body,
            user = req.session.user;
        
        api.blog.update(user, blog, function(e, result){
            if (e) return next(e);
            res.redirect('/admin/blog');
        });
    });
    
    router.delete('/admin/blog/delete/:id', function(req, res, next){
        var user = req.session.user;
        
        api.blog.del(user, {_id: req.params.id}, function(e, result){
            if (e) return next(e);
            res.send(result);
        });
    });
    
    return router;
};
