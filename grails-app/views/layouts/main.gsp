<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><g:layoutTitle default="" /> - ExtremeModeration.tv</title>

    <asset:stylesheet src="application" />

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <g:layoutHead />
  </head>
  <body>

    <div class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#main-navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <g:link uri="/" class="navbar-brand">ExtremeModeration</g:link>
        </div>

        <div id="main-navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <bs:navbarLink controller="blog" action="index">Blog</bs:navbarLink>
            <bs:navbarLink controller="forum" action="index">Forums</bs:navbarLink>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <g:if test="${session?.user?.username}">
              <li>
                <g:link controller="user" action="profile" params="${[username: session.user.username]}">
                  ${session?.user?.displayName}
                </g:link>
              </li>
            </g:if>
            <g:else>
              <li>
                <img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"
                     class="btn-twitch twitch-connect" href="#" />
              </li>
            </g:else>
            
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <g:layoutBody />
    </div>
    <script>
      var exmo = exmo || {};
      exmo.twitch = {
        client: {
          id: '${grailsApplication.config.twitch.client.id}'
        }
      };
      exmo.app = {
        root: '${g.createLink(absolute: true, uri: "/")}'
      }
    </script>

    <asset:javascript src="application" />
    <script src="https://ttv-api.s3.amazonaws.com/twitch.min.js"></script>

  </body>
</html>