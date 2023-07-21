const http = require('http');

const PORT = 4000;
const NAME = 'Vinay Jaiswal'; 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`${NAME}`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Your name is: ${NAME}`);
});
