package tv.extrememoderation.blog

import grails.plugins.rest.client.RestBuilder

class BlogService {

    def grailsApplication

    def listBlogs(int page = 1, int size = 5) {
        log.info 'Listing blogs!'
        String url = "${grailsApplication.config.api.endpoint}/blogs?page=${page-1}&size=$size&sort=createdAt,desc"
        new RestBuilder().get(url)?.json
    }

    def getBlog(String slug) {
        String url = "${grailsApplication.config.api.endpoint}/blogs/$slug"
        new RestBuilder().get(url)?.json
    }

    def createBlog(Map blog) {
        String url = "${grailsApplication.config.api.endpoint}/blogs"
        new RestBuilder().post(url) {
            contentType 'application/json'
            json blog
        }?.json
    }

    def updateBlog(String slug, Map blog) {
        String url = "${grailsApplication.config.api.endpoint}/blogs/$slug"
        new RestBuilder().put(url) {
            contentType 'application/json'
            json blog
        }?.json
    }
}
