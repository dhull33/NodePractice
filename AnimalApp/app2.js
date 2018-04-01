
// Includes HTTP & Express libraries
const http = require('http');
const express = require('express');
// Create an instance of express
const app = express();
// Get data
const dataFile = require('./data/animals.json');

//Set view engine: ejs
app.set('view engine', 'ejs');
app.set('views', 'views');
//Set data
app.set('appData', dataFile);

app.use(require('./routes/index'));


//Set public folder as static
app.use(express.static('./public'));

//Create server
http.createServer(app).listen(9000, function(){
    console.log("Listening on port 9000!");
});

