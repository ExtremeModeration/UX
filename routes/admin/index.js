/**
 * Created by steve on 2/16/15.
 */
var adminService = require('../../services/Admin');

module.exports = function(router){
    require('./blog')(router);
    require('./user')(router);

    router.get('/admin', function(req, res){
        res.render('admin/index', {});
    });
    
    return router;
};
