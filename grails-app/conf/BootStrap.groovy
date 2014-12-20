import groovy.json.JsonBuilder
import groovy.json.JsonSlurper
import tv.extrememoderation.util.JSONUtil

class BootStrap {

    def grailsApplication

    def init = { servletContext ->
        JSONUtil.ENDPOINT = grailsApplication.config.api.endpoint

        // inject metaclass stuff
        Map.metaClass.toJson = {
        	new JsonBuilder(delegate).toString()
        }

        String.metaClass.toMap = {
        	new JsonSlurper().parseText(delegate)
        }
    }
    def destroy = {
    }
}
