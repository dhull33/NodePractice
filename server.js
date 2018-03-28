
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
function start(route, handle) {
    debugger;
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk){
            postData += postDataChunk;
            console.log("Received POST data chunk " + postDataChunk + ".");
        });

        request.addListener('end', function() {
            route(handle, pathname, response, postData);
        });

    }

    http.createServer(onRequest).listen(9000, function () {
        console.log("Listening on port 9000!")

    });
}

/* 'exports' allows us to use our file as a 'module' */
exports.start = start;