
var express = require('express');
var app = express();

//Set the view engine to ejs
app.set('view engine', 'ejs');


//use res.render to load up an ejs view file


// index page
app.get('/', function(req, res){
    res.render('view')
});


//Cats Page
app.get('/cats', function(req, res) {
    res.render('cats');
});

//dogs page
app.get('/dogs', function(req, res) {
    res.render('dogs');
});



//Route Route Parameters
app.get('/gre/:name', function(req,res){
    var name = req.params.name || 'world';
    //name = name.substr(1, name.length);
    res.send('Hello, ' + name + '!')
});



//Query Parameters Example
app.get('/greet/:name', function(req, res){
    var name = req.params.name;
    var age = req.query.age;
    var born = Number(2018) - Number(age);
    res.render('greet.ejs', {
        name: name,
        year: born
    });
});


app.listen(9000, function(){
    console.log('Example app listening on port 9000!');
});