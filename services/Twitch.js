/**
 * Created by steve on 2/15/15.
 */

function Twitch(){
    
    function client_id(){
        return process.env.TWITCH_CLIENT_ID || 'rifk3d0r9wyfutpstcgdeexslirhnci';
    }
    
    function client_secret(){
        return process.env.TWITCH_CLIENT_SECRET;
    }
    
    function redirect_url(){
        return process.env.TWITCH_REDIRECT_URL || 'http://localhost:3001/twitch/redirect_handler'
    }
    
    return {
        client_id: client_id,
        redirect_url: redirect_url,
        client_secret: client_secret
    };
}

module.exports = new Twitch();
