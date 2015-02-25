module.exports = function(router) {
    
    router.get('/forums', function(req, res, next){
        res.render('forums/index', {forums:[]});
    });
    
    return router;
};