const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/sneaky', function(request, response){

    const pagePhotos = fs.readdirSync('public/images/creepin');

    response.render('sneakyIndex', {
        pageTitle: 'Ninja Monkeys',
        pageID: 'sneaky',
        pictures: pagePhotos
    });
});

module.exports = router;