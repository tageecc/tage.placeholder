var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get(/\/([\d]+)[x|X]([\d]+)/, (req, res, next)=> {
    console.log(req.params);
    let {'0':_width, '1':_height}=req.params;

});

module.exports = router;

