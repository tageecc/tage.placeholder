let express = require('express');
let router = express.Router();
let images = require('images');
let Color = require('../util/color');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'placeholder-images'});
});

router.get(/\/([\d]+)[x|X]([\d]+)/, (req, res, next)=> {
    let {'0':_width, '1':_height}=req.params;
    let _rgba = Color.parseRGB(req.query.color);
    let [_color=[204, 204, 204],_type='jpg',_opacity=1]=[[_rgba[1], _rgba[2], _rgba[3]], req.query.type, parseFloat(req.query.opacity)];
    let _type_index = ['jpg', 'png'].findIndex(item=>item == _type);
    if (_type_index < 0) {
        res.status(404);
        res.end();
        return;
    }
    let img = images(parseInt(_width), parseInt(_height))
        .fill(_color[0], _color[1], _color[2], _opacity)
        .encode(_type);
    res.contentType('image/' + ['jpeg', 'png'][_type_index]);
    res.write(img, 'binary');
    res.end();
});

module.exports = router;

