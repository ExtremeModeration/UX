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
        $('.delete-blog-btn').on('click', function(){
            var $this = $(this),
                title = $('a[data-blog=' + $this.data('blog') + ']').text();
            if (confirm('Are you sure you want to delete blog post [' + title + ']')) {
                $.ajax({
                    url: '/admin/blog/delete/' + $this.data('blog'),
                    type: 'DELETE',
                    success: function(){
                        window.location = window.location;
                    }
                });
            }
        });
	});
}(jQuery);
