<%--
  Created by IntelliJ IDEA.
  User: steve
  Date: 12/20/14
  Time: 7:41 PM
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>${blog.title}</title>
    <meta name="layout" content="main"/>
</head>

<body>

<div class="row">
    <div class="col-md-9">
        <div class="page-header">
            <h1>${blog.title}</h1>
            <span class="text-muted">
                <g:link controller="user" action="profile" params="${[username: blog.authorName]}">
                    ${blog.authorName}
                </g:link>
            </span>
        </div>

        <p>${blog.body}</p>
    </div>
    <div class="col-md-3"></div>
</div>

</body>
</html>