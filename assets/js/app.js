var exmo = exmo || {}, Twitch = Twitch || {};
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
