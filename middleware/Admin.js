/**
 * Created by steve on 2/23/15.
 */

module.exports = function(req, res, next) {
    // make sure the user has the admin role when they try to access /admin/*
    if (!req.session || !req.session.user || req.session.user.role !== 'admin') {
        res.status(403);
        res.render('403', {});
    } else {
        res.api.user.get(req.session.user, req.session.user._id, function(e, user){
            if (e) return next(e);
            
            if (user.role !== 'admin') {
                req.session.user = user;
                res.status(403);
                res.render('403', {});
                return;
            }
            
            // add the admin navs to the response so they are available to jade
            res.locals.adminNav = require('../services/Admin').adminNav(req);
            next();
        });
    }
};
