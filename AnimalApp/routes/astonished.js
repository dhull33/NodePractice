const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/astonished', function(request, response){

    const pagePhotos = fs.readdirSync('public/images/astonished');

    response.render('astonIndex', {
        pageTitle: 'Shocked Primates',
        pageID: 'shocked',
        pictures: pagePhotos
    });
});

module.exports = router;