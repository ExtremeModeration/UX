package tv.extrememoderation.sec

import grails.converters.JSON

class AuthController {

	def userService

    def login(User user) {
    	def apiUser = userService.getUserByUsername user.username
    	if (!apiUser?.username) {
    		apiUser = userService.createUser user
    	}
		session.user = apiUser
    	render apiUser as JSON
    }
}
