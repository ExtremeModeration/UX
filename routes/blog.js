/**
 * Created by steve on 2/16/15.
 */

var api = require('../services/EMApi');

module.exports = function(router){
    
    router.get('/blog', function(req, res, next){
        api.blog.list(function(e, blogs){
            if (e) return next(e);
            res.render('blog-list', {blogs: blogs});
        });
    });
    
    router.get('/blog/:slug', function(req, res, next){
        api.blog.get(req.params.slug, function(e, blog){
            if (e) return next(e);
            res.render('blog-single', {blog: blog});
        });
    });
    
    return router;
};
