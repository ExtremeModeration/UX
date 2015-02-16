/**
 * Created by steve on 2/15/15.
 */

module.exports = function(router){
    
    var twitch_svc = require('../services/Twitch'),
        superagent = require('superagent'),
        api = require('../services/EMApi');
    
    router.get('/twitch/login', function(req, res, next){
        var url = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=' + twitch_svc.client_id() + '&redirect_uri=' + twitch_svc.redirect_url() + '&scope=user_read';
        res.redirect(url);
    });
    
    router.get('/twitch/redirect_handler', function(req, res, next){
        var url = 'https://api.twitch.tv/kraken/oauth2/token',
            data = {
                client_id: twitch_svc.client_id(),
                client_secret: twitch_svc.client_secret(),
                grant_type: 'authorization_code',
                redirect_uri: twitch_svc.redirect_url(),
                code: req.query.code
            };
        superagent.post(url)
            .type('form')
            .send(data)
            .end(function(e, result){
                if (e) return next(e);
                var access_token = result.body.access_token;
                superagent.get('https://api.twitch.tv/kraken/user')
                    .set('Accept', 'application/vnd.twitchtv.v2+json')
                    .set('Authorization', 'OAuth ' + access_token)
                    .end(function(e, result){
                        if (e) return next(e);
                        var user = result.body;
                        user.username = user.name;
                        user.name = user.display_name;
                        api.auth.login(user, function(e, result){
                            if (e) return next(e);
                            user.token = result.body.token;
                            user._id = result.body.user._id;
                            user.role = result.body.user.role;
                            req.session.user = user;
                            res.redirect('/');
                        });
                    });
            });
    });
    
    return router;
};
