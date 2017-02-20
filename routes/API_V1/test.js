/**
 * Created by bagjeongtae on 2017. 2. 20..
 */

var express = require('express');
var router = express();

//요청 주세요
router.get('/index', function(req, res, next){
    res.end('user test get');
});

// 추가 만드세요
router.post('/index', function(req, res, next){
    res.end('user test post');
});

// 삭제 지우세요
router.delete('/index', function(req, res, next){
    res.end('user test delete');
});

// 수정 바꾸세요
router.put('/index', function(req, res, next){
    res.end('user test put');
});

module.exports = router;
