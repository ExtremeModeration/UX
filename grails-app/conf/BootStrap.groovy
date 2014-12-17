import tv.extrememoderation.util.JSONUtil

class BootStrap {

    def grailsApplication

    def init = { servletContext ->
        JSONUtil.ENDPOINT = grailsApplication.config.api.endpoint
    }
    def destroy = {
    }
}
