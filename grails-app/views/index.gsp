<!DOCTYPE html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome!</title>
</head>

<body>

<div class="row">
    <div class="col-xs-12">
        <div class="alert alert-info">
            <h2>Its a process!</h2>
            <p>
                The site is currently in development mode. For updates, check out
                <a class="alert-link" href="http://twitch.tv/ExtremeModeration" target="_blank">
                    ExtremeModeration on Twitch
                </a>
                as he builds the site and other application components live.
            </p>
        </div>
    </div>
</div>

<div class="page-header">
    <h1>Welcome!</h1>
</div>

%{-- embed twitch stream --}%

<div class="row">
    <div class="col-md-8">
        <iframe src="http://www.twitch.tv/extrememoderation/embed" frameborder="0" scrolling="no" height="450" width="100%"></iframe>
    </div>
    <div class="col-md-4">
        <iframe src="http://www.twitch.tv/extrememoderation/chat?popout=" frameborder="0" scrolling="no" height="450" width="100%"></iframe>
    </div>
</div>

%{-- / end embed twitch stream --}%

</body>
</html>
