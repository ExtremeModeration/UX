package tv.extrememoderation.blog

class BlogController {

    def blogService

    def index() {
        params.page = params?.page ?: 1
        params.size = params?.size ?: 5

        def blogs = blogService.listBlogs params.page, params.size
        [blogs: blogs.content]
    }

    def show() {
        def blog = blogService.getBlog params.slug
        [blog: blog]
    }
}
