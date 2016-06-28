let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

exports.parseHex = function (str) {
    if (/^(rgb|RGB)/.test()) {
        var aColor = str.replace(/(?:||rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (let i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = str;
        }
        return strHex;
    } else if (reg.test(str)) {
        var aNum = str.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return str;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (let i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return str;
    }
};

exports.parseRgb = function (str) {
    var sColor = str.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = "#";
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",") + ")";
    } else {
        return sColor;
    }
};

exports.parseRGB = function (str) {
    if (!str) return undefined;
    let reg_rgba = /[RGB|rgb]\(([\d]+),([\d]+),([\d]+)\)/;
    let _rgb = str.match(reg_rgba).map(_str=>parseInt(_str));
    return [_rgb[1], _rgb[2], _rgb[3]];
};