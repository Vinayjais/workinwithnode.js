const http = require('http');





const server = http.createServer((req, res) => {

     if(req.url == '/'){
        res.write('<html>');
        res.write('<head><title>My first page </title></head>');
        res.write('<dody><h1> Hello from my node js server </h1><body>');
        res.write('</html>');
        res.end();
     }
     else if(req.url == '/home'){
         res.end("Welcome home");

     }
     else if( req.url == '/about'){
        res.end("Welcome to about us page");
     }
     else if(req.url == '/node'){
       res.end('Welcome to my node js project');
     }
     else{
        res.end('not working');
     }
    
});



server.listen(4000);
