package tv.extrememoderation.sec

import tv.extrememoderation.util.JSONUtil

class UserService {

    def grailsApplication

    User getUserByUsername(String username) {
        def data = JSONUtil.get "/users/search/findByUsername?username=$username"
        data = data._embedded.users[0]
        def id = data._links.self.href.split('/')[-1]
        new User(username: data.username, email: data.email, token: data.token, id: id)
    }
}
