/**
 * Created by steve on 2/16/15.
 */
function AdminService(){
    function adminNav(req) {
        var adminScreens = [
            {uri: '/admin/blog', label: 'Blog', class: ''},
            {uri: '/admin/users', label: 'Users', class: ''}
        ];
        
        for (var i=0; i < adminScreens.length; i++) {
            if (req.originalUrl == adminScreens[i].uri) {
                adminScreens[i].class = 'active';
                break;
            }
        }
        
        return adminScreens;
    }
    
    return {
        adminNav: adminNav
    }
}

module.exports = new AdminService();
