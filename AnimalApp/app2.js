
// Includes HTTP & Express libraries
let http = require('http');
let express = require('express');
// Create an instance of express
let app = express();

//Set view engine: ejs
app.set('view engine', 'ejs');

app.set('views', 'AnimalApp/views');
//Create server
http.createServer(app).listen(9000, function(){
    console.log("Listening on port 9000!");
});

//Route for the home page
app.get('/', function(request,response){
    response.send("<h1>HEY YO BITCH! WHATCHA DOING?</h1>");
});