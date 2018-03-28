// Here we are using our server.js file as a module by using the require function


var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = [];
handle["/"] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);