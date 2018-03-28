// Here we are using our server.js file as a module by using the require function


var server = require("./server");
var router = require("./router");

server.start(router.route);