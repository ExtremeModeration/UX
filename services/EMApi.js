/**
 * Created by steve on 2/15/15.
 */

function ExtremeModerationAPI() {
    
    var superagent = require('superagent'),
        root = process.env.API_ROOT || 'http://localhost:3000';
    
    function Auth(){
        return {
            login: function(user, callback) {
                superagent.post(root + '/login')
                    .send(user)
                    .end(callback);
            }
        }
        
    }
    
    return {
        auth: new Auth()
    };
}

module.exports = new ExtremeModerationAPI();
