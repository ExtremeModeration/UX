/**
 * Created by steve on 2/23/15.
 */

module.exports = function(req, res, next) {
    console.log('AdminValidation!');
    // make sure the user has the admin role when they try to access /admin/*
    if (!req.session || !req.session.user || !req.session.user.role === 'admin') {
        res.status(403);
        res.render('403', {});
    } else {
        next();
    }
};
