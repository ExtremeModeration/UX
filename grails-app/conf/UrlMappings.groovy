class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "/blog"(controller: 'blog', action: 'index')
        "/forums"(controller: 'forum', action: 'index')
        "500"(view:'/error')
	}
}
