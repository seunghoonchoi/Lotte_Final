var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes_API_V1 = require('./routes/API_V1');
var routes_admin = require('./routes/ADMIN');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json(/*{limit: 5000000}*/));
app.use(bodyParser.urlencoded(/*{limit: 5000000, extended: true, parameterLimit:50000}*/));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var admin_account_id = "jjang";

function adminCheck(req, res, next){
  if(req.params['account'] != 'jjang'){
    return  res.end('asd');
  }else{
    next();
  }
}

app.use('/admin/:account', adminCheck, routes_admin);
app.use('/API_V1', routes_API_V1);

// app.get('/API', function(req, res, next){
// 	// 유저 검사
// 	// 인증되지 않은 유저는 status 200을 제외한 값 주기
// 	//return res.status(204).end('asd');
// 	console.log('test1');
// 	//next()
// }, function(req,res){
// 	console.log('test2');
// 	res.end('hello world');
// });


// catch 404 and forward to error handler
app.use((req, res, next)=> {
  var err = new Error('없ㄱ네요!!');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next)=> {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
