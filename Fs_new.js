const http = require('http');

const { log } = require('console');
const { buffer } = require('stream/consumers');
 const routes = require ('./routes');

const server = http.createServer( routes);

server.listen(3000);