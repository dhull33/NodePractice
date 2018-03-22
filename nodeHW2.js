
//Read a File: A program that prompts the user to enter a file name, reads the file contents, convert text to all caps, and prints it out
var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('filename: ', function(filename){

    // Close the readline.Interface instance & give control to the input & output streams
    rl.close();

    fs.readFile(filename, function(err, buffer){
        if(err){
            console.log(err.message);
            return; //return method stops everything
        }
        var content = buffer.toString();
        var upcased = content.toUpperCase();
        console.log(upcased);
    })
})