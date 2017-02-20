var express = require('express');
var router = express();

router.get('/index', function(req, res){
    res.end('user test');
});

module.exports = router;
