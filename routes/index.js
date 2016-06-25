var express = require('express');
var router = express.Router();
var Canvas = require('canvas');




/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get(/\/([\d]+)[x|X]([\d]+)/, (req, res, next)=> {
    console.log(req.params);
    let {'0':_width, '1':_height}=req.params;

    let canvas = new Canvas(200, 200)
        , ctx = canvas.getContext('2d');

    ctx.font = '30px Impact';
    ctx.rotate(.1);
    ctx.fillText("Awesome!", 50, 100);
    var te = ctx.measureText('youudehexie!');
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.lineTo(50, 102);
    ctx.lineTo(50 + te.width, 102);
    ctx.stroke();

    console.log('<img src="' + canvas.toDataURL() + '" />');

});

module.exports = router;

