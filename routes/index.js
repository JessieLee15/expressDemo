var express = require('express');
var router = express.Router();

//路由匹配，可以理解为单个路由的捕获【精确匹配】
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
