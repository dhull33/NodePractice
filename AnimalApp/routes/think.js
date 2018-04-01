const express = require('express');
const router = express.Router();
const fs = require("fs");

router.get('/thinking', function(request, response){

    const pagePhotos = fs.readdirSync('public/images/deepThink');

    response.render('index', {
        pageTitle: 'Thinking Monkeys',
        pageID: 'think',
        pictures: pagePhotos
    });
});

module.exports = router;