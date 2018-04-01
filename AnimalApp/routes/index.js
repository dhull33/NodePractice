
const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/', function(request, response){

    const pagePhotos = fs.readdirSync('public/images/beach');

    response.render('index', {
        pageTitle: 'Zeus and Biscuit',
        pageID: 'main',
        pictures: pagePhotos
    });
});

module.exports = router;