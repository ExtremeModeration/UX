!function($){
    $(document).on('ready', function(){
        $('#adminIcon').on('click', function(){
            var $this = $(this),
                isAdmin = $this.children('.glyphicon').hasClass('glyphicon-ok'),
                user_id = $this.data('userid');
            
            // call the admin rest endpoint to change the user's admin status
            $.ajax({
                url: '/admin/users/' + user_id,
                data: {role: isAdmin ? null : 'admin'},
                type: 'PUT',
                success: function(result){
                    $this.children('.glyphicon')
                        .toggleClass('glyphicon-ok')
                        .toggleClass('glyphicon-remove')
                },
                error: function(e) {
                    if (window.console !== undefined) {
                        console.log(e);
                    }
                    alert('Could not update user');
                }
            });
        });
    });
}(jQuery);