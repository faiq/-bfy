var http = require('http'),
    fs = require('fs');
http.createServer(function (req, res) {
  if (req.url === '/') { 
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);  
  }
  else {
    var readStream = fs.createReadStream(__dirname + '/bundle.js');
    readStream.pipe(res);  
  }
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
