var express = require('express');
var router = express.Router();
var request = require('request');


//路由匹配，可以理解为单个路由的捕获【精确匹配】
router.get('/account/usermanage/list', function (req, res, next) {
  console.log('你最美最美1：：')
  request('http://saas1.market-mis.wmdev2.lsh123.com/account/usermanage/list', function (error, response, body) {
    /*判断请求是否成功*/
    if (!error && response.statusCode == 200) {
      res.end(body);
    }
  });
});


router.get(/^\/static/, function (req, res, next) {
  request({
    url: 'http://saas1.market-mis.wmdev2.lsh123.com' + req.path,
    headers: { //设置请求头
      accept: '*/*',
      'cache-control': 'no-cache',
      connection: 'keep-alive',
    },
  }, function (error, response, body) {
    // 判断请求是否成功
    if (!error && response.statusCode == 200) {
      res.end(body);
    }
  });
});

module.exports = router;