var exmo = exmo || {}, Twitch = Twitch || {};
exmo.model = exmo.model || {};
exmo.model.User = function() {
    var username, email, displayName;

    function prop(name) {
        if (arguments.length == 2) {
            this[name] = arguments[1];
        }
        return this[name];
    }

    function serialize() {
        return {
            username: prop('username'),
            email: prop('email'),
            displayName: prop('displayName')
        };
    }

    function parse(data) {
        prop('username', data.name);
        prop('email', data.email);
        prop('displayName', data.display_name);
        return this;
    }

    return {
        prop: prop,
        parse: parse,
        serialize: serialize,
    };
};

!function($) {
	$(document).on('ready', function(){
		$('.twitch-connect').hide();
		Twitch.init({clientId: exmo.twitch.client.id}, function(error, status) {
		    // the sdk is now loaded
		    $('.twitch-connect').on('click', function(){
		    	Twitch.login({
		    		scope: ['user_read']
		    	});
		    });

		    if (status.authenticated) {
		    	/*Twitch.api({method: 'user'}, function(error, tUser) {
					exmo.user = (new exmo.model.User()).parse(tUser);
		    		$.getJSON(
						exmo.app.root + 'auth/login',
						exmo.user.serialize(),
						function(result) {
		    				console.log(result);
		    			}
					);
		    	});*/
		    } else {
		    	$('.twitch-connect').show();
		    }
		});
	});
}(jQuery);