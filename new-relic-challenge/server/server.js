const http = require('http');
const express = require('./endpoints');

const PORT = process.env.PORT || 3000;

const server = http.createServer(express);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}. . .`);
})
