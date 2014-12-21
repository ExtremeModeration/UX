<html>
	<head>
		<meta name="layout" content="main">
		<title>Blog</title>
	</head>
	<body>
		<div class="page-header">
			<h1>Blog</h1>
		</div>

		<div class="row">
			<div class="col-md-9">
				<g:each in="${blogs}" var="blog">
					<div class="panel panel-default">
						<div class="panel-heading">
							<h3 class="panel-title">
								<g:link controller="blog" action="show" params="${[slug: blog.slug]}">
									${blog.title}
								</g:link>
							</h3>
						</div>
						<div class="panel-body">
							${blog.body}
						</div>
						<div class="panel-footer">
							<g:link controller="user" action="profile" params="${[username: blog.authorName]}">
								${blog.authorName}
							</g:link>
						</div>
					</div>
				</g:each>
			</div>
			<div class="col-md-3"></div>
		</div>
	</body>
</html>