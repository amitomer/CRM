var express = require('express');
var bodyParser = require('body-parser');
var api = require('./server/api');

const SERVER_PORT = 8080;
var app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.static('node_modules'));
app.use(express.static('build'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api);
app.listen(process.env.PORT || SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});


  
  
