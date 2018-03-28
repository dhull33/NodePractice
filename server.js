
/* Creating an HTTP Server */
//creates an object 'http' that contains the methods for http
var http = require('http');


/*createServer is function within the 'http' module ==> creates an object ==>
'listen' takes a numeric value which indicates the port number our HTTP server is going to listen on

 */
function start() {

    function onRequest(request, response) {
        // 'writeHead' sends an HTTP status code '200' and the content-type back to the browser
        response.writeHead(200, {"Content-Type": "text/plain"});
        //sends "hello world" to be written on the browser
        response.write("Hello World");
        //ends the response
        response.end();
    };

    http.createServer(onRequest).listen(9000, function () {
        console.log("Listening on port 9000!")

    });
}

exports.start = start;