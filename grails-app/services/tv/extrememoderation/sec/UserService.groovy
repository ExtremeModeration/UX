package tv.extrememoderation.sec

import grails.plugins.rest.client.RestBuilder
import tv.extrememoderation.util.JSONUtil

class UserService {

    def grailsApplication

    User getUserByUsername(String username) {
        def data = JSONUtil.get "/users/$username"
        if (!data) return null
        new User(username: data.username, email: data.email, id: data.id, displayName: data.displayName)
    }

    User createUser(User user) {
    	def data = new RestBuilder().post("${grailsApplication.config.api.endpoint}/users") {
    		contentType 'application/json'
    		json([username: user.username, email: user.email, displayName: user.displayName])
    	}
        data = data.json
        println data
    	new User(username: data.username, email: data.email, id: data.id, displayName: data.displayName)
    }
}
