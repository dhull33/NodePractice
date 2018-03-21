
var fs = require('fs');

var count = 0;

var file = fs.readFile(process.argv[2]).toString();

var newLine = file.split('\n', Number(file.length));

console.log(newLine.length-1);












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

*/