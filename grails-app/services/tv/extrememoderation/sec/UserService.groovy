package tv.extrememoderation.sec

import grails.plugins.rest.client.RestBuilder

class UserService {

    def grailsApplication

    User getUserByUsername(String username) {
        def data = new RestBuilder().get("${grailsApplication.config.api.endpoint}/users/$username").json
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
