var express = require('express');
var app = express();
var listenPort = 3003;

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(listenPort);
app.get('/', function(req, res) {
  res.render('index');
});

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    next();
});

console.log('Listen on the port', listenPort);
