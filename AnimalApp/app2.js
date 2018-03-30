
// Includes HTTP & Express libraries
let http = require('http');
let express = require('express');
// Create an instance of express
let app = express();

//Set view engine: ejs
app.set('view engine', 'ejs');

app.set('views', 'views');

app.use(require('./routes/index'));

//Create server
http.createServer(app).listen(9000, function(){
    console.log("Listening on port 9000!");
});

