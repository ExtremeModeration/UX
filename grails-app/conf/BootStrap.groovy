import groovy.json.JsonBuilder
import groovy.json.JsonSlurper

class BootStrap {

    def init = { servletContext ->
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
