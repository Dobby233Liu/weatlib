var http = require('http');
var fs = require('fs');
var data = require('./config.json');

var go = function();
http.createServer(function(req, res){
    fs.readFile('local.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
exports.go = go;
