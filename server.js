
/* Creating an HTTP Server */
//creates an object 'http' that contains the methods for http
var http = require('http');
var url = require('url');


/* onRequest function

createServer is function within the 'http' module ==> creates an object ==>
'listen' takes a numeric value which indicates the port number our HTTP server is going to listen on

writeHead' sends an HTTP status code '200' and the content-type back to the browser

//sends "hello world" to be written on the browser

 */
function start(route) {

    function onRequest(request, response) {
        //Get the path name
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    };

    http.createServer(onRequest).listen(9000, function () {
        console.log("Listening on port 9000!")

    });
}

/* 'exports' allows us to use our file as a 'module' */
exports.start = start;