
/*var fs = require('fs');

var count = 0;

var file = fs.readFile(process.argv[2]).toString();

var newLine = file.split('\n', Number(file.length));

console.log(newLine.length-1);




//Example Function
var http = require('http');

var myServer = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});  //==> //To 		send back something to client

    response.write('<h1>Digital Crafts</h1>'); //=> writes digital crafts to our webpage
    response.end();

});

//Asking server to listen on a specific port
myServer.listen(4000);
/*var fs = require('fs');


//Reading a File
var fileName = "test.txt";

fs.readFile(fileName, function(error, buffer){
    if(error) {
        console.log(error.message);
        return;
    }
    console.log('File Data: ', buffer.toString());  // 'buffer' is a binary buffer object => what is that?
});


//Writing a File
fs.writeFile(fileName, 'I love Node', function(error){
    if (error){
        console.error(error.message);
        return;
    }
    console.log('File Save: ', fileName);
});



//User Input
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("How's it going? ", function(answer) {
    console.log("Awesomesauce:", answer);
    rl.close();
});



// Request a WebPage
var request = require('request');
var url = 'https://nodejs.org/en/';

request.get(url, function (error, response, html) {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(html);
});





var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('<h1>Hello, World!</h1>');
});

app.get('/cats', function(req, res) {
    res.send('<h1>Meow</h1>');
});

app.get('/dogs', function(req, res) {
    res.send('<h1>Woof</h1>');
});


app.get('/cats_and_dogs', function(req, res) {
    res.send('<h1>Living Together</h1>');
});

//Route Route Parameters
app.get('/greet/:name', function(req,res){
    var name = req.params.name || 'world';
    name = name.substr(1, name.length);
    res.send('Hello, ' + name + '!')
});



//Query Parameters Example
app.get('/year', function(req, res){
    var age = req.query.age || 'you old as fuck';
    var born = 2018 - Number(age);
    res.send('You were born in ' + born);
});

app.listen(9000, function(){
    console.log('Example app listening on port 9000!');
});





// Afternoon Session
var express = require('express');

var dataFile = require('./data/data.json');

var app= express();

app.get('/', function(req, res){
    var info = '';

    dataFile.speakers.forEach(function(item){

        info += `<li>
                   <h2>${item.name}<\h2>
                   <p>${item.summary}<\p>
                   
                 <\li>
                
                `;

    }); //end of forEach loop

    res.send(`
            <h1>Speakers</h1>
            ${info}
    
    ` ); //end of res.send


}) //end of app.get
*/

// Retrieve Only one Speaker

var express = require('express');

var dataFile = require('./data/data.json');

var app= express();

app.get('/speaker/:speakerid', function(req, res){
    let speaker = dataFile.speakers[req.params.speakerid];

    res.send(
        `
        <li>
        <h1>${speaker.title}</h1>
        <h2>${speaker.name}</h2>
        <p>${speaker.summary}</p>
        </li>
        `
    ); //end of res.send
}); //end of app.get



app.listen(9000, function(){
    console.log('Example app listening on port 9000!');
});