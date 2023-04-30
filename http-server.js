const http = require('http');
const server = http.createServer();

server.on('listening', function () {
  console.log('Server running!');
});

server.listen(3000);
