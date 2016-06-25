var express = require('express');
var router = express.Router();
var images = require("images");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get(/\/([\d]+)[x|X]([\d]+)/, (req, res, next)=> {
    let {'0':_width, '1':_height}=req.params;
    let img = images(parseInt(_width), parseInt(_height))
        .fill(204,204,204,1)
        .encode("jpg");
    res.contentType('image/jpeg');
    res.write(img,'binary');
    res.end();
});

module.exports = router;

