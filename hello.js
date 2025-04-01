const http = require("http");
http.createServer((request,response) => {
    response.write("Hello World Sanket");
    response.end();
}).listen(8080);