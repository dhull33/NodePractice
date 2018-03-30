
const express = require('express');
const router = express.Router();

router.get('/', function(request, response){
    /*
    let pagePhotos = [];

    public.images.forEach(function(item){
        pagePhotos = pagePhotos.concat(item);
    }); */

    response.render('index');
});

module.exports = router;