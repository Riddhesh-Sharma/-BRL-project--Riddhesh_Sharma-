 
var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("This is my first program using node.js")
    res.end()
}).listen(8080, '127.0.0.1');