
const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', function(request, response){

    const pagePhotos = fs.readdirSync("public/images");

    console.log(pagePhotos[1]);


    response.render('index', {
        pageTitle: 'Zeus and Biscuit',
        pageID: 'main',
        pictures: pagePhotos
    });
});

module.exports = router;