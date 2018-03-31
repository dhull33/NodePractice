
const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', function(request, response){



    const pics = fs.readdir("public/images", function(err, files){

        if (err) {
            console.log('Ah Shit it messed up!');
        }else{
            this.pagePhotos = [];
            this.pagePhotos.push(files);
            console.log(this.pagePhotos);
        }
    });

    console.log(pics);

    response.render('index');
});

module.exports = router;