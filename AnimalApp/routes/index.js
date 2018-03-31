
const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', function(request, response){

    const pagePhotos = [];

    fs.readdir("public/images", function(err, files){
        if (err) {
            console.log('Ah Shit it messed up!');
        }else{
            setTimeout(function(){
                for(let j=0; j < files.length; j++){
                    pagePhotos.push(files[j]);
                }

            });
        }
        //console.log(pagePhotos);

    });


    response.render('index', {
        pageTitle: 'Zeus and Biscuit',
        pageID: 'main',
        pictures: pagePhotos
    });
});

module.exports = router;