var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome!' });
});

require('./admin')(router);
require('./blog')(router);
require('./forums')(router);
require('./profile')(router);
require('./twitch')(router);

module.exports = router;
