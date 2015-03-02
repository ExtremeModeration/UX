/**
 * Created by steve on 2/15/15.
 */

function ExtremeModerationAPI() {
    
    var superagent = require('superagent'),
        root = process.env.API_ROOT || 'http://localhost:3000';
    
    function handleResponse(e, result, callback) {
        if (e) callback(e);
        else callback(null, result.body);
    }
    
    function Auth(){
        return {
            login: function(user, callback) {
                superagent.post(root + '/login')
                    .send(user)
                    .end(callback);
            }
        }
        
    }
    
    function Blog() {
        return {
            list: function(callback) {
                superagent.get(root + '/v1/blogs')
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            },
            
            get: function(slug, callback) {
                superagent.get(root + '/v1/blog/with-slug/' + slug)
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            },
            
            create: function(user, post, callback) {
                superagent.post(root + '/v1/blog')
                    .set('x-access-token', user.token)
                    .set('x-key', user.username)
                    .send(post)
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            },
            
            update: function(user, post, callback){
                superagent.put(root + '/v1/blog/' + post._id)
                    .set('x-access-token', user.token)
                    .set('x-key', user.username)
                    .send(post)
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            },
            
            del: function(user, post, callback) {
                superagent.del(root + '/v1/blog/' + post._id)
                    .set('x-access-token', user.token)
                    .set('x-key', user.username)
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            }
        };
    }
    
    function User() {
        return {
            list: function(user, callback){
                superagent.get(root + '/v1/secure/users')
                    .set('x-access-token', user.token)
                    .set('x-key', user.username)
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            },
            
            get: function(user, user_id, callback) {
                superagent.get(root + '/v1/secure/user/' + user_id)
                    .set('x-access-token', user.token)
                    .set('x-key', user.username)
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            },
            
            update: function(user, user_to_update, callback) {
                superagent.put(root + '/v1/secure/user/' + user_to_update._id)
                    .set('x-access-token', user.token)
                    .set('x-key', user.username)
                    .send(user_to_update)
                    .end(function(e, result){
                        handleResponse(e, result, callback);
                    });
            }
        };
    }
    
    return {
        auth: new Auth(),
        blog: new Blog(),
        user: new User()
    };
}

module.exports = new ExtremeModerationAPI();
