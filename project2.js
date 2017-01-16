var express = require('express');
var app = express();
var opening = require('opener')
var path = require("path")

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/index.html");
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port


})

opening('http://127.0.0.1:8081/')