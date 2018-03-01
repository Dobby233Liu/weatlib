var http = require('http');
var fs = require('fs');
var data = require('./config.json');
// still nothing
var go = function();
// start function
http.createServer(function(req, res){
    fs.readFile('local.html',function (err, data){
        // read file
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
exports.go = go;
