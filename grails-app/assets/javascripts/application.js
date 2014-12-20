// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require jquery
//= require bootstrap.min
//= require User
//= require_self

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
		    	Twitch.api({method: 'user'}, function(error, tUser) {
					exmo.user = (new exmo.model.User()).parse(tUser);
		    		$.getJSON(
						exmo.app.root + 'auth/login',
						exmo.user.serialize(),
						function(result) {
		    				console.log(result);
		    			}
					);
		    	});
		    } else {
		    	$('.twitch-connect').show();
		    }
		});
	});
}(jQuery);