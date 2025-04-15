'use strict';

var jsxRuntime = require('react/jsx-runtime');
var reactNative = require('react-native');
var React = require('react');
var reactNativeRatings = require('react-native-ratings');
var reactNativeSafeAreaContext = require('react-native-safe-area-context');

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var colorString = {exports: {}};

var colorName$1;
var hasRequiredColorName$1;

function requireColorName$1 () {
	if (hasRequiredColorName$1) return colorName$1;
	hasRequiredColorName$1 = 1;

	colorName$1 = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};
	return colorName$1;
}

var simpleSwizzle = {exports: {}};

var isArrayish;
var hasRequiredIsArrayish;

function requireIsArrayish () {
	if (hasRequiredIsArrayish) return isArrayish;
	hasRequiredIsArrayish = 1;
	isArrayish = function isArrayish(obj) {
		if (!obj || typeof obj === 'string') {
			return false;
		}

		return obj instanceof Array || Array.isArray(obj) ||
			(obj.length >= 0 && (obj.splice instanceof Function ||
				(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
	};
	return isArrayish;
}

var hasRequiredSimpleSwizzle;

function requireSimpleSwizzle () {
	if (hasRequiredSimpleSwizzle) return simpleSwizzle.exports;
	hasRequiredSimpleSwizzle = 1;

	var isArrayish = requireIsArrayish();

	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle = simpleSwizzle.exports = function swizzle(args) {
		var results = [];

		for (var i = 0, len = args.length; i < len; i++) {
			var arg = args[i];

			if (isArrayish(arg)) {
				// http://jsperf.com/javascript-array-concat-vs-push/98
				results = concat.call(results, slice.call(arg));
			} else {
				results.push(arg);
			}
		}

		return results;
	};

	swizzle.wrap = function (fn) {
		return function () {
			return fn(swizzle(arguments));
		};
	};
	return simpleSwizzle.exports;
}

/* MIT license */

var hasRequiredColorString;

function requireColorString () {
	if (hasRequiredColorString) return colorString.exports;
	hasRequiredColorString = 1;
	var colorNames = requireColorName$1();
	var swizzle = requireSimpleSwizzle();
	var hasOwnProperty = Object.hasOwnProperty;

	var reverseNames = Object.create(null);

	// create a list of reverse color names
	for (var name in colorNames) {
		if (hasOwnProperty.call(colorNames, name)) {
			reverseNames[colorNames[name]] = name;
		}
	}

	var cs = colorString.exports = {
		to: {},
		get: {}
	};

	cs.get = function (string) {
		var prefix = string.substring(0, 3).toLowerCase();
		var val;
		var model;
		switch (prefix) {
			case 'hsl':
				val = cs.get.hsl(string);
				model = 'hsl';
				break;
			case 'hwb':
				val = cs.get.hwb(string);
				model = 'hwb';
				break;
			default:
				val = cs.get.rgb(string);
				model = 'rgb';
				break;
		}

		if (!val) {
			return null;
		}

		return {model: model, value: val};
	};

	cs.get.rgb = function (string) {
		if (!string) {
			return null;
		}

		var abbr = /^#([a-f0-9]{3,4})$/i;
		var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
		var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
		var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
		var keyword = /^(\w+)$/;

		var rgb = [0, 0, 0, 1];
		var match;
		var i;
		var hexAlpha;

		if (match = string.match(hex)) {
			hexAlpha = match[2];
			match = match[1];

			for (i = 0; i < 3; i++) {
				// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
				var i2 = i * 2;
				rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
			}

			if (hexAlpha) {
				rgb[3] = parseInt(hexAlpha, 16) / 255;
			}
		} else if (match = string.match(abbr)) {
			match = match[1];
			hexAlpha = match[3];

			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i] + match[i], 16);
			}

			if (hexAlpha) {
				rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
			}
		} else if (match = string.match(rgba)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = parseInt(match[i + 1], 0);
			}

			if (match[4]) {
				if (match[5]) {
					rgb[3] = parseFloat(match[4]) * 0.01;
				} else {
					rgb[3] = parseFloat(match[4]);
				}
			}
		} else if (match = string.match(per)) {
			for (i = 0; i < 3; i++) {
				rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			}

			if (match[4]) {
				if (match[5]) {
					rgb[3] = parseFloat(match[4]) * 0.01;
				} else {
					rgb[3] = parseFloat(match[4]);
				}
			}
		} else if (match = string.match(keyword)) {
			if (match[1] === 'transparent') {
				return [0, 0, 0, 0];
			}

			if (!hasOwnProperty.call(colorNames, match[1])) {
				return null;
			}

			rgb = colorNames[match[1]];
			rgb[3] = 1;

			return rgb;
		} else {
			return null;
		}

		for (i = 0; i < 3; i++) {
			rgb[i] = clamp(rgb[i], 0, 255);
		}
		rgb[3] = clamp(rgb[3], 0, 1);

		return rgb;
	};

	cs.get.hsl = function (string) {
		if (!string) {
			return null;
		}

		var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
		var match = string.match(hsl);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var s = clamp(parseFloat(match[2]), 0, 100);
			var l = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

			return [h, s, l, a];
		}

		return null;
	};

	cs.get.hwb = function (string) {
		if (!string) {
			return null;
		}

		var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
		var match = string.match(hwb);

		if (match) {
			var alpha = parseFloat(match[4]);
			var h = ((parseFloat(match[1]) % 360) + 360) % 360;
			var w = clamp(parseFloat(match[2]), 0, 100);
			var b = clamp(parseFloat(match[3]), 0, 100);
			var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
			return [h, w, b, a];
		}

		return null;
	};

	cs.to.hex = function () {
		var rgba = swizzle(arguments);

		return (
			'#' +
			hexDouble(rgba[0]) +
			hexDouble(rgba[1]) +
			hexDouble(rgba[2]) +
			(rgba[3] < 1
				? (hexDouble(Math.round(rgba[3] * 255)))
				: '')
		);
	};

	cs.to.rgb = function () {
		var rgba = swizzle(arguments);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
			: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
		var rgba = swizzle(arguments);

		var r = Math.round(rgba[0] / 255 * 100);
		var g = Math.round(rgba[1] / 255 * 100);
		var b = Math.round(rgba[2] / 255 * 100);

		return rgba.length < 4 || rgba[3] === 1
			? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
			: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
		var hsla = swizzle(arguments);
		return hsla.length < 4 || hsla[3] === 1
			? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
			: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	};

	// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)
	cs.to.hwb = function () {
		var hwba = swizzle(arguments);

		var a = '';
		if (hwba.length >= 4 && hwba[3] !== 1) {
			a = ', ' + hwba[3];
		}

		return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
		return reverseNames[rgb.slice(0, 3)];
	};

	// helpers
	function clamp(num, min, max) {
		return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
		var str = Math.round(num).toString(16).toUpperCase();
		return (str.length < 2) ? '0' + str : str;
	}
	return colorString.exports;
}

var conversions = {exports: {}};

var colorName;
var hasRequiredColorName;

function requireColorName () {
	if (hasRequiredColorName) return colorName;
	hasRequiredColorName = 1;

	colorName = {
		"aliceblue": [240, 248, 255],
		"antiquewhite": [250, 235, 215],
		"aqua": [0, 255, 255],
		"aquamarine": [127, 255, 212],
		"azure": [240, 255, 255],
		"beige": [245, 245, 220],
		"bisque": [255, 228, 196],
		"black": [0, 0, 0],
		"blanchedalmond": [255, 235, 205],
		"blue": [0, 0, 255],
		"blueviolet": [138, 43, 226],
		"brown": [165, 42, 42],
		"burlywood": [222, 184, 135],
		"cadetblue": [95, 158, 160],
		"chartreuse": [127, 255, 0],
		"chocolate": [210, 105, 30],
		"coral": [255, 127, 80],
		"cornflowerblue": [100, 149, 237],
		"cornsilk": [255, 248, 220],
		"crimson": [220, 20, 60],
		"cyan": [0, 255, 255],
		"darkblue": [0, 0, 139],
		"darkcyan": [0, 139, 139],
		"darkgoldenrod": [184, 134, 11],
		"darkgray": [169, 169, 169],
		"darkgreen": [0, 100, 0],
		"darkgrey": [169, 169, 169],
		"darkkhaki": [189, 183, 107],
		"darkmagenta": [139, 0, 139],
		"darkolivegreen": [85, 107, 47],
		"darkorange": [255, 140, 0],
		"darkorchid": [153, 50, 204],
		"darkred": [139, 0, 0],
		"darksalmon": [233, 150, 122],
		"darkseagreen": [143, 188, 143],
		"darkslateblue": [72, 61, 139],
		"darkslategray": [47, 79, 79],
		"darkslategrey": [47, 79, 79],
		"darkturquoise": [0, 206, 209],
		"darkviolet": [148, 0, 211],
		"deeppink": [255, 20, 147],
		"deepskyblue": [0, 191, 255],
		"dimgray": [105, 105, 105],
		"dimgrey": [105, 105, 105],
		"dodgerblue": [30, 144, 255],
		"firebrick": [178, 34, 34],
		"floralwhite": [255, 250, 240],
		"forestgreen": [34, 139, 34],
		"fuchsia": [255, 0, 255],
		"gainsboro": [220, 220, 220],
		"ghostwhite": [248, 248, 255],
		"gold": [255, 215, 0],
		"goldenrod": [218, 165, 32],
		"gray": [128, 128, 128],
		"green": [0, 128, 0],
		"greenyellow": [173, 255, 47],
		"grey": [128, 128, 128],
		"honeydew": [240, 255, 240],
		"hotpink": [255, 105, 180],
		"indianred": [205, 92, 92],
		"indigo": [75, 0, 130],
		"ivory": [255, 255, 240],
		"khaki": [240, 230, 140],
		"lavender": [230, 230, 250],
		"lavenderblush": [255, 240, 245],
		"lawngreen": [124, 252, 0],
		"lemonchiffon": [255, 250, 205],
		"lightblue": [173, 216, 230],
		"lightcoral": [240, 128, 128],
		"lightcyan": [224, 255, 255],
		"lightgoldenrodyellow": [250, 250, 210],
		"lightgray": [211, 211, 211],
		"lightgreen": [144, 238, 144],
		"lightgrey": [211, 211, 211],
		"lightpink": [255, 182, 193],
		"lightsalmon": [255, 160, 122],
		"lightseagreen": [32, 178, 170],
		"lightskyblue": [135, 206, 250],
		"lightslategray": [119, 136, 153],
		"lightslategrey": [119, 136, 153],
		"lightsteelblue": [176, 196, 222],
		"lightyellow": [255, 255, 224],
		"lime": [0, 255, 0],
		"limegreen": [50, 205, 50],
		"linen": [250, 240, 230],
		"magenta": [255, 0, 255],
		"maroon": [128, 0, 0],
		"mediumaquamarine": [102, 205, 170],
		"mediumblue": [0, 0, 205],
		"mediumorchid": [186, 85, 211],
		"mediumpurple": [147, 112, 219],
		"mediumseagreen": [60, 179, 113],
		"mediumslateblue": [123, 104, 238],
		"mediumspringgreen": [0, 250, 154],
		"mediumturquoise": [72, 209, 204],
		"mediumvioletred": [199, 21, 133],
		"midnightblue": [25, 25, 112],
		"mintcream": [245, 255, 250],
		"mistyrose": [255, 228, 225],
		"moccasin": [255, 228, 181],
		"navajowhite": [255, 222, 173],
		"navy": [0, 0, 128],
		"oldlace": [253, 245, 230],
		"olive": [128, 128, 0],
		"olivedrab": [107, 142, 35],
		"orange": [255, 165, 0],
		"orangered": [255, 69, 0],
		"orchid": [218, 112, 214],
		"palegoldenrod": [238, 232, 170],
		"palegreen": [152, 251, 152],
		"paleturquoise": [175, 238, 238],
		"palevioletred": [219, 112, 147],
		"papayawhip": [255, 239, 213],
		"peachpuff": [255, 218, 185],
		"peru": [205, 133, 63],
		"pink": [255, 192, 203],
		"plum": [221, 160, 221],
		"powderblue": [176, 224, 230],
		"purple": [128, 0, 128],
		"rebeccapurple": [102, 51, 153],
		"red": [255, 0, 0],
		"rosybrown": [188, 143, 143],
		"royalblue": [65, 105, 225],
		"saddlebrown": [139, 69, 19],
		"salmon": [250, 128, 114],
		"sandybrown": [244, 164, 96],
		"seagreen": [46, 139, 87],
		"seashell": [255, 245, 238],
		"sienna": [160, 82, 45],
		"silver": [192, 192, 192],
		"skyblue": [135, 206, 235],
		"slateblue": [106, 90, 205],
		"slategray": [112, 128, 144],
		"slategrey": [112, 128, 144],
		"snow": [255, 250, 250],
		"springgreen": [0, 255, 127],
		"steelblue": [70, 130, 180],
		"tan": [210, 180, 140],
		"teal": [0, 128, 128],
		"thistle": [216, 191, 216],
		"tomato": [255, 99, 71],
		"turquoise": [64, 224, 208],
		"violet": [238, 130, 238],
		"wheat": [245, 222, 179],
		"white": [255, 255, 255],
		"whitesmoke": [245, 245, 245],
		"yellow": [255, 255, 0],
		"yellowgreen": [154, 205, 50]
	};
	return colorName;
}

/* MIT license */

var hasRequiredConversions;

function requireConversions () {
	if (hasRequiredConversions) return conversions.exports;
	hasRequiredConversions = 1;
	var cssKeywords = requireColorName();

	// NOTE: conversions should only return primitive values (i.e. arrays, or
	//       values that give correct `typeof` results).
	//       do not use box values types (i.e. Number(), String(), etc.)

	var reverseKeywords = {};
	for (var key in cssKeywords) {
		if (cssKeywords.hasOwnProperty(key)) {
			reverseKeywords[cssKeywords[key]] = key;
		}
	}

	var convert = conversions.exports = {
		rgb: {channels: 3, labels: 'rgb'},
		hsl: {channels: 3, labels: 'hsl'},
		hsv: {channels: 3, labels: 'hsv'},
		hwb: {channels: 3, labels: 'hwb'},
		cmyk: {channels: 4, labels: 'cmyk'},
		xyz: {channels: 3, labels: 'xyz'},
		lab: {channels: 3, labels: 'lab'},
		lch: {channels: 3, labels: 'lch'},
		hex: {channels: 1, labels: ['hex']},
		keyword: {channels: 1, labels: ['keyword']},
		ansi16: {channels: 1, labels: ['ansi16']},
		ansi256: {channels: 1, labels: ['ansi256']},
		hcg: {channels: 3, labels: ['h', 'c', 'g']},
		apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
		gray: {channels: 1, labels: ['gray']}
	};

	// hide .channels and .labels properties
	for (var model in convert) {
		if (convert.hasOwnProperty(model)) {
			if (!('channels' in convert[model])) {
				throw new Error('missing channels property: ' + model);
			}

			if (!('labels' in convert[model])) {
				throw new Error('missing channel labels property: ' + model);
			}

			if (convert[model].labels.length !== convert[model].channels) {
				throw new Error('channel and label counts mismatch: ' + model);
			}

			var channels = convert[model].channels;
			var labels = convert[model].labels;
			delete convert[model].channels;
			delete convert[model].labels;
			Object.defineProperty(convert[model], 'channels', {value: channels});
			Object.defineProperty(convert[model], 'labels', {value: labels});
		}
	}

	convert.rgb.hsl = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var min = Math.min(r, g, b);
		var max = Math.max(r, g, b);
		var delta = max - min;
		var h;
		var s;
		var l;

		if (max === min) {
			h = 0;
		} else if (r === max) {
			h = (g - b) / delta;
		} else if (g === max) {
			h = 2 + (b - r) / delta;
		} else if (b === max) {
			h = 4 + (r - g) / delta;
		}

		h = Math.min(h * 60, 360);

		if (h < 0) {
			h += 360;
		}

		l = (min + max) / 2;

		if (max === min) {
			s = 0;
		} else if (l <= 0.5) {
			s = delta / (max + min);
		} else {
			s = delta / (2 - max - min);
		}

		return [h, s * 100, l * 100];
	};

	convert.rgb.hsv = function (rgb) {
		var rdif;
		var gdif;
		var bdif;
		var h;
		var s;

		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var v = Math.max(r, g, b);
		var diff = v - Math.min(r, g, b);
		var diffc = function (c) {
			return (v - c) / 6 / diff + 1 / 2;
		};

		if (diff === 0) {
			h = s = 0;
		} else {
			s = diff / v;
			rdif = diffc(r);
			gdif = diffc(g);
			bdif = diffc(b);

			if (r === v) {
				h = bdif - gdif;
			} else if (g === v) {
				h = (1 / 3) + rdif - bdif;
			} else if (b === v) {
				h = (2 / 3) + gdif - rdif;
			}
			if (h < 0) {
				h += 1;
			} else if (h > 1) {
				h -= 1;
			}
		}

		return [
			h * 360,
			s * 100,
			v * 100
		];
	};

	convert.rgb.hwb = function (rgb) {
		var r = rgb[0];
		var g = rgb[1];
		var b = rgb[2];
		var h = convert.rgb.hsl(rgb)[0];
		var w = 1 / 255 * Math.min(r, Math.min(g, b));

		b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

		return [h, w * 100, b * 100];
	};

	convert.rgb.cmyk = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var c;
		var m;
		var y;
		var k;

		k = Math.min(1 - r, 1 - g, 1 - b);
		c = (1 - r - k) / (1 - k) || 0;
		m = (1 - g - k) / (1 - k) || 0;
		y = (1 - b - k) / (1 - k) || 0;

		return [c * 100, m * 100, y * 100, k * 100];
	};

	/**
	 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	 * */
	function comparativeDistance(x, y) {
		return (
			Math.pow(x[0] - y[0], 2) +
			Math.pow(x[1] - y[1], 2) +
			Math.pow(x[2] - y[2], 2)
		);
	}

	convert.rgb.keyword = function (rgb) {
		var reversed = reverseKeywords[rgb];
		if (reversed) {
			return reversed;
		}

		var currentClosestDistance = Infinity;
		var currentClosestKeyword;

		for (var keyword in cssKeywords) {
			if (cssKeywords.hasOwnProperty(keyword)) {
				var value = cssKeywords[keyword];

				// Compute comparative distance
				var distance = comparativeDistance(rgb, value);

				// Check if its less, if so set as closest
				if (distance < currentClosestDistance) {
					currentClosestDistance = distance;
					currentClosestKeyword = keyword;
				}
			}
		}

		return currentClosestKeyword;
	};

	convert.keyword.rgb = function (keyword) {
		return cssKeywords[keyword];
	};

	convert.rgb.xyz = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;

		// assume sRGB
		r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
		g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
		b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

		var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
		var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

		return [x * 100, y * 100, z * 100];
	};

	convert.rgb.lab = function (rgb) {
		var xyz = convert.rgb.xyz(rgb);
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.hsl.rgb = function (hsl) {
		var h = hsl[0] / 360;
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var t1;
		var t2;
		var t3;
		var rgb;
		var val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		} else {
			t2 = l + s - l * s;
		}

		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * -(i - 1);
			if (t3 < 0) {
				t3++;
			}
			if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			} else if (2 * t3 < 1) {
				val = t2;
			} else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			} else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	};

	convert.hsl.hsv = function (hsl) {
		var h = hsl[0];
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var smin = s;
		var lmin = Math.max(l, 0.01);
		var sv;
		var v;

		l *= 2;
		s *= (l <= 1) ? l : 2 - l;
		smin *= lmin <= 1 ? lmin : 2 - lmin;
		v = (l + s) / 2;
		sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

		return [h, sv * 100, v * 100];
	};

	convert.hsv.rgb = function (hsv) {
		var h = hsv[0] / 60;
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var hi = Math.floor(h) % 6;

		var f = h - Math.floor(h);
		var p = 255 * v * (1 - s);
		var q = 255 * v * (1 - (s * f));
		var t = 255 * v * (1 - (s * (1 - f)));
		v *= 255;

		switch (hi) {
			case 0:
				return [v, t, p];
			case 1:
				return [q, v, p];
			case 2:
				return [p, v, t];
			case 3:
				return [p, q, v];
			case 4:
				return [t, p, v];
			case 5:
				return [v, p, q];
		}
	};

	convert.hsv.hsl = function (hsv) {
		var h = hsv[0];
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;
		var vmin = Math.max(v, 0.01);
		var lmin;
		var sl;
		var l;

		l = (2 - s) * v;
		lmin = (2 - s) * vmin;
		sl = s * vmin;
		sl /= (lmin <= 1) ? lmin : 2 - lmin;
		sl = sl || 0;
		l /= 2;

		return [h, sl * 100, l * 100];
	};

	// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
	convert.hwb.rgb = function (hwb) {
		var h = hwb[0] / 360;
		var wh = hwb[1] / 100;
		var bl = hwb[2] / 100;
		var ratio = wh + bl;
		var i;
		var v;
		var f;
		var n;

		// wh + bl cant be > 1
		if (ratio > 1) {
			wh /= ratio;
			bl /= ratio;
		}

		i = Math.floor(6 * h);
		v = 1 - bl;
		f = 6 * h - i;

		if ((i & 0x01) !== 0) {
			f = 1 - f;
		}

		n = wh + f * (v - wh); // linear interpolation

		var r;
		var g;
		var b;
		switch (i) {
			default:
			case 6:
			case 0: r = v; g = n; b = wh; break;
			case 1: r = n; g = v; b = wh; break;
			case 2: r = wh; g = v; b = n; break;
			case 3: r = wh; g = n; b = v; break;
			case 4: r = n; g = wh; b = v; break;
			case 5: r = v; g = wh; b = n; break;
		}

		return [r * 255, g * 255, b * 255];
	};

	convert.cmyk.rgb = function (cmyk) {
		var c = cmyk[0] / 100;
		var m = cmyk[1] / 100;
		var y = cmyk[2] / 100;
		var k = cmyk[3] / 100;
		var r;
		var g;
		var b;

		r = 1 - Math.min(1, c * (1 - k) + k);
		g = 1 - Math.min(1, m * (1 - k) + k);
		b = 1 - Math.min(1, y * (1 - k) + k);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.rgb = function (xyz) {
		var x = xyz[0] / 100;
		var y = xyz[1] / 100;
		var z = xyz[2] / 100;
		var r;
		var g;
		var b;

		r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
		b = (x * 0.0557) + (y * -0.204) + (z * 1.0570);

		// assume sRGB
		r = r > 0.0031308
			? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
			: r * 12.92;

		g = g > 0.0031308
			? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
			: g * 12.92;

		b = b > 0.0031308
			? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
			: b * 12.92;

		r = Math.min(Math.max(0, r), 1);
		g = Math.min(Math.max(0, g), 1);
		b = Math.min(Math.max(0, b), 1);

		return [r * 255, g * 255, b * 255];
	};

	convert.xyz.lab = function (xyz) {
		var x = xyz[0];
		var y = xyz[1];
		var z = xyz[2];
		var l;
		var a;
		var b;

		x /= 95.047;
		y /= 100;
		z /= 108.883;

		x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

		l = (116 * y) - 16;
		a = 500 * (x - y);
		b = 200 * (y - z);

		return [l, a, b];
	};

	convert.lab.xyz = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var x;
		var y;
		var z;

		y = (l + 16) / 116;
		x = a / 500 + y;
		z = y - b / 200;

		var y2 = Math.pow(y, 3);
		var x2 = Math.pow(x, 3);
		var z2 = Math.pow(z, 3);
		y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
		x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
		z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

		x *= 95.047;
		y *= 100;
		z *= 108.883;

		return [x, y, z];
	};

	convert.lab.lch = function (lab) {
		var l = lab[0];
		var a = lab[1];
		var b = lab[2];
		var hr;
		var h;
		var c;

		hr = Math.atan2(b, a);
		h = hr * 360 / 2 / Math.PI;

		if (h < 0) {
			h += 360;
		}

		c = Math.sqrt(a * a + b * b);

		return [l, c, h];
	};

	convert.lch.lab = function (lch) {
		var l = lch[0];
		var c = lch[1];
		var h = lch[2];
		var a;
		var b;
		var hr;

		hr = h / 360 * 2 * Math.PI;
		a = c * Math.cos(hr);
		b = c * Math.sin(hr);

		return [l, a, b];
	};

	convert.rgb.ansi16 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];
		var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

		value = Math.round(value / 50);

		if (value === 0) {
			return 30;
		}

		var ansi = 30
			+ ((Math.round(b / 255) << 2)
			| (Math.round(g / 255) << 1)
			| Math.round(r / 255));

		if (value === 2) {
			ansi += 60;
		}

		return ansi;
	};

	convert.hsv.ansi16 = function (args) {
		// optimization here; we already know the value and don't need to get
		// it converted for us.
		return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
	};

	convert.rgb.ansi256 = function (args) {
		var r = args[0];
		var g = args[1];
		var b = args[2];

		// we use the extended greyscale palette here, with the exception of
		// black and white. normal palette only has 4 greyscale shades.
		if (r === g && g === b) {
			if (r < 8) {
				return 16;
			}

			if (r > 248) {
				return 231;
			}

			return Math.round(((r - 8) / 247) * 24) + 232;
		}

		var ansi = 16
			+ (36 * Math.round(r / 255 * 5))
			+ (6 * Math.round(g / 255 * 5))
			+ Math.round(b / 255 * 5);

		return ansi;
	};

	convert.ansi16.rgb = function (args) {
		var color = args % 10;

		// handle greyscale
		if (color === 0 || color === 7) {
			if (args > 50) {
				color += 3.5;
			}

			color = color / 10.5 * 255;

			return [color, color, color];
		}

		var mult = (~~(args > 50) + 1) * 0.5;
		var r = ((color & 1) * mult) * 255;
		var g = (((color >> 1) & 1) * mult) * 255;
		var b = (((color >> 2) & 1) * mult) * 255;

		return [r, g, b];
	};

	convert.ansi256.rgb = function (args) {
		// handle greyscale
		if (args >= 232) {
			var c = (args - 232) * 10 + 8;
			return [c, c, c];
		}

		args -= 16;

		var rem;
		var r = Math.floor(args / 36) / 5 * 255;
		var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
		var b = (rem % 6) / 5 * 255;

		return [r, g, b];
	};

	convert.rgb.hex = function (args) {
		var integer = ((Math.round(args[0]) & 0xFF) << 16)
			+ ((Math.round(args[1]) & 0xFF) << 8)
			+ (Math.round(args[2]) & 0xFF);

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.hex.rgb = function (args) {
		var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
		if (!match) {
			return [0, 0, 0];
		}

		var colorString = match[0];

		if (match[0].length === 3) {
			colorString = colorString.split('').map(function (char) {
				return char + char;
			}).join('');
		}

		var integer = parseInt(colorString, 16);
		var r = (integer >> 16) & 0xFF;
		var g = (integer >> 8) & 0xFF;
		var b = integer & 0xFF;

		return [r, g, b];
	};

	convert.rgb.hcg = function (rgb) {
		var r = rgb[0] / 255;
		var g = rgb[1] / 255;
		var b = rgb[2] / 255;
		var max = Math.max(Math.max(r, g), b);
		var min = Math.min(Math.min(r, g), b);
		var chroma = (max - min);
		var grayscale;
		var hue;

		if (chroma < 1) {
			grayscale = min / (1 - chroma);
		} else {
			grayscale = 0;
		}

		if (chroma <= 0) {
			hue = 0;
		} else
		if (max === r) {
			hue = ((g - b) / chroma) % 6;
		} else
		if (max === g) {
			hue = 2 + (b - r) / chroma;
		} else {
			hue = 4 + (r - g) / chroma + 4;
		}

		hue /= 6;
		hue %= 1;

		return [hue * 360, chroma * 100, grayscale * 100];
	};

	convert.hsl.hcg = function (hsl) {
		var s = hsl[1] / 100;
		var l = hsl[2] / 100;
		var c = 1;
		var f = 0;

		if (l < 0.5) {
			c = 2.0 * s * l;
		} else {
			c = 2.0 * s * (1.0 - l);
		}

		if (c < 1.0) {
			f = (l - 0.5 * c) / (1.0 - c);
		}

		return [hsl[0], c * 100, f * 100];
	};

	convert.hsv.hcg = function (hsv) {
		var s = hsv[1] / 100;
		var v = hsv[2] / 100;

		var c = s * v;
		var f = 0;

		if (c < 1.0) {
			f = (v - c) / (1 - c);
		}

		return [hsv[0], c * 100, f * 100];
	};

	convert.hcg.rgb = function (hcg) {
		var h = hcg[0] / 360;
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		if (c === 0.0) {
			return [g * 255, g * 255, g * 255];
		}

		var pure = [0, 0, 0];
		var hi = (h % 1) * 6;
		var v = hi % 1;
		var w = 1 - v;
		var mg = 0;

		switch (Math.floor(hi)) {
			case 0:
				pure[0] = 1; pure[1] = v; pure[2] = 0; break;
			case 1:
				pure[0] = w; pure[1] = 1; pure[2] = 0; break;
			case 2:
				pure[0] = 0; pure[1] = 1; pure[2] = v; break;
			case 3:
				pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			case 4:
				pure[0] = v; pure[1] = 0; pure[2] = 1; break;
			default:
				pure[0] = 1; pure[1] = 0; pure[2] = w;
		}

		mg = (1.0 - c) * g;

		return [
			(c * pure[0] + mg) * 255,
			(c * pure[1] + mg) * 255,
			(c * pure[2] + mg) * 255
		];
	};

	convert.hcg.hsv = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var v = c + g * (1.0 - c);
		var f = 0;

		if (v > 0.0) {
			f = c / v;
		}

		return [hcg[0], f * 100, v * 100];
	};

	convert.hcg.hsl = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;

		var l = g * (1.0 - c) + 0.5 * c;
		var s = 0;

		if (l > 0.0 && l < 0.5) {
			s = c / (2 * l);
		} else
		if (l >= 0.5 && l < 1.0) {
			s = c / (2 * (1 - l));
		}

		return [hcg[0], s * 100, l * 100];
	};

	convert.hcg.hwb = function (hcg) {
		var c = hcg[1] / 100;
		var g = hcg[2] / 100;
		var v = c + g * (1.0 - c);
		return [hcg[0], (v - c) * 100, (1 - v) * 100];
	};

	convert.hwb.hcg = function (hwb) {
		var w = hwb[1] / 100;
		var b = hwb[2] / 100;
		var v = 1 - b;
		var c = v - w;
		var g = 0;

		if (c < 1) {
			g = (v - c) / (1 - c);
		}

		return [hwb[0], c * 100, g * 100];
	};

	convert.apple.rgb = function (apple) {
		return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
	};

	convert.rgb.apple = function (rgb) {
		return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
	};

	convert.gray.rgb = function (args) {
		return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
	};

	convert.gray.hsl = convert.gray.hsv = function (args) {
		return [0, 0, args[0]];
	};

	convert.gray.hwb = function (gray) {
		return [0, 100, gray[0]];
	};

	convert.gray.cmyk = function (gray) {
		return [0, 0, 0, gray[0]];
	};

	convert.gray.lab = function (gray) {
		return [gray[0], 0, 0];
	};

	convert.gray.hex = function (gray) {
		var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		var integer = (val << 16) + (val << 8) + val;

		var string = integer.toString(16).toUpperCase();
		return '000000'.substring(string.length) + string;
	};

	convert.rgb.gray = function (rgb) {
		var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		return [val / 255 * 100];
	};
	return conversions.exports;
}

var route;
var hasRequiredRoute;

function requireRoute () {
	if (hasRequiredRoute) return route;
	hasRequiredRoute = 1;
	var conversions = requireConversions();

	/*
		this function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

	function buildGraph() {
		var graph = {};
		// https://jsperf.com/object-keys-vs-for-in-with-closure/3
		var models = Object.keys(conversions);

		for (var len = models.length, i = 0; i < len; i++) {
			graph[models[i]] = {
				// http://jsperf.com/1-vs-infinity
				// micro-opt, but this is simple.
				distance: -1,
				parent: null
			};
		}

		return graph;
	}

	// https://en.wikipedia.org/wiki/Breadth-first_search
	function deriveBFS(fromModel) {
		var graph = buildGraph();
		var queue = [fromModel]; // unshift -> queue -> pop

		graph[fromModel].distance = 0;

		while (queue.length) {
			var current = queue.pop();
			var adjacents = Object.keys(conversions[current]);

			for (var len = adjacents.length, i = 0; i < len; i++) {
				var adjacent = adjacents[i];
				var node = graph[adjacent];

				if (node.distance === -1) {
					node.distance = graph[current].distance + 1;
					node.parent = current;
					queue.unshift(adjacent);
				}
			}
		}

		return graph;
	}

	function link(from, to) {
		return function (args) {
			return to(from(args));
		};
	}

	function wrapConversion(toModel, graph) {
		var path = [graph[toModel].parent, toModel];
		var fn = conversions[graph[toModel].parent][toModel];

		var cur = graph[toModel].parent;
		while (graph[cur].parent) {
			path.unshift(graph[cur].parent);
			fn = link(conversions[graph[cur].parent][cur], fn);
			cur = graph[cur].parent;
		}

		fn.conversion = path;
		return fn;
	}

	route = function (fromModel) {
		var graph = deriveBFS(fromModel);
		var conversion = {};

		var models = Object.keys(graph);
		for (var len = models.length, i = 0; i < len; i++) {
			var toModel = models[i];
			var node = graph[toModel];

			if (node.parent === null) {
				// no possible conversion, or this node is the source model.
				continue;
			}

			conversion[toModel] = wrapConversion(toModel, graph);
		}

		return conversion;
	};
	return route;
}

var colorConvert;
var hasRequiredColorConvert;

function requireColorConvert () {
	if (hasRequiredColorConvert) return colorConvert;
	hasRequiredColorConvert = 1;
	var conversions = requireConversions();
	var route = requireRoute();

	var convert = {};

	var models = Object.keys(conversions);

	function wrapRaw(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			return fn(args);
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	function wrapRounded(fn) {
		var wrappedFn = function (args) {
			if (args === undefined || args === null) {
				return args;
			}

			if (arguments.length > 1) {
				args = Array.prototype.slice.call(arguments);
			}

			var result = fn(args);

			// we're assuming the result is an array here.
			// see notice in conversions.js; don't use box types
			// in conversion functions.
			if (typeof result === 'object') {
				for (var len = result.length, i = 0; i < len; i++) {
					result[i] = Math.round(result[i]);
				}
			}

			return result;
		};

		// preserve .conversion property if there is one
		if ('conversion' in fn) {
			wrappedFn.conversion = fn.conversion;
		}

		return wrappedFn;
	}

	models.forEach(function (fromModel) {
		convert[fromModel] = {};

		Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
		Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

		var routes = route(fromModel);
		var routeModels = Object.keys(routes);

		routeModels.forEach(function (toModel) {
			var fn = routes[toModel];

			convert[fromModel][toModel] = wrapRounded(fn);
			convert[fromModel][toModel].raw = wrapRaw(fn);
		});
	});

	colorConvert = convert;
	return colorConvert;
}

var color;
var hasRequiredColor;

function requireColor () {
	if (hasRequiredColor) return color;
	hasRequiredColor = 1;

	var colorString = requireColorString();
	var convert = requireColorConvert();

	var _slice = [].slice;

	var skippedModels = [
		// to be honest, I don't really feel like keyword belongs in color convert, but eh.
		'keyword',

		// gray conflicts with some method names, and has its own method defined.
		'gray',

		// shouldn't really be in color-convert either...
		'hex'
	];

	var hashedModelKeys = {};
	Object.keys(convert).forEach(function (model) {
		hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
	});

	var limiters = {};

	function Color(obj, model) {
		if (!(this instanceof Color)) {
			return new Color(obj, model);
		}

		if (model && model in skippedModels) {
			model = null;
		}

		if (model && !(model in convert)) {
			throw new Error('Unknown model: ' + model);
		}

		var i;
		var channels;

		if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
			this.model = 'rgb';
			this.color = [0, 0, 0];
			this.valpha = 1;
		} else if (obj instanceof Color) {
			this.model = obj.model;
			this.color = obj.color.slice();
			this.valpha = obj.valpha;
		} else if (typeof obj === 'string') {
			var result = colorString.get(obj);
			if (result === null) {
				throw new Error('Unable to parse color from string: ' + obj);
			}

			this.model = result.model;
			channels = convert[this.model].channels;
			this.color = result.value.slice(0, channels);
			this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
		} else if (obj.length) {
			this.model = model || 'rgb';
			channels = convert[this.model].channels;
			var newArr = _slice.call(obj, 0, channels);
			this.color = zeroArray(newArr, channels);
			this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
		} else if (typeof obj === 'number') {
			// this is always RGB - can be converted later on.
			obj &= 0xFFFFFF;
			this.model = 'rgb';
			this.color = [
				(obj >> 16) & 0xFF,
				(obj >> 8) & 0xFF,
				obj & 0xFF
			];
			this.valpha = 1;
		} else {
			this.valpha = 1;

			var keys = Object.keys(obj);
			if ('alpha' in obj) {
				keys.splice(keys.indexOf('alpha'), 1);
				this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
			}

			var hashedKeys = keys.sort().join('');
			if (!(hashedKeys in hashedModelKeys)) {
				throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
			}

			this.model = hashedModelKeys[hashedKeys];

			var labels = convert[this.model].labels;
			var color = [];
			for (i = 0; i < labels.length; i++) {
				color.push(obj[labels[i]]);
			}

			this.color = zeroArray(color);
		}

		// perform limitations (clamping, etc.)
		if (limiters[this.model]) {
			channels = convert[this.model].channels;
			for (i = 0; i < channels; i++) {
				var limit = limiters[this.model][i];
				if (limit) {
					this.color[i] = limit(this.color[i]);
				}
			}
		}

		this.valpha = Math.max(0, Math.min(1, this.valpha));

		if (Object.freeze) {
			Object.freeze(this);
		}
	}

	Color.prototype = {
		toString: function () {
			return this.string();
		},

		toJSON: function () {
			return this[this.model]();
		},

		string: function (places) {
			var self = this.model in colorString.to ? this : this.rgb();
			self = self.round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to[self.model](args);
		},

		percentString: function (places) {
			var self = this.rgb().round(typeof places === 'number' ? places : 1);
			var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
			return colorString.to.rgb.percent(args);
		},

		array: function () {
			return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
		},

		object: function () {
			var result = {};
			var channels = convert[this.model].channels;
			var labels = convert[this.model].labels;

			for (var i = 0; i < channels; i++) {
				result[labels[i]] = this.color[i];
			}

			if (this.valpha !== 1) {
				result.alpha = this.valpha;
			}

			return result;
		},

		unitArray: function () {
			var rgb = this.rgb().color;
			rgb[0] /= 255;
			rgb[1] /= 255;
			rgb[2] /= 255;

			if (this.valpha !== 1) {
				rgb.push(this.valpha);
			}

			return rgb;
		},

		unitObject: function () {
			var rgb = this.rgb().object();
			rgb.r /= 255;
			rgb.g /= 255;
			rgb.b /= 255;

			if (this.valpha !== 1) {
				rgb.alpha = this.valpha;
			}

			return rgb;
		},

		round: function (places) {
			places = Math.max(places || 0, 0);
			return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
		},

		alpha: function (val) {
			if (arguments.length) {
				return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
			}

			return this.valpha;
		},

		// rgb
		red: getset('rgb', 0, maxfn(255)),
		green: getset('rgb', 1, maxfn(255)),
		blue: getset('rgb', 2, maxfn(255)),

		hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

		saturationl: getset('hsl', 1, maxfn(100)),
		lightness: getset('hsl', 2, maxfn(100)),

		saturationv: getset('hsv', 1, maxfn(100)),
		value: getset('hsv', 2, maxfn(100)),

		chroma: getset('hcg', 1, maxfn(100)),
		gray: getset('hcg', 2, maxfn(100)),

		white: getset('hwb', 1, maxfn(100)),
		wblack: getset('hwb', 2, maxfn(100)),

		cyan: getset('cmyk', 0, maxfn(100)),
		magenta: getset('cmyk', 1, maxfn(100)),
		yellow: getset('cmyk', 2, maxfn(100)),
		black: getset('cmyk', 3, maxfn(100)),

		x: getset('xyz', 0, maxfn(100)),
		y: getset('xyz', 1, maxfn(100)),
		z: getset('xyz', 2, maxfn(100)),

		l: getset('lab', 0, maxfn(100)),
		a: getset('lab', 1),
		b: getset('lab', 2),

		keyword: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return convert[this.model].keyword(this.color);
		},

		hex: function (val) {
			if (arguments.length) {
				return new Color(val);
			}

			return colorString.to.hex(this.rgb().round().color);
		},

		rgbNumber: function () {
			var rgb = this.rgb().color;
			return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
		},

		luminosity: function () {
			// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			var rgb = this.rgb().color;

			var lum = [];
			for (var i = 0; i < rgb.length; i++) {
				var chan = rgb[i] / 255;
				lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
			}

			return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
		},

		contrast: function (color2) {
			// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
			var lum1 = this.luminosity();
			var lum2 = color2.luminosity();

			if (lum1 > lum2) {
				return (lum1 + 0.05) / (lum2 + 0.05);
			}

			return (lum2 + 0.05) / (lum1 + 0.05);
		},

		level: function (color2) {
			var contrastRatio = this.contrast(color2);
			if (contrastRatio >= 7.1) {
				return 'AAA';
			}

			return (contrastRatio >= 4.5) ? 'AA' : '';
		},

		isDark: function () {
			// YIQ equation from http://24ways.org/2010/calculating-color-contrast
			var rgb = this.rgb().color;
			var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
			return yiq < 128;
		},

		isLight: function () {
			return !this.isDark();
		},

		negate: function () {
			var rgb = this.rgb();
			for (var i = 0; i < 3; i++) {
				rgb.color[i] = 255 - rgb.color[i];
			}
			return rgb;
		},

		lighten: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] += hsl.color[2] * ratio;
			return hsl;
		},

		darken: function (ratio) {
			var hsl = this.hsl();
			hsl.color[2] -= hsl.color[2] * ratio;
			return hsl;
		},

		saturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] += hsl.color[1] * ratio;
			return hsl;
		},

		desaturate: function (ratio) {
			var hsl = this.hsl();
			hsl.color[1] -= hsl.color[1] * ratio;
			return hsl;
		},

		whiten: function (ratio) {
			var hwb = this.hwb();
			hwb.color[1] += hwb.color[1] * ratio;
			return hwb;
		},

		blacken: function (ratio) {
			var hwb = this.hwb();
			hwb.color[2] += hwb.color[2] * ratio;
			return hwb;
		},

		grayscale: function () {
			// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
			var rgb = this.rgb().color;
			var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
			return Color.rgb(val, val, val);
		},

		fade: function (ratio) {
			return this.alpha(this.valpha - (this.valpha * ratio));
		},

		opaquer: function (ratio) {
			return this.alpha(this.valpha + (this.valpha * ratio));
		},

		rotate: function (degrees) {
			var hsl = this.hsl();
			var hue = hsl.color[0];
			hue = (hue + degrees) % 360;
			hue = hue < 0 ? 360 + hue : hue;
			hsl.color[0] = hue;
			return hsl;
		},

		mix: function (mixinColor, weight) {
			// ported from sass implementation in C
			// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
			if (!mixinColor || !mixinColor.rgb) {
				throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
			}
			var color1 = mixinColor.rgb();
			var color2 = this.rgb();
			var p = weight === undefined ? 0.5 : weight;

			var w = 2 * p - 1;
			var a = color1.alpha() - color2.alpha();

			var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var w2 = 1 - w1;

			return Color.rgb(
					w1 * color1.red() + w2 * color2.red(),
					w1 * color1.green() + w2 * color2.green(),
					w1 * color1.blue() + w2 * color2.blue(),
					color1.alpha() * p + color2.alpha() * (1 - p));
		}
	};

	// model conversion methods and static constructors
	Object.keys(convert).forEach(function (model) {
		if (skippedModels.indexOf(model) !== -1) {
			return;
		}

		var channels = convert[model].channels;

		// conversion methods
		Color.prototype[model] = function () {
			if (this.model === model) {
				return new Color(this);
			}

			if (arguments.length) {
				return new Color(arguments, model);
			}

			var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
			return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
		};

		// 'static' construction methods
		Color[model] = function (color) {
			if (typeof color === 'number') {
				color = zeroArray(_slice.call(arguments), channels);
			}
			return new Color(color, model);
		};
	});

	function roundTo(num, places) {
		return Number(num.toFixed(places));
	}

	function roundToPlace(places) {
		return function (num) {
			return roundTo(num, places);
		};
	}

	function getset(model, channel, modifier) {
		model = Array.isArray(model) ? model : [model];

		model.forEach(function (m) {
			(limiters[m] || (limiters[m] = []))[channel] = modifier;
		});

		model = model[0];

		return function (val) {
			var result;

			if (arguments.length) {
				if (modifier) {
					val = modifier(val);
				}

				result = this[model]();
				result.color[channel] = val;
				return result;
			}

			result = this[model]().color[channel];
			if (modifier) {
				result = modifier(result);
			}

			return result;
		};
	}

	function maxfn(max) {
		return function (v) {
			return Math.max(0, Math.min(max, v));
		};
	}

	function assertArray(val) {
		return Array.isArray(val) ? val : [val];
	}

	function zeroArray(arr, length) {
		for (var i = 0; i < length; i++) {
			if (typeof arr[i] !== 'number') {
				arr[i] = 0;
			}
		}

		return arr;
	}

	color = Color;
	return color;
}

var colorExports = requireColor();
var Color = /*@__PURE__*/getDefaultExportFromCjs(colorExports);

const renderNode = (Component, content, defaultProps = {}) => {
    if (content == null || content === false) {
        return null;
    }
    if (React.isValidElement(content)) {
        return content;
    }
    if (typeof content === 'function') {
        return content();
    }
    if (content === true) {
        return React.createElement(Component, Object.assign({}, defaultProps));
    }
    if (typeof content === 'string') {
        if (content.length === 0) {
            return null;
        }
        return React.createElement(Component, Object.assign({}, defaultProps), content);
    }
    if (typeof content === 'number') {
        return React.createElement(Component, Object.assign({}, defaultProps), content);
    }
    return React.createElement(Component, Object.assign({}, defaultProps, content));
};

const customIcons = {};
var getIconType = (type) => {
    switch (type) {
        case 'zocial':
            return require('react-native-vector-icons/Zocial').default;
        case 'octicon':
            return require('react-native-vector-icons/Octicons').default;
        case 'material':
            return require('react-native-vector-icons/MaterialIcons').default;
        case 'material-community':
            return require('react-native-vector-icons/MaterialCommunityIcons')
                .default;
        case 'ionicon':
            return require('react-native-vector-icons/Ionicons').default;
        case 'foundation':
            return require('react-native-vector-icons/Foundation').default;
        case 'evilicon':
            return require('react-native-vector-icons/EvilIcons').default;
        case 'entypo':
            return require('react-native-vector-icons/Entypo').default;
        case 'font-awesome':
            return require('react-native-vector-icons/FontAwesome').default;
        case 'font-awesome-5':
            return require('react-native-vector-icons/FontAwesome5').default;
        case 'simple-line-icon':
            return require('react-native-vector-icons/SimpleLineIcons').default;
        case 'feather':
            return require('react-native-vector-icons/Feather').default;
        case 'antdesign':
        case 'ant-design':
            return require('react-native-vector-icons/AntDesign').default;
        case 'fontisto':
            return require('react-native-vector-icons/Fontisto').default;
        default:
            if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
                return customIcons[type];
            }
            return require('react-native-vector-icons/MaterialIcons').default;
    }
};

const { width, height } = reactNative.Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const scale = size => shortDimension / guidelineBaseWidth * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

function normalize(number, factor = 0.25) {
    return moderateScale(number, factor);
}

const lightColors = {
    primary: '#2089dc',
    secondary: '#ad1457',
    background: '#ffffff',
    white: '#ffffff',
    black: '#242424',
    grey0: '#393e42',
    grey1: '#43484d',
    grey2: '#5e6977',
    grey3: '#86939e',
    grey4: '#bdc6cf',
    grey5: '#e1e8ee',
    greyOutline: '#bbb',
    searchBg: '#303337',
    success: '#52c41a',
    error: '#ff190c',
    warning: '#faad14',
    disabled: 'hsl(208, 8%, 90%)',
    divider: reactNative.StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
    platform: {
        ios: {
            primary: '#007aff',
            secondary: '#5856d6',
            grey: '#7d7d7d',
            searchBg: '#dcdce1',
            success: '#4cd964',
            error: '#ff3b30',
            warning: '#ffcc00',
        },
        android: {
            primary: '#2196f3',
            secondary: '#9C27B0',
            grey: 'rgba(0, 0, 0, 0.54)',
            searchBg: '#dcdce1',
            success: '#4caf50',
            error: '#f44336',
            warning: '#ffeb3b',
        },
        web: {
            primary: '#2089dc',
            secondary: '#ca71eb',
            grey: '#393e42',
            searchBg: '#303337',
            success: '#52c41a',
            error: '#ff190c',
            warning: '#faad14',
        },
        default: {
            primary: '#007aff',
            secondary: '#5856d6',
            grey: '#7d7d7d',
            searchBg: '#dcdce1',
            success: '#4cd964',
            error: '#ff3b30',
            warning: '#ffcc00',
        },
    },
};
({
    divider: reactNative.StyleSheet.hairlineWidth < 1 ? '#84838a' : 'rgba(0, 0, 0, 0.12)'});

const BackgroundImage = reactNative.ImageBackground || reactNative.Image;

var fonts = {
    android: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        black: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
        },
        bold: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
        },
    }};

var __rest$T = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Screen = reactNative.Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = reactNative.Platform.OS === 'ios';
const getBehaviorType = reactNative.Platform.OS === 'ios' ? 'padding' : 'height';
const defaultSpacing = { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 };
const defaultTheme = {
    colors: lightColors,
    spacing: defaultSpacing,
};
const androidRipple = (rippleColor) => {
    return {
        borderless: false,
        color: rippleColor,
        radius: -5,
    };
};
const patchWebProps = (_a) => {
    var { updateTheme, replaceTheme, onClear } = _a, rest = __rest$T(_a, ["updateTheme", "replaceTheme", "onClear"]);
    return rest;
};

var cjs;
var hasRequiredCjs;

function requireCjs () {
	if (hasRequiredCjs) return cjs;
	hasRequiredCjs = 1;

	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(target).filter(function(symbol) {
				return Object.propertyIsEnumerable.call(target, symbol)
			})
			: []
	}

	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
	}

	function propertyIsOnObject(object, property) {
		try {
			return property in object
		} catch(_) {
			return false
		}
	}

	// Protects from prototype poisoning and unexpected merging up the prototype chain.
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			getKeys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) {
				return
			}

			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			} else {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
		// implementations can use it. The caller may not replace it.
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	cjs = deepmerge_1;
	return cjs;
}

var cjsExports = requireCjs();
var deepmerge = /*@__PURE__*/getDefaultExportFromCjs(cjsExports);

(undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ThemeContext = React.createContext({});
const ThemeConsumer = ThemeContext.Consumer;

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs.exports = requireReactIs_production_min();
	} else {
	  reactIs.exports = requireReactIs_development();
	}
	return reactIs.exports;
}

var hoistNonReactStatics_cjs;
var hasRequiredHoistNonReactStatics_cjs;

function requireHoistNonReactStatics_cjs () {
	if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
	hasRequiredHoistNonReactStatics_cjs = 1;

	var reactIs = requireReactIs();

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	hoistNonReactStatics_cjs = hoistNonReactStatics;
	return hoistNonReactStatics_cjs;
}

var hoistNonReactStatics_cjsExports = requireHoistNonReactStatics_cjs();
var hoistNonReactStatics = /*@__PURE__*/getDefaultExportFromCjs(hoistNonReactStatics_cjsExports);

var __rest$S = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const isClassComponent = (Component) => { var _a; return Boolean((_a = Component === null || Component === void 0 ? void 0 : Component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent); };
const combineByStyles = (propName = '') => {
    if (propName.endsWith('Style') || propName.endsWith('style')) {
        return (prop1, prop2) => {
            return [prop1, prop2].flat();
        };
    }
    return undefined;
};
const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
    return Object.assign((props, forwardedRef) => {
        const { children } = props, rest = __rest$S(props, ["children"]);
        return (React.createElement(ThemeConsumer, null, ({ theme, updateTheme, replaceTheme }) => {
            var _a;
            if (!theme) {
                const newProps = Object.assign(Object.assign({}, rest), { theme: { colors: lightColors, spacing: defaultSpacing }, children });
                return React.createElement(WrappedComponent, Object.assign({ ref: forwardedRef }, newProps));
            }
            const { components } = theme, restTheme = __rest$S(theme, ["components"]);
            const themedProps = typeof (components === null || components === void 0 ? void 0 : components[themeKey]) === 'function'
                ? (_a = components === null || components === void 0 ? void 0 : components[themeKey]) === null || _a === void 0 ? void 0 : _a.call(components, rest, restTheme)
                : components === null || components === void 0 ? void 0 : components[themeKey];
            const newProps = Object.assign(Object.assign({ theme: restTheme, updateTheme,
                replaceTheme }, deepmerge(themedProps || {}, rest, {
                customMerge: combineByStyles,
                clone: false,
            })), { children });
            return React.createElement(WrappedComponent, Object.assign({ ref: forwardedRef }, newProps));
        }));
    }, { displayName: displayName });
};
function withTheme(WrappedComponent, themeKey) {
    const name = themeKey
        ? `Themed.${themeKey}`
        : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
    const Component = ThemedComponent(WrappedComponent, themeKey, name);
    if (isClassComponent(WrappedComponent)) {
        return hoistNonReactStatics(React.forwardRef(Component), WrappedComponent);
    }
    return React.forwardRef(Component);
}

const AirbnbRating = (props) => {
    return React.createElement(reactNativeRatings.AirbnbRating, Object.assign({}, props));
};
AirbnbRating.displayName = 'AirbnbRating';

withTheme(AirbnbRating, 'AirbnbRating');

var getIconStyle = (type, extraProps) => {
    switch (type) {
        case 'zocial':
            return {};
        case 'octicon':
            return {};
        case 'material':
            return {};
        case 'material-community':
            return {};
        case 'ionicon':
            return {};
        case 'foundation':
            return {};
        case 'evilicon':
            return {};
        case 'entypo':
            return {};
        case 'font-awesome':
            return {};
        case 'font-awesome-5':
            return {
                solid: extraProps.solid || false,
                brand: extraProps.brand || false,
            };
        case 'simple-line-icon':
            return {};
        case 'feather':
            return {};
        case 'antdesign':
        case 'ant-design':
            return {};
        case 'fontisto':
            return {};
        default:
            return {};
    }
};

var __rest$R = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Icon = (_a) => {
    var _b, _c, _d;
    var { testID = 'RNE__ICON__CONTAINER', type = 'material', name, size = 24, color: colorProp, iconStyle, iconProps, underlayColor = 'transparent', reverse = false, raised = false, containerStyle, reverseColor: reverseColorProp, disabled = false, disabledStyle, onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
        ? reactNative.Pressable
        : reactNative.View, solid = false, brand = false, theme = defaultTheme, pressableProps } = _a, rest = __rest$R(_a, ["testID", "type", "name", "size", "color", "iconStyle", "iconProps", "underlayColor", "reverse", "raised", "containerStyle", "reverseColor", "disabled", "disabledStyle", "onPress", "onLongPress", "onPressIn", "onPressOut", "Component", "solid", "brand", "theme", "pressableProps"]);
    const color = colorProp || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black);
    const reverseColor = reverseColorProp || ((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.white);
    const IconComponent = getIconType(type);
    const iconSpecificStyle = getIconStyle(type, { solid, brand });
    const getBackgroundColor = React.useMemo(() => {
        var _a;
        if (reverse) {
            return color;
        }
        return raised ? (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.white : 'transparent';
    }, [color, raised, reverse, (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.white]);
    const buttonStyles = React.useMemo(() => ({
        borderRadius: size + 4,
        height: size * 2 + 4,
        width: size * 2 + 4,
    }), [size]);
    return (React.createElement(reactNative.View, { testID: testID, style: reactNative.StyleSheet.flatten([
            !raised && styles$K.container,
            (reverse || raised) && styles$K.button,
            (reverse || raised) && buttonStyles,
            raised && styles$K.raised,
            iconStyle && iconStyle.borderRadius
                ? {
                    borderRadius: iconStyle.borderRadius,
                }
                : {},
            containerStyle && containerStyle,
        ]) },
        React.createElement(Component, Object.assign({ testID: "RNE__ICON__CONTAINER_ACTION" }, Object.assign(Object.assign({ android_ripple: androidRipple(Color(reverse ? color : underlayColor)
                .alpha(0.3)
                .rgb()
                .string()), onPress,
            onLongPress,
            onPressIn,
            onPressOut,
            disabled, accessibilityRole: 'button' }, pressableProps), rest)),
            React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                    (reverse || raised) && buttonStyles,
                    {
                        backgroundColor: getBackgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    disabled && styles$K.disabled,
                    disabled && disabledStyle,
                ]), testID: "RNE__ICON" },
                React.createElement(IconComponent, Object.assign({ testID: "RNE__ICON__Component", style: reactNative.StyleSheet.flatten([
                        { backgroundColor: 'transparent' },
                        iconStyle && iconStyle,
                    ]), size: size, name: name, color: reverse ? reverseColor : color }, iconSpecificStyle, iconProps))))));
};
const styles$K = reactNative.StyleSheet.create({
    container: {
        overflow: 'hidden',
    },
    button: {
        margin: 7,
    },
    raised: Object.assign({}, reactNative.Platform.select({
        android: {
            elevation: 2,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    disabled: {
        backgroundColor: '#D1D5D8',
    },
});
Icon.displayName = 'Icon';

var __rest$Q = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Image$1 = (_a) => {
    var { onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
        ? reactNative.Pressable
        : reactNative.View, placeholderStyle, PlaceholderContent, containerStyle, childrenContainerStyle = null, style = {}, ImageComponent = reactNative.Image, onLoad, children, transition, transitionDuration = 360, pressableProps } = _a, props = __rest$Q(_a, ["onPress", "onLongPress", "onPressIn", "onPressOut", "Component", "placeholderStyle", "PlaceholderContent", "containerStyle", "childrenContainerStyle", "style", "ImageComponent", "onLoad", "children", "transition", "transitionDuration", "pressableProps"]);
    const placeholderOpacity = React.useRef(new reactNative.Animated.Value(1));
    const onLoadHandler = React.useCallback((event) => {
        if (transition) {
            reactNative.Animated.timing(placeholderOpacity.current, {
                toValue: 0,
                duration: transitionDuration,
                useNativeDriver: true,
            }).start();
        }
        else {
            placeholderOpacity.current.setValue(0);
        }
        onLoad === null || onLoad === void 0 ? void 0 : onLoad(event);
    }, [transition, transitionDuration, onLoad]);
    const hasImage = Boolean(props.source);
    return (React.createElement(Component, Object.assign({}, pressableProps, { onPress, onPressIn, onPressOut, onLongPress }, { accessibilityIgnoresInvertColors: true, style: reactNative.StyleSheet.flatten([styles$J.container, containerStyle]) }),
        React.createElement(ImageComponent, Object.assign({ testID: "RNE__Image" }, props, { transition, transitionDuration }, { onLoad: onLoadHandler, style: reactNative.StyleSheet.flatten([reactNative.StyleSheet.absoluteFill, style]) })),
        React.createElement(reactNative.Animated.View, { pointerEvents: hasImage ? 'none' : 'auto', accessibilityElementsHidden: hasImage, importantForAccessibility: hasImage ? 'no-hide-descendants' : 'yes', style: [
                reactNative.StyleSheet.absoluteFillObject,
                {
                    opacity: hasImage ? placeholderOpacity.current : 1,
                },
            ] },
            React.createElement(reactNative.View, { testID: "RNE__Image__placeholder", style: reactNative.StyleSheet.flatten([
                    style,
                    styles$J.placeholder,
                    placeholderStyle,
                ]) }, React.isValidElement(PlaceholderContent)
                ? PlaceholderContent
                : PlaceholderContent && (React.createElement(reactNative.Text, { testID: "RNE__Image__Placeholder__Content" }, PlaceholderContent)))),
        React.createElement(reactNative.View, { testID: "RNE__Image__children__container", style: childrenContainerStyle !== null && childrenContainerStyle !== void 0 ? childrenContainerStyle : style }, children)));
};
const styles$J = reactNative.StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
    },
    placeholder: {
        backgroundColor: '#bdbdbd',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
Image$1.displayName = 'Image';

const Image = Object.assign(Image$1, {
    getSize: reactNative.Image.getSize,
    getSizeWithHeaders: reactNative.Image.getSizeWithHeaders,
    prefetch: reactNative.Image.prefetch,
    abortPrefetch: reactNative.Image.abortPrefetch,
    queryCache: reactNative.Image.queryCache,
    resolveAssetSource: reactNative.Image.resolveAssetSource,
});

var __rest$P = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const avatarSizes = {
    small: 34,
    medium: 50,
    large: 75,
    xlarge: 150,
};
const Avatar = (_a) => {
    var { onPress, onLongPress, onPressIn, onPressOut, Component = onPress || onLongPress || onPressIn || onPressOut
        ? reactNative.Pressable
        : reactNative.View, containerStyle, icon, iconStyle, source, size = 'small', avatarStyle, rounded, title, titleStyle, overlayContainerStyle, imageProps, renderCustomContent, ImageComponent = reactNative.Image, children, pressableProps } = _a, rest = __rest$P(_a, ["onPress", "onLongPress", "onPressIn", "onPressOut", "Component", "containerStyle", "icon", "iconStyle", "source", "size", "avatarStyle", "rounded", "title", "titleStyle", "overlayContainerStyle", "imageProps", "renderCustomContent", "ImageComponent", "children", "pressableProps"]);
    const width = typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
    const height = width;
    const titleSize = width / 2;
    const iconSize = width / 2;
    const imageContainerStyle = reactNative.StyleSheet.flatten([
        styles$I.overlayContainer,
        rounded && { borderRadius: width / 2, overflow: 'hidden' },
        overlayContainerStyle,
        imageProps && imageProps.containerStyle,
    ]);
    if (imageProps && imageProps.containerStyle) {
        delete imageProps.containerStyle;
    }
    return (React.createElement(Component, Object.assign({ style: reactNative.StyleSheet.flatten([
            styles$I.container,
            { height, width },
            rounded && { borderRadius: width / 2 },
            containerStyle,
        ]) }, Object.assign(Object.assign({ onPress,
        onLongPress,
        onPressIn,
        onPressOut }, pressableProps), rest)),
        renderCustomContent && renderNode(undefined, renderCustomContent),
        icon && (React.createElement(Icon, { style: reactNative.StyleSheet.flatten([iconStyle]), color: icon.color || 'white', name: icon.name || 'account', size: icon.size || iconSize, type: icon.type || 'material-community' })),
        title && (React.createElement(reactNative.Text, { style: reactNative.StyleSheet.flatten([
                styles$I.title,
                { fontSize: titleSize },
                titleStyle,
            ]) }, title)),
        source && (React.createElement(Image, Object.assign({ testID: "RNE__Avatar__Image", containerStyle: imageContainerStyle, source: source, borderRadius: rounded ? width / 2 : undefined }, imageProps, { style: reactNative.StyleSheet.flatten([
                styles$I.avatar,
                imageProps && imageProps.style,
                avatarStyle,
            ]), ImageComponent: ImageComponent }))),
        children));
};
const styles$I = reactNative.StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    avatar: {
        flex: 1,
    },
    overlayContainer: {
        flex: 1,
    },
    title: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        textAlign: 'center',
        zIndex: 1,
    },
});
Avatar.displayName = 'Avatar';

var __rest$O = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Accessory = (_a) => {
    var { size = 10, style, underlayColor = '#000', onPress, onLongPress, onPressIn, onPressOut, source, pressableProps } = _a, rest = __rest$O(_a, ["size", "style", "underlayColor", "onPress", "onLongPress", "onPressIn", "onPressOut", "source", "pressableProps"]);
    return (React.createElement(reactNative.Pressable, Object.assign({}, Object.assign({ android_ripple: (onPress || onLongPress) && androidRipple(underlayColor) }, pressableProps), { style: [
            styles$H.accessory,
            {
                width: size,
                height: size,
                borderRadius: size / 2,
            },
            style,
        ] }, { onPressOut, onPressIn, onPress, onLongPress }),
        React.createElement(reactNative.View, null, source ? (React.createElement(Image, Object.assign({ source: source, style: {
                width: size,
                height: size,
                borderRadius: size / 2,
            } }, rest))) : (React.createElement(Icon, Object.assign({ name: "mode-edit", type: "material", color: "#fff", size: size * 0.8 }, rest))))));
};
const styles$H = reactNative.StyleSheet.create({
    accessory: Object.assign({ position: 'absolute', bottom: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#aaa' }, reactNative.Platform.select({
        android: {
            elevation: 1,
        },
        default: {
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowRadius: 2,
            shadowOpacity: 0.5,
        },
    })),
});
Accessory.displayName = 'Avatar.Accessory';

Object.assign(withTheme(Avatar, 'Avatar'), {
    Accessory: withTheme(Accessory, 'AvatarAccessory'),
});

var __rest$N = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Badge = (_a) => {
    var _b;
    var { containerStyle, textStyle, textProps, badgeStyle, onPress, onLongPress, onPressOut, onPressIn, Component = onPress || onLongPress || onPressIn || onPressOut
        ? reactNative.Pressable
        : reactNative.View, value, theme = defaultTheme, status = 'primary', pressableProps } = _a, rest = __rest$N(_a, ["containerStyle", "textStyle", "textProps", "badgeStyle", "onPress", "onLongPress", "onPressOut", "onPressIn", "Component", "value", "theme", "status", "pressableProps"]);
    const element = renderNode(reactNative.Text, value, Object.assign({ style: reactNative.StyleSheet.flatten([styles$G.text, textStyle && textStyle]) }, textProps));
    return (React.createElement(reactNative.View, { testID: "RNE__Badge__Container", style: reactNative.StyleSheet.flatten([containerStyle && containerStyle]) },
        React.createElement(Component, Object.assign({}, Object.assign(Object.assign({ onPress,
            onLongPress,
            onPressOut,
            onPressIn }, pressableProps), rest), { testID: "RNE__Badge", style: reactNative.StyleSheet.flatten([
                {
                    alignSelf: 'center',
                    minWidth: size,
                    height: size,
                    borderRadius: size / 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b[status],
                    borderWidth: reactNative.StyleSheet.hairlineWidth,
                    borderColor: '#fff',
                },
                !element && styles$G.miniBadge,
                badgeStyle && badgeStyle,
            ]) }), element)));
};
const size = 18;
const miniSize = 8;
const styles$G = reactNative.StyleSheet.create({
    miniBadge: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        minWidth: miniSize,
        height: miniSize,
        borderRadius: miniSize / 2,
    },
    text: {
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 4,
    },
});
Badge.displayName = 'Badge';

(undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
reactNative.StyleSheet.create({
    badgeContainer: {
        position: 'absolute',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
});

withTheme(Badge, 'Badge');

var __rest$M = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const BottomSheet = (_a) => {
    var { containerStyle, backdropStyle, onBackdropPress = () => null, isVisible = false, modalProps = {}, children, scrollViewProps = {} } = _a, rest = __rest$M(_a, ["containerStyle", "backdropStyle", "onBackdropPress", "isVisible", "modalProps", "children", "scrollViewProps"]);
    return (React.createElement(reactNative.Modal, Object.assign({ animationType: "slide", onRequestClose: onBackdropPress, transparent: true, visible: isVisible }, modalProps),
        React.createElement(reactNative.Pressable, { onPress: onBackdropPress, style: [reactNative.StyleSheet.absoluteFill, backdropStyle], testID: "RNE__Overlay__backdrop" }),
        React.createElement(reactNativeSafeAreaContext.SafeAreaView, Object.assign({ style: reactNative.StyleSheet.flatten([
                styles$F.safeAreaView,
                containerStyle && containerStyle,
            ]), pointerEvents: "box-none" }, rest),
            React.createElement(reactNative.View, null,
                React.createElement(reactNative.ScrollView, Object.assign({}, scrollViewProps), children)))));
};
const styles$F = reactNative.StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        flexDirection: 'column-reverse',
    },
});
BottomSheet.displayName = 'BottomSheet';

withTheme(BottomSheet, 'BottomSheet');

var __rest$L = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const defaultLoadingProps = (type, theme) => {
    var _a;
    return ({
        color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
        size: 'small',
    });
};
const positionStyle = {
    top: 'column',
    bottom: 'column-reverse',
    left: 'row',
    right: 'row-reverse',
};
const Button$1 = (_a) => {
    var _b, _c, _d, _e, _f, _g, _h;
    var { TouchableComponent, containerStyle, onPress = () => { }, buttonStyle, type = 'solid', loading = false, loadingStyle, loadingProps: passedLoadingProps, size = 'md', radius = 'xs', uppercase = false, color: buttonColor = 'primary', title = '', titleProps, titleStyle: passedTitleStyle, icon, iconContainerStyle, iconRight = false, disabled = false, disabledStyle, disabledTitleStyle, raised = false, linearGradientProps, ViewComponent = reactNative.View, theme = defaultTheme, iconPosition = 'left', children = title } = _a, rest = __rest$L(_a, ["TouchableComponent", "containerStyle", "onPress", "buttonStyle", "type", "loading", "loadingStyle", "loadingProps", "size", "radius", "uppercase", "color", "title", "titleProps", "titleStyle", "icon", "iconContainerStyle", "iconRight", "disabled", "disabledStyle", "disabledTitleStyle", "raised", "linearGradientProps", "ViewComponent", "theme", "iconPosition", "children"]);
    React.useEffect(() => {
        if (linearGradientProps && !ViewComponent) {
            console.warn("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    const handleOnPress = React.useCallback((evt) => {
        if (!loading && !disabled) {
            onPress(evt);
        }
    }, [loading, onPress, disabled]);
    const TouchableComponentInternal = TouchableComponent ||
        reactNative.Platform.select({
            android: linearGradientProps ? reactNative.TouchableOpacity : reactNative.TouchableNativeFeedback,
            default: reactNative.TouchableOpacity,
        });
    const titleStyle = React.useMemo(() => {
        var _a, _b;
        return reactNative.StyleSheet.flatten([
            {
                color: type === 'solid' ? 'white' : (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.primary,
            },
            uppercase && { textTransform: 'uppercase' },
            styles$E.title,
            passedTitleStyle,
            disabled && {
                color: Color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.disabled).darken(0.3).string(),
            },
            disabled && disabledTitleStyle,
        ]);
    }, [
        disabled,
        disabledTitleStyle,
        passedTitleStyle,
        (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.disabled,
        (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
        type,
        uppercase,
    ]);
    const background = reactNative.Platform.OS === 'android' && reactNative.Platform.Version >= 21
        ? reactNative.TouchableNativeFeedback.Ripple(Color((_d = titleStyle === null || titleStyle === void 0 ? void 0 : titleStyle.color) === null || _d === void 0 ? void 0 : _d.toString()).alpha(0.32).rgb().string(), false)
        : undefined;
    const loadingProps = React.useMemo(() => (Object.assign(Object.assign({}, defaultLoadingProps(type, theme)), passedLoadingProps)), [passedLoadingProps, theme, type]);
    const accessibilityState = React.useMemo(() => ({
        disabled: !!disabled,
        busy: !!loading,
    }), [disabled, loading]);
    const borderRadius = React.useMemo(() => {
        var _a;
        return Number((_a = theme.spacing[radius]) !== null && _a !== void 0 ? _a : (radius || '0')) || 0;
    }, [radius, theme]);
    return (React.createElement(reactNative.View, { style: [
            styles$E.container,
            { borderRadius },
            containerStyle,
            raised && !disabled && type !== 'clear' && styles$E.raised,
        ], testID: "RNE_BUTTON_WRAPPER" },
        React.createElement(TouchableComponentInternal, Object.assign({ onPress: handleOnPress, delayPressIn: 0, activeOpacity: 0.3, accessibilityRole: "button", accessibilityState: accessibilityState, disabled: disabled, background: background }, rest),
            React.createElement(ViewComponent, Object.assign({}, linearGradientProps, { style: reactNative.StyleSheet.flatten([
                    styles$E.button,
                    {
                        padding: theme.spacing[size],
                        paddingHorizontal: theme.spacing[size] + 2,
                        borderRadius,
                        flexDirection: positionStyle[iconRight ? 'right' : iconPosition] || 'row',
                        backgroundColor: type === 'solid'
                            ? theme.colors[buttonColor] ||
                                buttonColor ||
                                ((_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.primary)
                            : 'transparent',
                        borderColor: (_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.primary,
                        borderWidth: type === 'outline' ? reactNative.StyleSheet.hairlineWidth : 0,
                    },
                    buttonStyle,
                    disabled &&
                        type === 'solid' && {
                        backgroundColor: (_g = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _g === void 0 ? void 0 : _g.disabled,
                    },
                    disabled &&
                        type === 'outline' && {
                        borderColor: Color((_h = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _h === void 0 ? void 0 : _h.disabled)
                            .darken(0.3)
                            .string(),
                    },
                    disabled && disabledStyle,
                ]) }),
                loading && (React.createElement(reactNative.ActivityIndicator, Object.assign({ style: reactNative.StyleSheet.flatten([styles$E.loading, loadingStyle]), color: loadingProps.color, size: loadingProps.size }, loadingProps))),
                !loading &&
                    icon &&
                    renderNode(Icon, icon, {
                        containerStyle: reactNative.StyleSheet.flatten([
                            styles$E.iconContainer,
                            iconContainerStyle,
                        ]),
                    }),
                !loading &&
                    React.Children.toArray(children).map((child, index) => (React.createElement(React.Fragment, { key: index }, typeof child === 'string'
                        ? renderNode(reactNative.Text, child, Object.assign({ style: Object.assign({}, titleStyle) }, titleProps))
                        : child)))))));
};
const styles$E = reactNative.StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: defaultTheme.spacing.md,
        paddingHorizontal: defaultTheme.spacing.lg,
    },
    container: {
        overflow: 'hidden',
    },
    title: Object.assign({ fontSize: 16, textAlign: 'center', paddingVertical: 1 }, reactNative.Platform.select({
        android: {
            fontFamily: 'sans-serif-medium',
        },
        default: {
            fontSize: 18,
        },
    })),
    iconContainer: {
        marginHorizontal: 5,
    },
    raised: Object.assign({ backgroundColor: '#fff', overflow: 'visible' }, reactNative.Platform.select({
        android: {
            elevation: 4,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    loading: {
        marginVertical: 2,
    },
});
Button$1.displayName = 'Button';

var NativeButton = withTheme(Button$1, 'Button');

var __rest$K = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Text = (_a) => {
    var _b;
    var { style = {}, h1 = false, h2 = false, h3 = false, h4 = false, h1Style = {}, h2Style = {}, h3Style = {}, h4Style = {}, children = '', theme = defaultTheme } = _a, rest = __rest$K(_a, ["style", "h1", "h2", "h3", "h4", "h1Style", "h2Style", "h3Style", "h4Style", "children", "theme"]);
    return (React.createElement(reactNative.Text, Object.assign({ accessibilityRole: "text", style: reactNative.StyleSheet.flatten([
            Object.assign(Object.assign({}, reactNative.Platform.select({
                android: Object.assign({}, fonts.android.regular),
            })), { color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black }),
            style,
            (h1 || h2 || h3 || h4) && styles$D.bold,
            h1 && reactNative.StyleSheet.flatten([{ fontSize: normalize(40) }, h1Style]),
            h2 && reactNative.StyleSheet.flatten([{ fontSize: normalize(34) }, h2Style]),
            h3 && reactNative.StyleSheet.flatten([{ fontSize: normalize(28) }, h3Style]),
            h4 && reactNative.StyleSheet.flatten([{ fontSize: normalize(22) }, h4Style]),
        ]) }, patchWebProps(rest)), children));
};
const styles$D = reactNative.StyleSheet.create({
    bold: Object.assign({}, reactNative.Platform.select({
        android: Object.assign({}, fonts.android.bold),
    })),
});
Text.displayName = 'Text';

var __rest$J = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ButtonGroup = (_a) => {
    var _b, _c;
    var { Component = reactNative.Pressable, pressableProps, buttons, onPress = () => null, onLongPress, onPressIn, onPressOut, selectedIndex = null, selectedIndexes = [], selectMultiple = false, containerStyle, innerBorderStyle, buttonStyle, buttonContainerStyle, textStyle, selectedTextStyle, selectedButtonStyle, activeOpacity, onHideUnderlay, onShowUnderlay, setOpacityTo, disabled = false, disabledStyle, disabledTextStyle, disabledSelectedStyle, disabledSelectedTextStyle, vertical = false, theme = defaultTheme, underlayColor = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary } = _a, rest = __rest$J(_a, ["Component", "pressableProps", "buttons", "onPress", "onLongPress", "onPressIn", "onPressOut", "selectedIndex", "selectedIndexes", "selectMultiple", "containerStyle", "innerBorderStyle", "buttonStyle", "buttonContainerStyle", "textStyle", "selectedTextStyle", "selectedButtonStyle", "activeOpacity", "onHideUnderlay", "onShowUnderlay", "setOpacityTo", "disabled", "disabledStyle", "disabledTextStyle", "disabledSelectedStyle", "disabledSelectedTextStyle", "vertical", "theme", "underlayColor"]);
    let innerBorderWidth = (_c = innerBorderStyle === null || innerBorderStyle === void 0 ? void 0 : innerBorderStyle.width) !== null && _c !== void 0 ? _c : 1;
    return (React.createElement(reactNative.View, Object.assign({ testID: "RNE__ButtonGroupContainer" }, rest, { style: reactNative.StyleSheet.flatten([
            styles$C.container,
            vertical && styles$C.verticalContainer,
            containerStyle && containerStyle,
        ]) }), buttons === null || buttons === void 0 ? void 0 : buttons.map((button, i) => {
        var _a, _b, _c, _d, _e, _f;
        const isSelected = selectedIndex === i || selectedIndexes.includes(i);
        const isDisabled = disabled === true ||
            (Array.isArray(disabled) && disabled.includes(i));
        return (React.createElement(reactNative.View, { key: i, style: reactNative.StyleSheet.flatten([
                !vertical && styles$C.button,
                vertical && styles$C.verticalComponent,
                i !== buttons.length - 1 &&
                    (vertical
                        ? {
                            borderBottomWidth: innerBorderWidth,
                            borderBottomColor: (innerBorderStyle && innerBorderStyle.color) ||
                                ((_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey4),
                        }
                        : {
                            borderRightWidth: innerBorderWidth,
                            borderRightColor: (innerBorderStyle && innerBorderStyle.color) ||
                                ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey4),
                        }),
                buttonContainerStyle,
            ]) },
            React.createElement(Component, Object.assign({ testID: "RNE__ButtonGroupItem", accessibilityState: {
                    disabled: isDisabled,
                }, activeOpacity: activeOpacity, setOpacityTo: setOpacityTo, onHideUnderlay: onHideUnderlay, onShowUnderlay: onShowUnderlay, disabled: isDisabled, onPress: () => {
                    if (selectMultiple) {
                        if (selectedIndexes.includes(i)) {
                            onPress(selectedIndexes.filter((index) => index !== i));
                        }
                        else {
                            onPress([...selectedIndexes, i]);
                        }
                    }
                    else {
                        onPress(i);
                    }
                }, style: styles$C.button }, Object.assign({ android_ripple: androidRipple(Color(underlayColor).alpha(activeOpacity).rgb().toString()), onPressIn,
                onPressOut,
                onLongPress }, pressableProps)),
                React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                        styles$C.textContainer,
                        buttonStyle && buttonStyle,
                        isSelected && {
                            backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
                        },
                        isSelected && selectedButtonStyle && selectedButtonStyle,
                        isDisabled && styles$C.disabled,
                        isDisabled && disabledStyle,
                        isDisabled &&
                            isSelected && {
                            backgroundColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.disabled,
                        },
                        isDisabled && isSelected && disabledSelectedStyle,
                    ]) }, hasElementKey(button) ? (React.createElement(button.element, { isSelected: isSelected })) : (React.createElement(Text, { testID: "buttonGroupItemText", style: reactNative.StyleSheet.flatten([
                        Object.assign({ fontSize: normalize(13), color: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.grey2 }, reactNative.Platform.select({
                            android: {},
                            default: {
                                fontWeight: '500',
                            },
                        })),
                        textStyle && textStyle,
                        isSelected && { color: '#fff' },
                        isSelected && selectedTextStyle,
                        isDisabled && {
                            color: Color((_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.disabled)
                                .darken(0.3)
                                .toString(),
                        },
                        isDisabled && disabledTextStyle,
                        isDisabled && isSelected && disabledSelectedTextStyle,
                    ]) }, button))))));
    })));
};
const styles$C = reactNative.StyleSheet.create({
    button: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        borderColor: '#e3e3e3',
        borderWidth: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: 40,
    },
    verticalContainer: {
        flexDirection: 'column',
        height: null,
    },
    verticalComponent: {
        height: 40,
    },
    disabled: {
        backgroundColor: 'transparent',
    },
});
ButtonGroup.displayName = 'ButtonGroup';
const hasElementKey = (button) => {
    return (typeof button === 'object' && Boolean(button.element));
};

withTheme(ButtonGroup, 'ButtonGroup');

var __rest$I = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CardBase = (_a) => {
    var _b, _c;
    var { children, containerStyle, wrapperStyle, theme = defaultTheme } = _a, rest = __rest$I(_a, ["children", "containerStyle", "wrapperStyle", "theme"]);
    return (React.createElement(reactNative.View, Object.assign({}, rest, { style: reactNative.StyleSheet.flatten([
            Object.assign({ backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.white, borderWidth: 1, padding: 15, margin: 15, marginBottom: 0, borderColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey5 }, reactNative.Platform.select({
                android: {
                    elevation: 1,
                },
                default: {
                    shadowColor: 'rgba(0,0,0, .2)',
                    shadowOffset: { height: 0, width: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                },
            })),
            containerStyle && containerStyle,
        ]) }),
        React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                styles$B.wrapper,
                wrapperStyle && wrapperStyle,
            ]) }, children)));
};
const styles$B = reactNative.StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
});
CardBase.displayName = 'Card';

var __rest$H = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b;
const Divider = (_a) => {
    var { color, inset = false, insetType = 'left', orientation = 'horizontal', style, subHeader, subHeaderStyle, width } = _a, rest = __rest$H(_a, ["color", "inset", "insetType", "orientation", "style", "subHeader", "subHeaderStyle", "width"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(reactNative.View, Object.assign({ testID: "RNE__Divider", style: reactNative.StyleSheet.flatten([
                styles$A.divider,
                style,
                inset &&
                    (insetType === 'left'
                        ? styles$A.leftInset
                        : insetType === 'right'
                            ? styles$A.rightInset
                            : Object.assign(Object.assign({}, styles$A.leftInset), styles$A.rightInset)),
                orientation === 'vertical' && styles$A.vertical,
                width &&
                    !isNaN(width) &&
                    (orientation === 'horizontal'
                        ? { borderBottomWidth: width }
                        : { borderRightWidth: width }),
                color &&
                    (orientation === 'horizontal'
                        ? { borderBottomColor: color }
                        : { borderRightColor: color }),
            ]) }, rest)),
        subHeader && orientation === 'horizontal' ? (React.createElement(reactNative.Text, { style: reactNative.StyleSheet.flatten([
                styles$A.subHeader,
                subHeaderStyle,
                inset && styles$A.leftInset,
            ]) }, subHeader)) : null));
};
const styles$A = reactNative.StyleSheet.create({
    divider: {
        borderBottomWidth: reactNative.StyleSheet.hairlineWidth,
        borderBottomColor: (_a = defaultTheme === null || defaultTheme === void 0 ? void 0 : defaultTheme.colors) === null || _a === void 0 ? void 0 : _a.divider,
    },
    leftInset: {
        marginLeft: 72,
    },
    rightInset: {
        marginRight: 72,
    },
    vertical: {
        borderRightWidth: reactNative.StyleSheet.hairlineWidth,
        borderRightColor: (_b = defaultTheme === null || defaultTheme === void 0 ? void 0 : defaultTheme.colors) === null || _b === void 0 ? void 0 : _b.divider,
        height: 'auto',
        alignSelf: 'stretch',
    },
    subHeader: {
        includeFontPadding: false,
    },
});
Divider.displayName = 'Divider';

var __rest$G = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CardDivider = (_a) => {
    var { style } = _a, rest = __rest$G(_a, ["style"]);
    return React.createElement(Divider, Object.assign({ style: reactNative.StyleSheet.flatten([styles$z.divider, style]) }, rest));
};
const styles$z = reactNative.StyleSheet.create({
    divider: {
        marginBottom: 15,
    },
});
CardDivider.displayName = 'Card.Divider';

var __rest$F = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CardFeaturedSubtitle = (_a) => {
    var _b;
    var { theme = defaultTheme, style } = _a, rest = __rest$F(_a, ["theme", "style"]);
    return (React.createElement(Text, Object.assign({ style: reactNative.StyleSheet.flatten([
            Object.assign({ fontSize: normalize(13), marginBottom: 8, color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.white }, reactNative.Platform.select({
                android: Object.assign({}, fonts.android.black),
                default: {
                    fontWeight: '400',
                },
            })),
            style,
        ]) }, rest)));
};
CardFeaturedSubtitle.displayName = 'Card.FeaturedSubtitle';

var __rest$E = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CardFeaturedTitle = (_a) => {
    var _b;
    var { theme = defaultTheme, style } = _a, rest = __rest$E(_a, ["theme", "style"]);
    return (React.createElement(Text, Object.assign({ style: reactNative.StyleSheet.flatten([
            Object.assign({ fontSize: normalize(18), marginBottom: 8, color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.white }, reactNative.Platform.select({
                android: Object.assign({}, fonts.android.black),
                default: {
                    fontWeight: '800',
                },
            })),
            style,
        ]) }, rest)));
};
CardFeaturedTitle.displayName = 'Card.FeaturedTitle';

var __rest$D = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CardImage = (_a) => {
    var { style } = _a, props = __rest$D(_a, ["style"]);
    return React.createElement(Image, Object.assign({ style: reactNative.StyleSheet.flatten([styles$y.image, style]) }, props));
};
const styles$y = reactNative.StyleSheet.create({
    image: {
        width: null,
        height: 150,
    },
});
CardImage.displayName = 'Card.Image';

var __rest$C = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CardTitle = (_a) => {
    var _b;
    var { style, theme = defaultTheme } = _a, rest = __rest$C(_a, ["style", "theme"]);
    return (React.createElement(Text, Object.assign({ testID: "cardTitle", style: reactNative.StyleSheet.flatten([
            Object.assign(Object.assign({ fontSize: normalize(14), color: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey1 }, reactNative.Platform.select({
                android: Object.assign({}, fonts.android.black),
                default: {
                    fontWeight: 'bold',
                },
            })), { textAlign: 'center', marginBottom: 15 }),
            style,
        ]) }, rest)));
};
CardTitle.displayName = 'Card.Title';

const ThemedCardDivider = withTheme(CardDivider, 'CardDivider');
const ThemedCardFeaturedSubtitle = withTheme(CardFeaturedSubtitle, 'CardFeaturedSubtitle');
const ThemedCardFeaturedTitle = withTheme(CardFeaturedTitle, 'CardFeaturedTitle');
const ThemedCardTitle = withTheme(CardTitle, 'CardTitle');
const ThemedCardImage = withTheme(CardImage, 'CardImage');
Object.assign(withTheme(CardBase, 'Card'), {
    Divider: ThemedCardDivider,
    Image: ThemedCardImage,
    Title: ThemedCardTitle,
    FeaturedTitle: ThemedCardFeaturedTitle,
    FeaturedSubtitle: ThemedCardFeaturedSubtitle,
});

const CheckBoxIcon = ({ checked, onIconPress, onLongIconPress, size = 24, checkedIcon = 'check-square-o', uncheckedIcon = 'square-o', iconType, checkedColor, uncheckedColor = '#bfbfbf', }) => {
    const style = React.useMemo(() => ({ minWidth: size || 24 }), [size]);
    if (checked && React.isValidElement(checkedIcon)) {
        return checkedIcon;
    }
    if (!checked && React.isValidElement(uncheckedIcon)) {
        return uncheckedIcon;
    }
    const VectorIcon = iconType
        ? getIconType(iconType)
        : getIconType('font-awesome');
    return (React.createElement(VectorIcon, { testID: "RNE__Checkbox__Icon", color: checked ? checkedColor : uncheckedColor, name: checked ? checkedIcon : uncheckedIcon, size: size || 24, style: style, onLongPress: onLongIconPress, onPress: onIconPress }));
};

var __rest$B = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const CheckBox = (_a) => {
    var _b, _c, _d;
    var { checked = false, Component = reactNative.Pressable, iconRight = false, title, titleProps = {}, center = false, right = false, containerStyle, wrapperStyle, textStyle, checkedTitle, fontFamily, theme = defaultTheme, onPress, onLongPress, disabled = false, disabledStyle, disabledTitleStyle, checkedColor = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary } = _a, rest = __rest$B(_a, ["checked", "Component", "iconRight", "title", "titleProps", "center", "right", "containerStyle", "wrapperStyle", "textStyle", "checkedTitle", "fontFamily", "theme", "onPress", "onLongPress", "disabled", "disabledStyle", "disabledTitleStyle", "checkedColor"]);
    const accessibilityState = {
        checked: !!checked,
    };
    const iconProps = Object.assign({ checked,
        onLongPress,
        checkedColor }, rest);
    return (React.createElement(Component, Object.assign({ accessibilityRole: "checkbox", accessibilityState: accessibilityState, testID: "RNE__CheckBox__Wrapper" }, rest, { disabled: disabled, onLongPress: onLongPress, onPress: onPress, style: reactNative.StyleSheet.flatten([
            {
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.white,
            },
            styles$x.container,
            containerStyle && containerStyle,
            disabled && disabledStyle,
        ]) }),
        React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                styles$x.wrapper,
                right && { justifyContent: 'flex-end' },
                center && { justifyContent: 'center' },
                wrapperStyle && wrapperStyle,
            ]) },
            !iconRight && (React.createElement(CheckBoxIcon, Object.assign({}, iconProps, { checkedColor: checkedColor }))),
            React.isValidElement(title)
                ? title
                : title !== '' &&
                    title && (React.createElement(Text, Object.assign({ testID: "RNE__CheckBox__Title", style: reactNative.StyleSheet.flatten([
                        Object.assign({ marginLeft: 10, marginRight: 10, color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey1 }, reactNative.Platform.select({
                            android: Object.assign({}, fonts.android.bold),
                            default: {
                                fontWeight: 'bold',
                            },
                        })),
                        textStyle && textStyle,
                        fontFamily && { fontFamily },
                        disabled && {
                            color: Color((_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.disabled)
                                .darken(0.3)
                                .string(),
                        },
                        disabled && disabledTitleStyle,
                    ]) }, titleProps), checked ? checkedTitle || title : title)),
            iconRight && (React.createElement(CheckBoxIcon, Object.assign({}, iconProps, { checkedColor: checkedColor }))))));
};
const styles$x = reactNative.StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    containerHasTitle: {
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: '#fafafa',
        borderColor: '#ededed',
    },
});
CheckBox.displayName = 'CheckBox';

withTheme(CheckBox, 'CheckBox');

var __rest$A = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Chip = (_a) => {
    var { titleStyle, buttonStyle, onPress } = _a, rest = __rest$A(_a, ["titleStyle", "buttonStyle", "onPress"]);
    return (React.createElement(Button$1, Object.assign({ titleStyle: reactNative.StyleSheet.flatten([
            { fontSize: 14, paddingHorizontal: 2 },
            titleStyle,
        ]), radius: 30, buttonStyle: buttonStyle }, (onPress === undefined
        ? {
            TouchableComponent: reactNative.TouchableWithoutFeedback,
        }
        : { onPress }), rest)));
};
Chip.displayName = 'Chip';

withTheme(Chip, 'Chip');

const DialogLoading = ({ loadingStyle, loadingProps, theme = defaultTheme, }) => {
    var _a, _b, _c;
    return (React.createElement(reactNative.View, { style: styles$w.loadingView },
        React.createElement(reactNative.ActivityIndicator, Object.assign({ style: reactNative.StyleSheet.flatten([styles$w.loading, loadingStyle]), color: (_a = loadingProps === null || loadingProps === void 0 ? void 0 : loadingProps.color) !== null && _a !== void 0 ? _a : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary, size: (_c = loadingProps === null || loadingProps === void 0 ? void 0 : loadingProps.size) !== null && _c !== void 0 ? _c : 'large', testID: "Dialog__Loading" }, loadingProps))));
};
DialogLoading.defaultProps = {
    loadingProps: { size: 'large' },
};
const styles$w = reactNative.StyleSheet.create({
    loading: {
        marginVertical: 20,
    },
    loadingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
DialogLoading.displayName = 'Dialog.Loading';

const DialogTitle = ({ title, titleStyle, titleProps, }) => {
    return (React.createElement(reactNative.Text, Object.assign({ style: reactNative.StyleSheet.flatten([styles$v.title, titleStyle]), testID: "Dialog__Title" }, titleProps), title));
};
const styles$v = reactNative.StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: reactNative.Platform.OS === 'ios' ? '600' : '700',
        marginBottom: 10,
    },
});
DialogTitle.displayName = 'Dialog.Title';

var __rest$z = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const DialogButton = (_a) => {
    var { titleStyle } = _a, rest = __rest$z(_a, ["titleStyle"]);
    return (React.createElement(Button$1, Object.assign({ style: { marginLeft: 5 }, titleStyle: reactNative.StyleSheet.flatten([styles$u.buttonTitle, titleStyle]), containerStyle: {
            width: 'auto',
        }, testID: "Dialog__Button" }, rest)));
};
DialogButton.defaultProps = {
    title: 'ACTION',
    type: 'clear',
};
const styles$u = reactNative.StyleSheet.create({
    buttonTitle: {
        fontSize: 15,
        fontWeight: '500',
    },
});
DialogButton.displayName = 'Dialog.Button';

const DialogActions = ({ children, }) => {
    return (React.createElement(reactNative.View, { style: styles$t.actionsView, testID: "Button__View" }, children));
};
const styles$t = reactNative.StyleSheet.create({
    actionsView: {
        marginTop: 10,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
});
DialogActions.displayName = 'Dialog.Actions';

var __rest$y = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Overlay = (_a) => {
    var _b;
    var { children, backdropStyle, overlayStyle, onBackdropPress = () => null, fullScreen = false, ModalComponent = reactNative.Modal, isVisible, pressableProps, onPressOut, onPressIn, onLongPress, theme } = _a, rest = __rest$y(_a, ["children", "backdropStyle", "overlayStyle", "onBackdropPress", "fullScreen", "ModalComponent", "isVisible", "pressableProps", "onPressOut", "onPressIn", "onLongPress", "theme"]);
    return (React.createElement(ModalComponent, Object.assign({ visible: isVisible, onRequestClose: onBackdropPress, transparent: true }, rest),
        React.createElement(reactNative.Pressable, Object.assign({ style: reactNative.StyleSheet.flatten([styles$s.backdrop, backdropStyle]), onPress: onBackdropPress, testID: "RNE__Overlay__backdrop" }, pressableProps, { onPressOut, onPressIn, onLongPress })),
        React.createElement(reactNative.KeyboardAvoidingView, { testID: "RNE__Overlay__Container", style: styles$s.container, pointerEvents: "box-none", behavior: getBehaviorType },
            React.createElement(reactNative.View, { testID: "RNE__Overlay", style: reactNative.StyleSheet.flatten([
                    styles$s.overlay,
                    fullScreen && styles$s.fullscreen,
                    {
                        backgroundColor: Color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.white)
                            .lighten(10)
                            .rgb()
                            .toString(),
                    },
                    overlayStyle,
                ]) }, children))));
};
const styles$s = reactNative.StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .4)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullscreen: {
        width: '100%',
        height: '100%',
    },
    overlay: Object.assign({ backgroundColor: 'white', borderRadius: 3, padding: 10 }, reactNative.Platform.select({
        android: {
            elevation: 2,
        },
        default: {
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 4,
        },
    })),
});
Overlay.displayName = 'Overlay';

var __rest$x = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const DialogBase = (_a) => {
    var { children, overlayStyle, onBackdropPress, isVisible } = _a, rest = __rest$x(_a, ["children", "overlayStyle", "onBackdropPress", "isVisible"]);
    return (React.createElement(Overlay, Object.assign({ isVisible: isVisible, onBackdropPress: onBackdropPress, overlayStyle: reactNative.StyleSheet.flatten([styles$r.dialog, overlayStyle]), testID: "Internal__Overlay" }, rest), children));
};
const styles$r = reactNative.StyleSheet.create({
    dialog: {
        width: '75%',
        padding: 20,
    },
    buttonView: {
        marginTop: 10,
        marginRight: -35,
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
    },
});
DialogBase.displayName = 'Dialog';

const ThemedDialogLoading = withTheme(DialogLoading, 'DialogLoading');
const ThemedDialogTitle = withTheme(DialogTitle, 'DialogTitle');
const ThemedDialogButton = withTheme(DialogButton, 'DialogButton');
const ThemedDialogActions = withTheme(DialogActions, 'DialogActions');
Object.assign(withTheme(DialogBase, 'Dialog'), {
    Loading: ThemedDialogLoading,
    Title: ThemedDialogTitle,
    Actions: ThemedDialogActions,
    Button: ThemedDialogButton,
});

withTheme(Divider, 'Divider');

var __rest$w = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const FAB = (_a) => {
    var _b, _c;
    var { color, size = 'large', visible = true, disabled, upperCase, theme = defaultTheme, style, titleStyle, buttonStyle, containerStyle, iconContainerStyle, placement } = _a, rest = __rest$w(_a, ["color", "size", "visible", "disabled", "upperCase", "theme", "style", "titleStyle", "buttonStyle", "containerStyle", "iconContainerStyle", "placement"]);
    const { current: animation } = React.useRef(new reactNative.Animated.Value(Number(visible)));
    React.useEffect(() => {
        reactNative.Animated.timing(animation, {
            toValue: Number(visible),
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [animation, visible]);
    return (React.createElement(reactNative.Animated.View, { style: reactNative.StyleSheet.flatten([
            {
                opacity: animation,
                transform: [{ scale: animation }],
            },
            styles$q.content,
            placement && {
                [placement]: 0,
                position: 'absolute',
                margin: 16,
                bottom: 0,
            },
            style,
        ]) },
        React.createElement(Button$1, Object.assign({ buttonStyle: reactNative.StyleSheet.flatten([
                rest.title
                    ? size === 'small'
                        ? styles$q.smallExtendedLabel
                        : styles$q.extendedLabel
                    : size === 'small'
                        ? styles$q.smallFAB
                        : styles$q.largeFAB,
                {
                    backgroundColor: color || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.secondary),
                },
                buttonStyle,
            ]), iconContainerStyle: [
                rest.title
                    ? {}
                    : size === 'small'
                        ? styles$q.smallFAB
                        : styles$q.largeFAB,
                iconContainerStyle,
            ], containerStyle: reactNative.StyleSheet.flatten([
                styles$q.container,
                disabled && styles$q.disabled,
                containerStyle,
            ]), titleStyle: [
                styles$q.label,
                { color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.white },
                upperCase && styles$q.upperCaseLabel,
                titleStyle,
            ] }, rest, { disabled, theme }))));
};
const styles$q = reactNative.StyleSheet.create({
    container: {
        elevation: 4,
        borderRadius: 28,
    },
    largeFAB: {
        height: 56,
        width: 56,
        padding: 16,
    },
    smallFAB: {
        height: 40,
        width: 40,
        padding: 8,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 28,
    },
    label: {
        marginHorizontal: 8,
    },
    upperCaseLabel: {
        textTransform: 'uppercase',
    },
    extendedLabel: {
        height: 48,
        paddingHorizontal: 16,
    },
    smallExtendedLabel: {
        height: 40,
        paddingHorizontal: 12,
    },
    disabled: {
        elevation: 0,
    },
});
FAB.displayName = 'FAB';

withTheme(FAB, 'FAB');

const ALIGN_STYLE = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
};
const Children = ({ style, placement, children, }) => (React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style]) }, children == null || children === false
    ? null
    : children.text
        ? renderNode(reactNative.Text, children.text, Object.assign({ numberOfLines: 1 }, children))
        : children.icon
            ? renderNode(Icon, Object.assign(Object.assign({}, children), { name: children.icon, containerStyle: reactNative.StyleSheet.flatten([
                    { alignItems: ALIGN_STYLE[placement] },
                    children.containerStyle,
                ]) }))
            : renderNode(reactNative.Text, children)));

var __rest$v = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Header = (_a) => {
    var _b, _c;
    var { hideStatusBar = false, statusBarProps, leftComponent, centerComponent, rightComponent, leftContainerStyle, centerContainerStyle, rightContainerStyle, backgroundColor, backgroundImage, backgroundImageStyle, containerStyle, placement = 'center', barStyle, children = [], linearGradientProps, ViewComponent = linearGradientProps || !backgroundImage
        ? reactNative.View
        : reactNative.ImageBackground, theme = defaultTheme, elevated, edges = ['left', 'top', 'right'] } = _a, rest = __rest$v(_a, ["hideStatusBar", "statusBarProps", "leftComponent", "centerComponent", "rightComponent", "leftContainerStyle", "centerContainerStyle", "rightContainerStyle", "backgroundColor", "backgroundImage", "backgroundImageStyle", "containerStyle", "placement", "barStyle", "children", "linearGradientProps", "ViewComponent", "theme", "elevated", "edges"]);
    React.useEffect(() => {
        if (linearGradientProps && !ViewComponent) {
            console.warn("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
        }
    });
    return (React.createElement(React.Fragment, null,
        !hideStatusBar && (React.createElement(reactNative.StatusBar, Object.assign({ barStyle: barStyle, translucent: true, backgroundColor: backgroundColor || ((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary) }, statusBarProps))),
        React.createElement(ViewComponent, Object.assign({ testID: "headerContainer" }, rest, { style: reactNative.StyleSheet.flatten([
                {
                    borderBottomColor: '#f2f2f2',
                    borderBottomWidth: reactNative.StyleSheet.hairlineWidth,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                },
                backgroundColor && { backgroundColor },
                elevated && styles$p.elevatedHeader,
                containerStyle,
            ]), source: backgroundImage, imageStyle: backgroundImageStyle }, linearGradientProps),
            React.createElement(reactNativeSafeAreaContext.SafeAreaView, { edges: edges, style: styles$p.headerSafeView },
                React.createElement(Children, { style: reactNative.StyleSheet.flatten([
                        placement === 'center' && styles$p.rightLeftContainer,
                        leftContainerStyle,
                    ]), placement: "left" }, (React.isValidElement(children) && children) ||
                    children[0] ||
                    leftComponent),
                React.createElement(Children, { style: reactNative.StyleSheet.flatten([
                        styles$p.centerContainer,
                        placement !== 'center' && {
                            paddingHorizontal: reactNative.Platform.select({
                                android: 16,
                                default: 15,
                            }),
                        },
                        centerContainerStyle,
                    ]), placement: placement }, children[1] || centerComponent),
                React.createElement(Children, { style: reactNative.StyleSheet.flatten([
                        placement === 'center' && styles$p.rightLeftContainer,
                        rightContainerStyle,
                    ]), placement: "right" }, children[2] || rightComponent)))));
};
const styles$p = reactNative.StyleSheet.create({
    headerSafeView: {
        width: '100%',
        flexDirection: 'row',
    },
    centerContainer: {
        flex: 3,
    },
    rightLeftContainer: {
        flex: 1,
    },
    elevatedHeader: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.6,
        shadowRadius: 8.0,
        elevation: 24,
    },
});
Header.displayName = 'Header';

withTheme(Header, 'Header');

withTheme(Icon, 'Icon');

Object.assign(withTheme(Image$1, 'Image'), {
    getSize: reactNative.Image.getSize,
    getSizeWithHeaders: reactNative.Image.getSizeWithHeaders,
    prefetch: reactNative.Image.prefetch,
    abortPrefetch: reactNative.Image.abortPrefetch,
    queryCache: reactNative.Image.queryCache,
    resolveAssetSource: reactNative.Image.resolveAssetSource,
});

var __rest$u = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const renderText$1 = (content, defaultProps, style) => renderNode(reactNative.Text, content, Object.assign(Object.assign({}, defaultProps), { style: reactNative.StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
class Input extends React.Component {
    constructor() {
        super(...arguments);
        this.shakeAnimationValue = new reactNative.Animated.Value(0);
        this.shake = () => {
            const { shakeAnimationValue } = this;
            shakeAnimationValue.setValue(0);
            reactNative.Animated.timing(shakeAnimationValue, {
                duration: 375,
                toValue: 3,
                easing: reactNative.Easing.bounce,
                useNativeDriver: true,
            }).start();
        };
    }
    focus() {
        this.input.focus();
    }
    blur() {
        this.input.blur();
    }
    clear() {
        this.input.clear();
    }
    isFocused() {
        return this.input.isFocused();
    }
    setNativeProps(nativeProps) {
        this.input.setNativeProps(nativeProps);
    }
    render() {
        var _a, _b, _c, _d, _e;
        const _f = this.props, { containerStyle, disabled, disabledInputStyle, inputContainerStyle, leftIcon, leftIconContainerStyle, rightIcon, rightIconContainerStyle, InputComponent = reactNative.TextInput, inputStyle, ErrorComponent = reactNative.Text, errorProps, errorStyle, errorMessage, label, labelStyle, labelProps, theme = defaultTheme, renderErrorMessage = true, style } = _f, attributes = __rest$u(_f, ["containerStyle", "disabled", "disabledInputStyle", "inputContainerStyle", "leftIcon", "leftIconContainerStyle", "rightIcon", "rightIconContainerStyle", "InputComponent", "inputStyle", "ErrorComponent", "errorProps", "errorStyle", "errorMessage", "label", "labelStyle", "labelProps", "theme", "renderErrorMessage", "style"]);
        const translateX = this.shakeAnimationValue.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            outputRange: [0, -15, 0, 15, 0, -15, 0],
        });
        const hideErrorMessage = !renderErrorMessage && !errorMessage;
        return (React.createElement(reactNative.View, { testID: "RNE__Input__view-wrapper", style: reactNative.StyleSheet.flatten([styles$o.container, containerStyle]) },
            renderText$1(label, Object.assign({ style: labelStyle }, labelProps), Object.assign({ fontSize: 16, color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 }, reactNative.Platform.select({
                android: Object.assign({}, fonts.android.bold),
                default: {
                    fontWeight: 'bold',
                },
            }))),
            React.createElement(reactNative.Animated.View, { style: reactNative.StyleSheet.flatten([
                    {
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        borderColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey3,
                    },
                    inputContainerStyle,
                    { transform: [{ translateX }] },
                ]) },
                leftIcon && (React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                        styles$o.iconContainer,
                        leftIconContainerStyle,
                    ]) }, renderNode(Icon, leftIcon))),
                React.createElement(InputComponent, Object.assign({ testID: "RNE__Input__text-input", underlineColorAndroid: "transparent", editable: !disabled, ref: (ref) => {
                        this.input = ref;
                    }, style: reactNative.StyleSheet.flatten([
                        {
                            color: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.black,
                            fontSize: 18,
                            flex: 1,
                            minHeight: 40,
                        },
                        inputStyle,
                        disabled && styles$o.disabledInput,
                        disabled && disabledInputStyle,
                        style,
                    ]), placeholderTextColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey3 }, patchWebProps(attributes))),
                rightIcon && (React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                        styles$o.iconContainer,
                        rightIconContainerStyle,
                    ]) }, renderNode(Icon, rightIcon)))),
            React.createElement(ErrorComponent, Object.assign({}, errorProps, { style: reactNative.StyleSheet.flatten([
                    {
                        margin: 5,
                        fontSize: 12,
                        color: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.error,
                    },
                    errorStyle && errorStyle,
                    hideErrorMessage && {
                        height: 0,
                        margin: 0,
                        padding: 0,
                    },
                ]) }), errorMessage)));
    }
}
Input.displayName = 'Input';
const styles$o = reactNative.StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    disabledInput: {
        opacity: 0.5,
    },
    iconContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 4,
        marginVertical: 4,
    },
});

withTheme(Input, 'Input');

var __rest$t = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const LinearProgress = (_a) => {
    var _b, _c;
    var { value, variant = value === undefined ? 'indeterminate' : 'determinate', color = 'secondary', style, theme = defaultTheme, trackColor, animation = { duration: 2000 } } = _a, rest = __rest$t(_a, ["value", "variant", "color", "style", "theme", "trackColor", "animation"]);
    const [width, setWidth] = React.useState(0);
    const { current: transition } = React.useRef(new reactNative.Animated.Value(0));
    const intermediate = React.useRef();
    const startAnimation = React.useCallback(() => {
        if (variant === 'indeterminate') {
            intermediate.current = reactNative.Animated.timing(transition, {
                duration: typeof animation !== 'boolean' ? animation.duration : 2000,
                toValue: 1,
                useNativeDriver: true,
                isInteraction: false,
            });
            transition.setValue(0);
            reactNative.Animated.loop(intermediate.current).start();
        }
        else {
            reactNative.Animated.timing(transition, {
                duration: typeof animation !== 'boolean' ? animation.duration : 1000,
                toValue: value || 0,
                useNativeDriver: reactNative.Platform.OS !== 'web',
                isInteraction: false,
            }).start();
        }
    }, [variant, transition, animation, value]);
    const tintColor = color === 'secondary' || color === 'primary'
        ? (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b[color]
        : Color(color).rgb().string() || ((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.secondary);
    const trackTintColor = trackColor || Color(tintColor).alpha(0.4).rgb().string();
    React.useEffect(() => {
        if (animation) {
            startAnimation();
        }
    }, [animation, startAnimation]);
    return (React.createElement(reactNative.View, Object.assign({ testID: "RNE__LinearProgress_Bar", accessible: true, accessibilityRole: "progressbar", accessibilityValue: {
            now: clamp(value),
            min: 0,
            max: 1,
        } }, rest, { onLayout: (e) => {
            setWidth(e.nativeEvent.layout.width);
        }, style: [
            {
                height: 4,
                overflow: 'hidden',
                width: '100%',
                backgroundColor: trackTintColor,
                position: 'relative',
            },
            style,
        ] }), animation ? (React.createElement(reactNative.Animated.View, { testID: "RNE__LinearProgress_Progress", style: {
            transform: [
                {
                    translateX: transition.interpolate(variant === 'indeterminate'
                        ? {
                            inputRange: [0, 1],
                            outputRange: [-width, 0.5 * width],
                        }
                        : {
                            inputRange: [0, 1],
                            outputRange: [-0.5 * width, 0],
                        }),
                },
                {
                    scaleX: transition.interpolate(variant === 'indeterminate'
                        ? {
                            inputRange: [0, 0.5, 1],
                            outputRange: [0.0001, 1, 0.001],
                        }
                        : {
                            inputRange: [0, 1],
                            outputRange: [0.0001, 1],
                        }),
                },
            ],
            backgroundColor: tintColor,
            flex: 1,
        } })) : (React.createElement(reactNative.View, { testID: "RNE__LinearProgress_Progress", style: {
            flex: 1,
            width: width * clamp(value || 0),
            backgroundColor: tintColor,
        } }))));
};
LinearProgress.displayName = 'LinearProgress';
const clamp = (value) => Math.max(0, Math.min(value, 1)) || 0;

Object.assign(withTheme(LinearProgress, 'LinearProgress'), {
    INDETERMINATE: 'indeterminate',
    DETERMINATE: 'determinate',
});

var __rest$s = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const PadView = (_a) => {
    var { children, pad, Component } = _a, props = __rest$s(_a, ["children", "pad", "Component"]);
    const _root = React.useRef(null);
    const length = React.Children.count(children);
    const Container = Component || reactNative.View;
    return (React.createElement(Container, Object.assign({}, props, { ref: _root, testID: "RNE__LISTITEM__padView" }), React.Children.map(children, (child, index) => child && [
        child,
        index !== length - 1 && React.createElement(reactNative.View, { style: { paddingLeft: pad } }),
    ])));
};

var __rest$r = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemBase = (props) => {
    var _a, _b;
    const { containerStyle, onPress, onLongPress, Component = onPress || onLongPress ? reactNative.Pressable : reactNative.View, disabled, disabledStyle, bottomDivider, topDivider, pad = 16, linearGradientProps, ViewComponent = reactNative.View, theme = defaultTheme, children } = props, rest = __rest$r(props, ["containerStyle", "onPress", "onLongPress", "Component", "disabled", "disabledStyle", "bottomDivider", "topDivider", "pad", "linearGradientProps", "ViewComponent", "theme", "children"]);
    if (props.linearGradientProps && !props.ViewComponent) {
        console.warn("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
    }
    return (React.createElement(Component, Object.assign({}, rest, { onPress: onPress, onLongPress: onLongPress, disabled: disabled }),
        React.createElement(PadView, Object.assign({ Component: ViewComponent }, linearGradientProps, { style: reactNative.StyleSheet.flatten([
                Object.assign(Object.assign({}, reactNative.Platform.select({
                    ios: {
                        padding: 14,
                    },
                    default: {
                        padding: 16,
                    },
                })), { flexDirection: 'row', alignItems: 'center', backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.background, borderColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.divider }),
                topDivider && { borderTopWidth: reactNative.StyleSheet.hairlineWidth },
                bottomDivider && { borderBottomWidth: reactNative.StyleSheet.hairlineWidth },
                containerStyle,
                disabled && disabledStyle,
            ]), pad: pad }), children)));
};
ListItemBase.displayName = 'ListItem';

var __rest$q = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemContent = (_a) => {
    var { style, right, children } = _a, rest = __rest$q(_a, ["style", "right", "children"]);
    const containerStyle = right ? styles$n.rightContainer : styles$n.container;
    return (React.createElement(reactNative.View, Object.assign({ style: [containerStyle, style] }, rest), children));
};
const styles$n = reactNative.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    rightContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});
ListItemContent.displayName = 'ListItem.Content';

var __rest$p = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemChevron = (_a) => {
    var { containerStyle } = _a, rest = __rest$p(_a, ["containerStyle"]);
    return (React.createElement(Icon, Object.assign({ type: reactNative.Platform.OS === 'ios' ? 'ionicon' : 'material', color: "#D1D1D6", name: reactNative.Platform.OS === 'ios'
            ? 'chevron-forward-outline'
            : 'keyboard-arrow-right', size: 16, containerStyle: reactNative.StyleSheet.flatten([
            { alignSelf: 'center' },
            containerStyle,
        ]) }, rest)));
};
ListItemChevron.displayName = 'ListItem.Chevron';

var __rest$o = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemInput = React.forwardRef((_a, ref) => {
    var { inputStyle, inputContainerStyle, containerStyle } = _a, rest = __rest$o(_a, ["inputStyle", "inputContainerStyle", "containerStyle"]);
    return (React.createElement(Input, Object.assign({ ref: ref, renderErrorMessage: false }, rest, { inputStyle: reactNative.StyleSheet.flatten([styles$m.input, inputStyle]), inputContainerStyle: reactNative.StyleSheet.flatten([
            styles$m.inputContainer,
            inputContainerStyle,
        ]), containerStyle: reactNative.StyleSheet.flatten([styles$m.container, containerStyle]) })));
});
const styles$m = reactNative.StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 0,
    },
    inputContainer: {
        flex: 1,
        borderBottomWidth: 0,
        width: null,
        height: null,
    },
    input: {
        flex: 1,
        textAlign: 'right',
        width: null,
        height: null,
    },
});
ListItemInput.displayName = 'ListItem.Input';

var __rest$n = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemCheckBox = (_a) => {
    var { containerStyle } = _a, rest = __rest$n(_a, ["containerStyle"]);
    return (React.createElement(CheckBox, Object.assign({}, rest, { containerStyle: reactNative.StyleSheet.flatten([styles$l.container, containerStyle]) })));
};
const styles$l = reactNative.StyleSheet.create({
    container: {
        margin: 0,
        marginRight: 0,
        marginLeft: 0,
        padding: 0,
    },
});
ListItemCheckBox.displayName = 'ListItem.CheckBox';

var __rest$m = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemButtonGroup = (_a) => {
    var { containerStyle } = _a, rest = __rest$m(_a, ["containerStyle"]);
    return (React.createElement(ButtonGroup, Object.assign({}, rest, { containerStyle: reactNative.StyleSheet.flatten([styles$k.container, containerStyle]) })));
};
const styles$k = reactNative.StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
        marginVertical: 0,
    },
});
ListItemButtonGroup.displayName = 'ListItem.ButtonGroup';

var __rest$l = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ANDROID_SECONDARY$1 = 'rgba(0, 0, 0, 0.54)';
const ListItemTitle = (_a) => {
    var { style, right, children } = _a, rest = __rest$l(_a, ["style", "right", "children"]);
    return (React.createElement(Text, Object.assign({ testID: "listItemTitle", style: reactNative.StyleSheet.flatten([
            styles$j.title,
            right && styles$j.rightTitle,
            style,
        ]) }, rest), children));
};
const styles$j = reactNative.StyleSheet.create({
    title: Object.assign({ backgroundColor: 'transparent' }, reactNative.Platform.select({
        ios: {
            fontSize: 17,
        },
        default: {
            fontSize: 16,
        },
    })),
    rightTitle: {
        color: ANDROID_SECONDARY$1,
    },
});
ListItemTitle.displayName = 'ListItem.Title';

var __rest$k = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';
const ListItemSubtitle = (_a) => {
    var { style, right, children } = _a, props = __rest$k(_a, ["style", "right", "children"]);
    return (React.createElement(Text, Object.assign({ testID: "listItemTitle", style: reactNative.StyleSheet.flatten([
            styles$i.subtitle,
            right && styles$i.rightSubtitle,
            style,
        ]) }, props), children));
};
const styles$i = reactNative.StyleSheet.create({
    subtitle: Object.assign({ backgroundColor: 'transparent' }, reactNative.Platform.select({
        ios: {
            fontSize: 15,
        },
        default: {
            fontSize: 14,
        },
    })),
    rightSubtitle: {
        color: ANDROID_SECONDARY,
    },
});
ListItemSubtitle.displayName = 'ListItem.Subtitle';

var __rest$j = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemSwipeable = (_a) => {
    var { children, leftStyle, rightStyle, leftContent, rightContent, leftWidth = ScreenWidth / 3, rightWidth = ScreenWidth / 3, minSlideWidth = ScreenWidth / 3, onSwipeBegin, onSwipeEnd, animation = { type: 'spring', duration: 200 } } = _a, rest = __rest$j(_a, ["children", "leftStyle", "rightStyle", "leftContent", "rightContent", "leftWidth", "rightWidth", "minSlideWidth", "onSwipeBegin", "onSwipeEnd", "animation"]);
    const translateX = React.useRef(new reactNative.Animated.Value(0));
    const panX = React.useRef(0);
    const slideAnimation = React.useCallback((toValue) => {
        panX.current = toValue;
        reactNative.Animated[animation.type || 'spring'](translateX.current, {
            toValue,
            useNativeDriver: true,
            duration: animation.duration || 200,
        }).start();
    }, [animation.duration, animation.type]);
    const resetCallBack = React.useCallback(() => {
        slideAnimation(0);
    }, [slideAnimation]);
    const onMove = React.useCallback((_, { dx }) => {
        translateX.current.setValue(panX.current + dx);
    }, []);
    const onRelease = React.useCallback((_, { dx }) => {
        if (Math.abs(panX.current + dx) >= minSlideWidth) {
            slideAnimation(panX.current + dx > 0 ? leftWidth : -rightWidth);
        }
        else {
            slideAnimation(0);
        }
    }, [leftWidth, rightWidth, slideAnimation, minSlideWidth]);
    const shouldSlide = React.useCallback((_, { dx, dy, vx, vy }) => {
        if (dx > 0 && !leftContent && !panX.current) {
            return false;
        }
        if (dx < 0 && !rightContent && !panX.current) {
            return false;
        }
        return (Math.abs(dx) > Math.abs(dy) * 2 && Math.abs(vx) > Math.abs(vy) * 2.5);
    }, [leftContent, rightContent]);
    const _panResponder = React.useMemo(() => reactNative.PanResponder.create({
        onMoveShouldSetPanResponder: shouldSlide,
        onPanResponderGrant: (_event, { vx }) => {
            onSwipeBegin === null || onSwipeBegin === void 0 ? void 0 : onSwipeBegin(vx > 0 ? 'left' : 'right');
        },
        onPanResponderMove: onMove,
        onPanResponderRelease: onRelease,
        onPanResponderReject: onRelease,
        onPanResponderTerminate: onRelease,
        onPanResponderEnd: () => {
            onSwipeEnd === null || onSwipeEnd === void 0 ? void 0 : onSwipeEnd();
        },
    }), [onMove, onRelease, onSwipeBegin, onSwipeEnd, shouldSlide]);
    return (React.createElement(reactNative.View, { style: styles$h.container },
        React.createElement(reactNative.View, { style: styles$h.actions },
            React.createElement(reactNative.View, { style: [
                    {
                        width: leftWidth,
                        zIndex: 1,
                    },
                    leftStyle,
                ] }, typeof leftContent === 'function'
                ? leftContent(resetCallBack)
                : leftContent),
            React.createElement(reactNative.View, { style: styles$h.empty }),
            React.createElement(reactNative.View, { style: [
                    {
                        width: rightWidth,
                        zIndex: 1,
                    },
                    rightStyle,
                ] }, typeof rightContent === 'function'
                ? rightContent(resetCallBack)
                : rightContent)),
        React.createElement(reactNative.Animated.View, Object.assign({ style: {
                transform: [
                    {
                        translateX: translateX.current,
                    },
                ],
            } }, _panResponder.panHandlers),
            React.createElement(ListItemBase, Object.assign({}, rest), children))));
};
const styles$h = reactNative.StyleSheet.create({
    actions: {
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'absolute',
        right: 0,
        top: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        justifyContent: 'center',
    },
    empty: {
        flex: 0,
    },
});
ListItemSwipeable.displayName = 'ListItem.Swipeable';

var __rest$i = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const ListItemAccordion = (_a) => {
    var { children, isExpanded = false, icon = React.createElement(Icon, { name: 'chevron-down', type: "material-community" }), expandIcon, content, leftRotate = false, noRotation, noIcon, animation = {
        duration: 350,
        type: 'timing',
    } } = _a, rest = __rest$i(_a, ["children", "isExpanded", "icon", "expandIcon", "content", "leftRotate", "noRotation", "noIcon", "animation"]);
    const transition = React.useRef(new reactNative.Animated.Value(0));
    const startAnimation = React.useCallback(() => {
        if (typeof animation !== 'boolean') {
            reactNative.Animated[animation.type || 'timing'](transition.current, {
                toValue: Number(isExpanded),
                useNativeDriver: true,
                duration: animation.duration || 350,
            }).start();
        }
    }, [isExpanded, animation]);
    React.useEffect(() => {
        startAnimation();
    }, [isExpanded, startAnimation]);
    const iconAnimation = React.useMemo(() => ({
        transform: [
            {
                rotate: noRotation
                    ? '0deg'
                    : transition.current.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', leftRotate ? '180deg' : '-180deg'],
                    }),
            },
        ],
    }), [leftRotate, noRotation]);
    return (React.createElement(React.Fragment, null,
        React.createElement(ListItemBase, Object.assign({}, rest),
            React.isValidElement(content) ? content : React.createElement(ListItemContent, null),
            !noIcon && (React.createElement(reactNative.Animated.View, { testID: "RNE__ListItem__Accordion__Icon", style: iconAnimation }, renderNode(Icon, isExpanded ? expandIcon !== null && expandIcon !== void 0 ? expandIcon : icon : icon)))),
        isExpanded && (React.createElement(reactNative.Animated.View, { testID: "RNE__ListItem__Accordion__Children", style: {
                opacity: transition.current,
            } }, children))));
};
ListItemAccordion.displayName = 'ListItem.Accordion';

Object.assign(withTheme(ListItemBase, 'ListItem'), {
    Accordion: withTheme(ListItemAccordion, 'ListItemAccordion'),
    Chevron: withTheme(ListItemChevron, 'ListItemChevron'),
    Content: withTheme(ListItemContent, 'ListItemContent'),
    Input: withTheme(ListItemInput, 'ListItemInput'),
    Title: withTheme(ListItemTitle, 'ListItemTitle'),
    Subtitle: withTheme(ListItemSubtitle, 'ListItemSubtitle'),
    Swipeable: withTheme(ListItemSwipeable, 'ListItemSwipeable'),
    CheckBox: withTheme(ListItemCheckBox, 'ListItemCheckBox'),
    ButtonGroup: withTheme(ListItemButtonGroup, 'ListItemButtonGroup'),
});

withTheme(Overlay, 'Overlay');

var __rest$h = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const PricingButton = (_a) => {
    var { title, buttonStyle, color, titleStyle, onButtonPress, icon, theme = defaultTheme } = _a, buttonProps = __rest$h(_a, ["title", "buttonStyle", "color", "titleStyle", "onButtonPress", "icon", "theme"]);
    return (React.createElement(Button$1, Object.assign({ testID: "RNE__PricingButton", title: title, buttonStyle: reactNative.StyleSheet.flatten([
            styles$g.button,
            buttonStyle,
            { backgroundColor: theme.colors[color] || color },
        ]), titleStyle: titleStyle, onPress: onButtonPress, icon: React.isValidElement(icon) ? (icon) : typeof icon === 'string' ? (React.createElement(Icon, { name: icon, size: 15, color: "white" })) : (React.createElement(Icon, Object.assign({}, icon))) }, buttonProps)));
};
const styles$g = reactNative.StyleSheet.create({
    button: {
        marginTop: 15,
        marginBottom: 10,
    },
});

var __rest$g = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const PricingCard = (_a) => {
    var _b, _c, _d;
    var { containerStyle, wrapperStyle, title, price, info = [], button, theme = defaultTheme, color = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary, titleStyle, pricingStyle, infoStyle, onButtonPress } = _a, rest = __rest$g(_a, ["containerStyle", "wrapperStyle", "title", "price", "info", "button", "theme", "color", "titleStyle", "pricingStyle", "infoStyle", "onButtonPress"]);
    return (React.createElement(reactNative.View, Object.assign({}, rest, { style: reactNative.StyleSheet.flatten([
            Object.assign({ margin: 15, marginBottom: 15, backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.background, borderWidth: 1, padding: 15, borderColor: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey5 }, reactNative.Platform.select({
                android: {
                    elevation: 1,
                },
                default: {
                    shadowColor: 'rgba(0,0,0, .2)',
                    shadowOffset: { height: 1, width: 0 },
                    shadowOpacity: 0.5,
                    shadowRadius: 0.5,
                },
            })),
            containerStyle && containerStyle,
        ]) }),
        React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                styles$f.wrapper,
                wrapperStyle && wrapperStyle,
            ]) },
            React.createElement(Text, { testID: "pricingCardTitle", style: reactNative.StyleSheet.flatten([
                    styles$f.pricingTitle,
                    titleStyle,
                    { color },
                ]) }, title),
            React.createElement(Text, { style: reactNative.StyleSheet.flatten([styles$f.pricingPrice, pricingStyle]) }, price), info === null || info === void 0 ? void 0 :
            info.map((item) => {
                var _a;
                return (React.createElement(Text, { key: item, style: reactNative.StyleSheet.flatten([
                        Object.assign({ textAlign: 'center', marginTop: 5, marginBottom: 5, color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 }, reactNative.Platform.select({
                            android: Object.assign({}, fonts.android.bold),
                            default: {
                                fontWeight: '600',
                            },
                        })),
                        infoStyle,
                    ]) }, item));
            }),
            React.isValidElement(button) ? (button) : (React.createElement(PricingButton, Object.assign({ color: color, onButtonPress: onButtonPress }, button))))));
};
const styles$f = reactNative.StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent',
    },
    pricingTitle: Object.assign({ textAlign: 'center', fontSize: normalize(30) }, reactNative.Platform.select({
        android: Object.assign({}, fonts.android.black),
        default: {
            fontWeight: '800',
        },
    })),
    pricingPrice: Object.assign({ textAlign: 'center', marginTop: 10, marginBottom: 10, fontSize: normalize(40) }, reactNative.Platform.select({
        android: Object.assign({}, fonts.android.bold),
        default: {
            fontWeight: '700',
        },
    })),
});
PricingCard.displayName = 'PricingCard';

withTheme(PricingCard, 'PricingCard');

const Rating = () => {
    return React.createElement(reactNativeRatings.Rating, null);
};
Rating.displayName = 'Rating';

withTheme(Rating, 'Rating');

var __rest$f = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const defaultSearchIcon$2 = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'ionicon',
        size: 20,
        name: 'ios-search',
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.grey,
    });
};
const defaultClearIcon$2 = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'ionicon',
        name: 'ios-close-circle',
        size: 20,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.ios) === null || _c === void 0 ? void 0 : _c.grey,
    });
};
class SearchBarIOS extends React.Component {
    constructor(props) {
        super(props);
        this.focus = () => {
            this.input.focus();
        };
        this.blur = () => {
            this.input.blur();
        };
        this.clear = () => {
            this.input.clear();
            this.onChangeText('');
            this.props.onClear();
        };
        this.cancel = () => {
            this.onChangeText('');
            if (this.props.showCancel) {
                reactNative.LayoutAnimation.configureNext(reactNative.LayoutAnimation.Presets.easeInEaseOut);
                this.setState({ hasFocus: false });
            }
            setTimeout(() => {
                this.blur();
                this.props.onCancel();
            }, 0);
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            reactNative.LayoutAnimation.configureNext(reactNative.LayoutAnimation.Presets.easeInEaseOut);
            this.setState({
                hasFocus: true,
                isEmpty: this.props.value === '',
            });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
            if (!this.props.showCancel) {
                reactNative.LayoutAnimation.configureNext(reactNative.LayoutAnimation.Presets.easeInEaseOut);
                this.setState({
                    hasFocus: false,
                });
            }
        };
        this.onChangeText = (text) => {
            this.props.onChangeText(text);
            this.setState({ isEmpty: text === '' });
        };
        const { value } = props;
        this.state = {
            hasFocus: false,
            isEmpty: value ? value === '' : true,
            cancelButtonWidth: null,
        };
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        const _h = this.props, { theme = defaultTheme, cancelButtonProps, cancelButtonTitle, clearIcon, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, placeholderTextColor, showLoading, loadingProps, searchIcon, showCancel } = _h, attributes = __rest$f(_h, ["theme", "cancelButtonProps", "cancelButtonTitle", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "placeholderTextColor", "showLoading", "loadingProps", "searchIcon", "showCancel"]);
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest$f(loadingProps, ["style"]);
        const { buttonStyle, buttonTextStyle, color: buttonColor, disabled: buttonDisabled, buttonDisabledStyle, buttonDisabledTextStyle } = cancelButtonProps, otherCancelButtonProps = __rest$f(cancelButtonProps, ["buttonStyle", "buttonTextStyle", "color", "disabled", "buttonDisabledStyle", "buttonDisabledTextStyle"]);
        return (React.createElement(reactNative.View, { testID: "RNE__SearchBar-wrapper", style: reactNative.StyleSheet.flatten([
                styles$e.container,
                { backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.background },
                containerStyle,
            ]) },
            React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", renderErrorMessage: false }, attributes, { onFocus: this.onFocus, onBlur: this.onBlur, onChangeText: this.onChangeText, ref: (input) => {
                    this.input = input;
                }, inputStyle: reactNative.StyleSheet.flatten([styles$e.input, inputStyle]), containerStyle: {
                    paddingHorizontal: 0,
                }, inputContainerStyle: reactNative.StyleSheet.flatten([
                    styles$e.inputContainer,
                    { backgroundColor: (_d = (_c = (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.platform) === null || _c === void 0 ? void 0 : _c.ios) === null || _d === void 0 ? void 0 : _d.searchBg },
                    hasFocus && {
                        marginRight: this.state.cancelButtonWidth
                            ? this.state.cancelButtonWidth
                            : 0,
                    },
                    inputContainerStyle,
                ]), leftIcon: renderNode(Icon, searchIcon, defaultSearchIcon$2(theme)), leftIconContainerStyle: reactNative.StyleSheet.flatten([
                    styles$e.leftIconContainerStyle,
                    leftIconContainerStyle,
                ]), placeholderTextColor: placeholderTextColor || ((_g = (_f = (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.platform) === null || _f === void 0 ? void 0 : _f.ios) === null || _g === void 0 ? void 0 : _g.grey), rightIcon: React.createElement(reactNative.View, { style: { flexDirection: 'row' } },
                    showLoading && (React.createElement(reactNative.ActivityIndicator, Object.assign({ key: "loading", style: reactNative.StyleSheet.flatten([{ marginRight: 5 }, loadingStyle]) }, otherLoadingProps))),
                    !isEmpty &&
                        renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon$2(theme)), { key: 'cancel', onPress: this.clear }))), rightIconContainerStyle: reactNative.StyleSheet.flatten([
                    styles$e.rightIconContainerStyle,
                    rightIconContainerStyle,
                ]) })),
            React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                    styles$e.cancelButtonContainer,
                    {
                        opacity: this.state.cancelButtonWidth === null ? 0 : 1,
                        right: hasFocus
                            ? 0
                            : this.state.cancelButtonWidth && -this.state.cancelButtonWidth,
                    },
                ]), onLayout: (event) => this.setState({ cancelButtonWidth: event.nativeEvent.layout.width }), testID: "RNE__SearchBar-cancelButtonContainer" },
                React.createElement(reactNative.Pressable, Object.assign({ accessibilityRole: "button", onPress: this.cancel, disabled: buttonDisabled }, otherCancelButtonProps),
                    React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                            buttonStyle,
                            buttonDisabled && buttonDisabledStyle,
                        ]), testID: "RNE__SearchBar-cancelButton" },
                        React.createElement(reactNative.Text, { style: reactNative.StyleSheet.flatten([
                                styles$e.buttonTextStyle,
                                buttonColor && { color: buttonColor },
                                buttonTextStyle,
                                buttonDisabled &&
                                    (buttonDisabledTextStyle || styles$e.buttonTextDisabled),
                            ]) }, cancelButtonTitle))))));
    }
}
SearchBarIOS.defaultProps = {
    value: '',
    cancelButtonTitle: 'Cancel',
    loadingProps: {},
    cancelButtonProps: {},
    showLoading: false,
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
    searchIcon: { name: 'ios-search' },
    clearIcon: { name: 'ios-close-circle' },
    showCancel: false,
};
const styles$e = reactNative.StyleSheet.create({
    container: {
        paddingBottom: 13,
        paddingTop: 13,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
    },
    input: {
        marginLeft: 6,
        overflow: 'hidden',
    },
    inputContainer: {
        borderBottomWidth: 0,
        borderRadius: 9,
        minHeight: 36,
        marginLeft: 8,
        marginRight: 8,
    },
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
    buttonTextStyle: {
        color: '#007aff',
        textAlign: 'center',
        padding: 8,
        fontSize: 18,
    },
    buttonTextDisabled: {
        color: '#cdcdcd',
    },
    cancelButtonContainer: {
        position: 'absolute',
    },
});

var __rest$e = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const defaultSearchIcon$1 = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'material',
        size: 25,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.android) === null || _c === void 0 ? void 0 : _c.grey,
        name: 'search',
    });
};
const defaultCancelIcon = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'material',
        size: 25,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.android) === null || _c === void 0 ? void 0 : _c.grey,
        name: 'arrow-back',
    });
};
const defaultClearIcon$1 = (theme) => {
    var _a, _b, _c;
    return ({
        type: 'material',
        size: 25,
        color: (_c = (_b = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.platform) === null || _b === void 0 ? void 0 : _b.android) === null || _c === void 0 ? void 0 : _c.grey,
        name: 'clear',
    });
};
class SearchBarAndroid extends React.Component {
    constructor(props) {
        super(props);
        this.focus = () => {
            this.input.focus();
        };
        this.blur = () => {
            this.input.blur();
        };
        this.clear = () => {
            this.input.clear();
            this.onChangeText('');
            this.props.onClear();
        };
        this.cancel = () => {
            this.blur();
            this.props.onCancel();
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            this.setState({
                hasFocus: true,
                isEmpty: this.props.value === '',
            });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
            this.setState({ hasFocus: false });
        };
        this.onChangeText = (text) => {
            this.props.onChangeText(text);
            this.setState({ isEmpty: text === '' });
        };
        this._keyboardDidHide = () => {
            var _a, _b;
            this.blur();
            (_b = (_a = this.props).onKeyboardHide) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        const { value = '' } = props;
        this.state = {
            hasFocus: false,
            isEmpty: value ? value === '' : true,
        };
        if (this.props.onKeyboardHide) {
            this.keyboardListener = reactNative.Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
        }
    }
    componentWillUnmount() {
        if (this.keyboardListener) {
            this.keyboardListener.remove();
        }
    }
    render() {
        var _a;
        const _b = this.props, { theme = defaultTheme, clearIcon = { name: 'clear' }, containerStyle, leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, searchIcon = { name: 'search' }, cancelIcon = { name: 'arrow-back' }, showLoading = false, loadingProps = {} } = _b, attributes = __rest$e(_b, ["theme", "clearIcon", "containerStyle", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "searchIcon", "cancelIcon", "showLoading", "loadingProps"]);
        const { hasFocus, isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest$e(loadingProps, ["style"]);
        return (React.createElement(reactNative.View, { testID: "RNE__SearchBar-wrapper", style: reactNative.StyleSheet.flatten([
                {
                    backgroundColor: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.background,
                    paddingTop: 8,
                    paddingBottom: 8,
                },
                containerStyle,
            ]) },
            React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", renderErrorMessage: false }, attributes, { onFocus: this.onFocus, onBlur: this.onBlur, onChangeText: this.onChangeText, ref: (input) => {
                    this.input = input;
                }, containerStyle: { paddingHorizontal: 0 }, inputStyle: reactNative.StyleSheet.flatten([styles$d.input, inputStyle]), inputContainerStyle: reactNative.StyleSheet.flatten([
                    styles$d.inputContainer,
                    inputContainerStyle,
                ]), leftIcon: hasFocus
                    ? renderNode(Icon, cancelIcon, Object.assign(Object.assign({}, defaultCancelIcon(theme)), { onPress: this.cancel }))
                    : renderNode(Icon, searchIcon, defaultSearchIcon$1(theme)), leftIconContainerStyle: reactNative.StyleSheet.flatten([
                    styles$d.leftIconContainerStyle,
                    leftIconContainerStyle,
                ]), rightIcon: React.createElement(reactNative.View, { style: { flexDirection: 'row' } },
                    showLoading && (React.createElement(reactNative.ActivityIndicator, Object.assign({ key: "loading", style: reactNative.StyleSheet.flatten([{ marginRight: 5 }, loadingStyle]) }, otherLoadingProps))),
                    !isEmpty &&
                        renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon$1(theme)), { key: 'cancel', onPress: this.clear }))), rightIconContainerStyle: reactNative.StyleSheet.flatten([
                    styles$d.rightIconContainerStyle,
                    rightIconContainerStyle,
                ]) }))));
    }
}
SearchBarAndroid.defaultProps = {
    onClear: () => null,
    onCancel: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
};
const styles$d = reactNative.StyleSheet.create({
    input: {
        marginLeft: 24,
        marginRight: 8,
    },
    inputContainer: {
        borderBottomWidth: 0,
        width: '100%',
    },
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
});

var __rest$d = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const defaultSearchIcon = (theme) => {
    var _a;
    return ({
        type: 'material',
        size: 18,
        name: 'search',
        color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3,
    });
};
const defaultClearIcon = (theme) => {
    var _a;
    return ({
        type: 'material',
        size: 18,
        name: 'clear',
        color: (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3,
    });
};
class SearchBarDefault extends React.Component {
    constructor(props) {
        super(props);
        this.focus = () => {
            this.input.focus();
        };
        this.blur = () => {
            this.input.blur();
        };
        this.clear = () => {
            this.input.clear();
            this.onChangeText('');
            this.props.onClear();
        };
        this.onFocus = (event) => {
            this.props.onFocus(event);
            this.setState({ isEmpty: this.props.value === '' });
        };
        this.onBlur = (event) => {
            this.props.onBlur(event);
        };
        this.onChangeText = (text) => {
            this.props.onChangeText(text);
            this.setState({ isEmpty: text === '' });
        };
        const { value } = props;
        this.state = {
            isEmpty: value ? value === '' : true,
        };
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const _g = this.props, { theme = defaultTheme } = _g, rest = __rest$d(_g, ["theme"]);
        const { lightTheme, round, clearIcon = defaultClearIcon(theme), containerStyle, searchIcon = defaultSearchIcon(theme), leftIconContainerStyle, rightIconContainerStyle, inputContainerStyle, inputStyle, showLoading, loadingProps, placeholderTextColor = (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.grey3 } = rest, attributes = __rest$d(rest, ["lightTheme", "round", "clearIcon", "containerStyle", "searchIcon", "leftIconContainerStyle", "rightIconContainerStyle", "inputContainerStyle", "inputStyle", "showLoading", "loadingProps", "placeholderTextColor"]);
        const { isEmpty } = this.state;
        const { style: loadingStyle } = loadingProps, otherLoadingProps = __rest$d(loadingProps, ["style"]);
        return (React.createElement(reactNative.View, { testID: "RNE__SearchBar-wrapper", style: reactNative.StyleSheet.flatten([
                {
                    borderTopWidth: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: '#000',
                    borderTopColor: '#000',
                    padding: 8,
                    backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey0,
                },
                lightTheme && {
                    borderTopColor: '#e1e1e1',
                    borderBottomColor: '#e1e1e1',
                    backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey5,
                },
                containerStyle,
            ]) },
            React.createElement(Input, Object.assign({ testID: "RNE__SearchBar", renderErrorMessage: false }, attributes, { onFocus: this.onFocus, onBlur: this.onBlur, onChangeText: this.onChangeText, ref: (input) => {
                    this.input = input;
                }, placeholderTextColor: placeholderTextColor, inputStyle: reactNative.StyleSheet.flatten([
                    {
                        color: (_d = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _d === void 0 ? void 0 : _d.grey3,
                        marginLeft: 10,
                    },
                    inputStyle,
                ]), inputContainerStyle: reactNative.StyleSheet.flatten([
                    {
                        borderBottomWidth: 0,
                        borderRadius: 3,
                        overflow: 'hidden',
                        minHeight: 30,
                        backgroundColor: (_e = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _e === void 0 ? void 0 : _e.searchBg,
                    },
                    lightTheme && {
                        backgroundColor: (_f = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _f === void 0 ? void 0 : _f.grey4,
                    },
                    round && styles$c.round,
                    inputContainerStyle,
                ]), containerStyle: styles$c.inputContainer, leftIcon: renderNode(Icon, searchIcon, defaultSearchIcon(theme)), leftIconContainerStyle: reactNative.StyleSheet.flatten([
                    styles$c.leftIconContainerStyle,
                    leftIconContainerStyle,
                ]), rightIcon: React.createElement(reactNative.View, { style: { flexDirection: 'row' } },
                    showLoading && (React.createElement(reactNative.ActivityIndicator, Object.assign({ key: "loading", style: reactNative.StyleSheet.flatten([{ marginRight: 5 }, loadingStyle]) }, otherLoadingProps))),
                    !isEmpty &&
                        renderNode(Icon, clearIcon, Object.assign(Object.assign({}, defaultClearIcon(theme)), { key: 'cancel', onPress: this.clear }))), rightIconContainerStyle: reactNative.StyleSheet.flatten([
                    styles$c.rightIconContainerStyle,
                    rightIconContainerStyle,
                ]) }))));
    }
}
SearchBarDefault.defaultProps = {
    value: '',
    loadingProps: {},
    showLoading: false,
    lightTheme: false,
    round: false,
    onClear: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onChangeText: () => null,
};
const styles$c = reactNative.StyleSheet.create({
    rightIconContainerStyle: {
        marginRight: 8,
    },
    leftIconContainerStyle: {
        marginLeft: 8,
    },
    inputContainer: {
        paddingHorizontal: 0,
    },
    round: {
        borderRadius: 15,
    },
});

const SEARCH_BAR_COMPONENTS = {
    ios: SearchBarIOS,
    android: SearchBarAndroid,
    default: SearchBarDefault,
};
class SearchBar extends React.Component {
    constructor() {
        super(...arguments);
        this.focus = () => {
            this.searchBar.focus();
        };
        this.blur = () => {
            this.searchBar.blur();
        };
        this.clear = () => {
            this.searchBar.clear();
        };
        this.cancel = () => {
            var _a;
            (_a = this.searchBar) === null || _a === void 0 ? void 0 : _a.cancel();
        };
    }
    render() {
        const Component = SEARCH_BAR_COMPONENTS[this.props.platform] || SearchBarDefault;
        return (React.createElement(Component, Object.assign({ ref: (ref) => {
                this.searchBar = ref;
            } }, this.props)));
    }
}
SearchBar.defaultProps = {
    platform: 'default',
};

withTheme(SearchBar, 'SearchBar');

class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    containsPoint(x, y) {
        return (x >= this.x &&
            y >= this.y &&
            x <= this.x + this.width &&
            y <= this.y + this.height);
    }
}

var __rest$c = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const THUMB_SIZE$1 = 40;
const SliderThumb = (_a) => {
    var { Component, isVisible, onLayout, style, start, color, vertical } = _a, props = __rest$c(_a, ["Component", "isVisible", "onLayout", "style", "start", "color", "vertical"]);
    const ThumbComponent = Component || reactNative.Animated.View;
    const axis = vertical ? 'translateY' : 'translateX';
    const thumbPosition = [{ [axis]: start }];
    const styleTransform = (style && style.transform) || [];
    const visibleStyle = isVisible ? {} : { height: 0, width: 0 };
    return (React.createElement(ThumbComponent, Object.assign({ testID: "RNE__Slider_Thumb", onLayout: onLayout, style: reactNative.StyleSheet.flatten([
            Object.assign({ backgroundColor: color, transform: [...thumbPosition, ...styleTransform] }, visibleStyle),
            styles$b.thumb,
            style,
        ]) }, props)));
};
const styles$b = reactNative.StyleSheet.create({
    thumb: {
        position: 'absolute',
        width: THUMB_SIZE$1,
        height: THUMB_SIZE$1,
        borderRadius: THUMB_SIZE$1 / 2,
    },
});

var __rest$b = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const TRACK_SIZE = 4;
const THUMB_SIZE = 40;
const TRACK_STYLE = reactNative.Platform.select({ web: 0, default: -1 });
const DEFAULT_ANIMATION_CONFIGS = {
    spring: {
        friction: 7,
        tension: 100,
        useNativeDriver: true,
    },
    timing: {
        duration: 150,
        easing: reactNative.Easing.inOut(reactNative.Easing.ease),
        delay: 0,
        useNativeDriver: true,
    },
};
const getBoundedValue = (value, maximumValue, minimumValue) => Math.max(Math.min(value, maximumValue), minimumValue);
const handlePanResponderRequestEnd = () => false;
const handleMoveShouldSetPanResponder = () => !TRACK_STYLE;
var SizableVars;
(function (SizableVars) {
    SizableVars["containerSize"] = "containerSize";
    SizableVars["thumbSize"] = "thumbSize";
    SizableVars["trackSize"] = "trackSize";
})(SizableVars || (SizableVars = {}));
var EventTypes;
(function (EventTypes) {
    EventTypes["onSlidingStart"] = "onSlidingStart";
    EventTypes["onValueChange"] = "onValueChange";
    EventTypes["onSlidingComplete"] = "onSlidingComplete";
})(EventTypes || (EventTypes = {}));
const Slider = (_a) => {
    var { allowTouchTrack = false, animateTransitions, animationConfig, animationType = 'timing', containerStyle, debugTouchArea = false, disabled, maximumTrackTintColor = '#b3b3b3', maximumValue = 1, minimumTrackTintColor = '#3f3f3f', minimumValue = 0, onSlidingComplete, onSlidingStart, onValueChange, orientation = 'horizontal', step = 0, style, thumbProps, thumbStyle, thumbTintColor = 'red', thumbTouchSize = { height: THUMB_SIZE, width: THUMB_SIZE }, trackStyle, value: _propValue = 0 } = _a, other = __rest$b(_a, ["allowTouchTrack", "animateTransitions", "animationConfig", "animationType", "containerStyle", "debugTouchArea", "disabled", "maximumTrackTintColor", "maximumValue", "minimumTrackTintColor", "minimumValue", "onSlidingComplete", "onSlidingStart", "onValueChange", "orientation", "step", "style", "thumbProps", "thumbStyle", "thumbTintColor", "thumbTouchSize", "trackStyle", "value"]);
    const propValue = getBoundedValue(_propValue, maximumValue, minimumValue);
    const prevPropValue = React.useRef(propValue);
    const animatedValue = React.useRef(new reactNative.Animated.Value(propValue));
    const _previousLeft = React.useRef(0);
    const gestureStartPosition = React.useRef(0);
    const [allMeasured, setAllMeasured] = React.useState(false);
    const [containerSize, setContainerSize] = React.useState({
        width: 0,
        height: 0,
    });
    const [trackSize, setTrackSize] = React.useState({ width: 0, height: 0 });
    const [thumbSize, setThumbSize] = React.useState({ width: 0, height: 0 });
    const isVertical = orientation === 'vertical';
    const handleMeasure = React.useCallback((name, event) => {
        var _a, _b;
        const varInfo = {
            containerSize: { size: containerSize, setSize: setContainerSize },
            thumbSize: { size: thumbSize, setSize: setThumbSize },
            trackSize: { size: trackSize, setSize: setTrackSize },
        };
        const { size, setSize } = varInfo[name];
        const rect = event.nativeEvent.layout;
        const rectWidth = (_a = rect === null || rect === void 0 ? void 0 : rect.width) !== null && _a !== void 0 ? _a : size.width;
        const rectHeight = (_b = rect === null || rect === void 0 ? void 0 : rect.height) !== null && _b !== void 0 ? _b : size.height;
        const newSize = {
            height: isVertical ? rectWidth : rectHeight,
            width: isVertical ? rectHeight : rectWidth,
        };
        setSize(newSize);
    }, [containerSize, isVertical, thumbSize, trackSize]);
    React.useEffect(() => setAllMeasured(!!(containerSize.height &&
        containerSize.width &&
        thumbSize.height &&
        thumbSize.width &&
        trackSize.height &&
        trackSize.width)), [
        containerSize.height,
        containerSize.width,
        thumbSize.height,
        thumbSize.width,
        trackSize.height,
        trackSize.width,
    ]);
    const measureContainer = React.useCallback((event) => handleMeasure(SizableVars.containerSize, event), [handleMeasure]);
    const measureTrack = React.useCallback((event) => handleMeasure(SizableVars.trackSize, event), [handleMeasure]);
    const measureThumb = React.useCallback((event) => handleMeasure(SizableVars.thumbSize, event), [handleMeasure]);
    const setCurrentValue = React.useCallback((v) => animatedValue.current.setValue(v), [animatedValue]);
    const setCurrentValueAnimated = React.useCallback((v) => reactNative.Animated[animationType](animatedValue.current, Object.assign(Object.assign(Object.assign({}, DEFAULT_ANIMATION_CONFIGS[animationType]), animationConfig), { toValue: v })).start(), [animationConfig, animationType]);
    React.useEffect(() => {
        if (prevPropValue.current !== propValue) {
            prevPropValue.current = propValue;
            if (animateTransitions) {
                setCurrentValueAnimated(propValue);
            }
            else {
                setCurrentValue(propValue);
            }
        }
    }, [
        animateTransitions,
        maximumValue,
        minimumValue,
        setCurrentValue,
        setCurrentValueAnimated,
        propValue,
    ]);
    const getValueForTouch = React.useCallback((location) => {
        const length = containerSize.width - thumbSize.width;
        const ratio = location / length;
        let newValue = ratio * (maximumValue - minimumValue);
        if (step) {
            newValue = Math.round(newValue / step) * step;
        }
        return getBoundedValue(newValue + minimumValue, maximumValue, minimumValue);
    }, [containerSize.width, maximumValue, minimumValue, step, thumbSize.width]);
    const getOnTouchValue = React.useCallback(({ nativeEvent }) => {
        const location = isVertical
            ? nativeEvent.locationY
            : nativeEvent.locationX;
        return getValueForTouch(location);
    }, [getValueForTouch, isVertical]);
    const getThumbLeft = React.useCallback((v) => {
        const ratio = (v - minimumValue) / (maximumValue - minimumValue);
        return ratio * (containerSize.width - thumbSize.width);
    }, [containerSize.width, maximumValue, minimumValue, thumbSize.width]);
    const getTouchOverflowSize = React.useCallback(() => allMeasured
        ? {
            height: Math.max(0, thumbTouchSize.height - containerSize.height),
            width: Math.max(0, thumbTouchSize.width - thumbSize.width),
        }
        : { height: 0, width: 0 }, [
        allMeasured,
        containerSize.height,
        thumbSize.width,
        thumbTouchSize.height,
        thumbTouchSize.width,
    ]);
    const getCurrentValue = React.useCallback(() => animatedValue.current.__getValue(), []);
    const getThumbTouchRect = React.useCallback(() => {
        const touchOverflowSize = getTouchOverflowSize();
        const height = touchOverflowSize.height / 2 +
            (containerSize.height - thumbTouchSize.height) / 2;
        const width = touchOverflowSize.width / 2 +
            getThumbLeft(getCurrentValue()) +
            (thumbSize.width - thumbTouchSize.width) / 2;
        return isVertical
            ? new Rect(height, width, thumbTouchSize.width, thumbTouchSize.height)
            : new Rect(width, height, thumbTouchSize.width, thumbTouchSize.height);
    }, [
        containerSize.height,
        getCurrentValue,
        getThumbLeft,
        getTouchOverflowSize,
        isVertical,
        thumbSize.width,
        thumbTouchSize.height,
        thumbTouchSize.width,
    ]);
    const getValue = React.useCallback((gestureState) => {
        const delta = (isVertical ? gestureState.moveY : gestureState.moveX) -
            gestureStartPosition.current;
        const location = _previousLeft.current + delta;
        return getValueForTouch(location);
    }, [getValueForTouch, isVertical]);
    const fireChangeEvent = React.useCallback((event) => {
        const v = getCurrentValue();
        if (event === EventTypes.onSlidingStart) {
            onSlidingStart === null || onSlidingStart === void 0 ? void 0 : onSlidingStart(v);
        }
        else if (event === EventTypes.onSlidingComplete) {
            onSlidingComplete === null || onSlidingComplete === void 0 ? void 0 : onSlidingComplete(v);
        }
        else if (event === EventTypes.onValueChange) {
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(v);
        }
    }, [getCurrentValue, onSlidingComplete, onSlidingStart, onValueChange]);
    const handlePanResponderGrant = React.useCallback((e, gestureState) => {
        _previousLeft.current = getThumbLeft(getCurrentValue());
        gestureStartPosition.current = isVertical
            ? gestureState.y0
            : gestureState.x0;
        fireChangeEvent(EventTypes.onSlidingStart);
    }, [fireChangeEvent, getCurrentValue, getThumbLeft, isVertical]);
    const handlePanResponderMove = React.useCallback((_, gestureState) => {
        if (!disabled) {
            setCurrentValue(getValue(gestureState));
            fireChangeEvent(EventTypes.onValueChange);
        }
    }, [disabled, fireChangeEvent, getValue, setCurrentValue]);
    const handlePanResponderEnd = React.useCallback(() => {
        if (!disabled) {
            fireChangeEvent(EventTypes.onSlidingComplete);
        }
    }, [disabled, fireChangeEvent]);
    const thumbHitTest = React.useCallback(({ nativeEvent }) => {
        const thumbTouchRect = getThumbTouchRect();
        return thumbTouchRect.containsPoint(nativeEvent.locationX, nativeEvent.locationY);
    }, [getThumbTouchRect]);
    const handleStartShouldSetPanResponder = React.useCallback((e) => {
        if (!allowTouchTrack) {
            return thumbHitTest(e);
        }
        setCurrentValue(getOnTouchValue(e));
        fireChangeEvent(EventTypes.onValueChange);
        return true;
    }, [
        allowTouchTrack,
        fireChangeEvent,
        getOnTouchValue,
        setCurrentValue,
        thumbHitTest,
    ]);
    const getTouchOverflowStyle = React.useCallback(() => {
        const { width, height } = getTouchOverflowSize();
        const touchOverflowStyle = {};
        const verticalMargin = -height / 2;
        touchOverflowStyle.marginTop = verticalMargin;
        touchOverflowStyle.marginBottom = verticalMargin;
        const horizontalMargin = -width / 2;
        touchOverflowStyle.marginLeft = horizontalMargin;
        touchOverflowStyle.marginRight = horizontalMargin;
        if (debugTouchArea === true) {
            touchOverflowStyle.backgroundColor = 'orange';
            touchOverflowStyle.opacity = 0.5;
        }
        return touchOverflowStyle;
    }, [debugTouchArea, getTouchOverflowSize]);
    const renderDebugThumbTouchRect = React.useCallback((thumbLeft) => {
        const thumbTouchRect = getThumbTouchRect();
        const positionStyle = {
            left: thumbLeft,
            top: thumbTouchRect.y,
            width: thumbTouchRect.width,
            height: thumbTouchRect.height,
        };
        return React.createElement(reactNative.Animated.View, { style: positionStyle, pointerEvents: "none" });
    }, [getThumbTouchRect]);
    const getMinimumTrackStyles = React.useCallback((thumbStart) => {
        const minimumTrackStyle = {
            position: 'absolute',
        };
        if (!allMeasured) {
            minimumTrackStyle.height = 0;
            minimumTrackStyle.width = 0;
        }
        else if (isVertical) {
            minimumTrackStyle.height = reactNative.Animated.add(thumbStart, thumbSize.height / 2);
            minimumTrackStyle.marginLeft = trackSize.width * TRACK_STYLE;
        }
        else {
            minimumTrackStyle.width = reactNative.Animated.add(thumbStart, thumbSize.width / 2);
            minimumTrackStyle.marginTop = trackSize.height * TRACK_STYLE;
        }
        return minimumTrackStyle;
    }, [
        allMeasured,
        isVertical,
        thumbSize.height,
        thumbSize.width,
        trackSize.height,
        trackSize.width,
    ]);
    const panResponder = React.useMemo(() => reactNative.PanResponder.create({
        onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: handleMoveShouldSetPanResponder,
        onPanResponderGrant: handlePanResponderGrant,
        onPanResponderMove: handlePanResponderMove,
        onPanResponderRelease: handlePanResponderEnd,
        onPanResponderTerminationRequest: handlePanResponderRequestEnd,
        onPanResponderTerminate: handlePanResponderEnd,
    }), [
        handleStartShouldSetPanResponder,
        handlePanResponderGrant,
        handlePanResponderMove,
        handlePanResponderEnd,
    ]);
    const mainStyles = containerStyle !== null && containerStyle !== void 0 ? containerStyle : styles$a;
    const appliedTrackStyle = reactNative.StyleSheet.flatten([styles$a.track, trackStyle]);
    const thumbStart = animatedValue.current.interpolate({
        inputRange: [minimumValue, maximumValue],
        outputRange: [0, containerSize.width - thumbSize.width],
    });
    const minimumTrackStyle = Object.assign(Object.assign({}, getMinimumTrackStyles(thumbStart)), { backgroundColor: minimumTrackTintColor });
    const touchOverflowStyle = getTouchOverflowStyle();
    return (React.createElement(reactNative.View, Object.assign({ testID: "RNE__Slider_Container" }, other, { style: reactNative.StyleSheet.flatten([
            isVertical
                ? mainStyles.containerVertical
                : mainStyles.containerHorizontal,
            style,
        ]), onLayout: measureContainer, accessibilityRole: "adjustable", accessibilityValue: {
            min: minimumValue,
            max: maximumValue,
            now: getCurrentValue(),
        } }),
        React.createElement(reactNative.View, { testID: "RNE__Slider_Track_maximum", style: reactNative.StyleSheet.flatten([
                mainStyles.track,
                isVertical ? mainStyles.trackVertical : mainStyles.trackHorizontal,
                appliedTrackStyle,
                { backgroundColor: maximumTrackTintColor },
            ]), onLayout: measureTrack }),
        React.createElement(reactNative.Animated.View, { testID: "RNE__Slider_Track_minimum", style: reactNative.StyleSheet.flatten([
                mainStyles.track,
                isVertical ? mainStyles.trackVertical : mainStyles.trackHorizontal,
                appliedTrackStyle,
                minimumTrackStyle,
            ]) }),
        React.createElement(SliderThumb, Object.assign({ isVisible: allMeasured, onLayout: measureThumb, style: thumbStyle, color: thumbTintColor, start: thumbStart, vertical: isVertical }, thumbProps)),
        React.createElement(reactNative.View, Object.assign({ testID: "RNE__Slider_TouchArea", style: reactNative.StyleSheet.flatten([styles$a.touchArea, touchOverflowStyle]) }, panResponder.panHandlers), debugTouchArea === true && renderDebugThumbTouchRect(thumbStart))));
};
Slider.defaultProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    minimumTrackTintColor: '#3f3f3f',
    maximumTrackTintColor: '#b3b3b3',
    allowTouchTrack: false,
    thumbTintColor: 'red',
    thumbTouchSize: { width: THUMB_SIZE, height: THUMB_SIZE },
    debugTouchArea: false,
    animationType: 'timing',
    orientation: 'horizontal',
};
const styles$a = reactNative.StyleSheet.create({
    containerHorizontal: {
        height: 40,
        justifyContent: 'center',
    },
    containerVertical: {
        width: 40,
        flexDirection: 'column',
        alignItems: 'center',
    },
    track: {
        borderRadius: TRACK_SIZE / 2,
    },
    trackHorizontal: {
        height: TRACK_SIZE,
    },
    trackVertical: {
        flex: 1,
        width: TRACK_SIZE,
    },
    touchArea: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    debugThumbTouchArea: {
        position: 'absolute',
        backgroundColor: 'green',
        opacity: 0.5,
    },
});
Slider.displayName = 'Slider';

withTheme(Slider, 'Slider');

var __rest$a = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const colors = {
    'github-alt': '#000000',
    'google-plus-official': '#dd4b39',
    google: '#dd4b39',
    'reddit-alien': '#fc461e',
    'stack-overflow': '#f27f33',
    angellist: '#1c4082',
    codepen: '#000000',
    envelope: '#000000',
    etsy: '#f2581e',
    facebook: '#4267B2',
    'facebook-messenger': '#0084ff',
    flickr: '#ff0084',
    foursquare: '#0072b1',
    github: '#000000',
    gitlab: '#e14329',
    instagram: '#517fa4',
    linkedin: '#007bb6',
    medium: '#02b875',
    pinterest: '#cb2027',
    quora: '#a82400',
    soundcloud: '#f50',
    steam: '#c6c3c1',
    stumbleupon: '#EB4823',
    tumblr: '#32506d',
    twitch: '#6441A5',
    twitter: '#00aced',
    vimeo: '#aad450',
    vk: '#5181b8',
    wechat: '#7bb32e',
    weibo: '#e6162d',
    whatsapp: '#075e54',
    wordpress: '#21759b',
    youtube: '#bb0000',
    microsoft: '#46A4F2',
    reddit: '#ed452f',
};
const SocialIcon = (_a) => {
    var { activityIndicatorStyle, button = false, disabled, fontFamily, fontStyle, fontWeight, iconType = 'font-awesome', iconColor = 'white', iconSize = 24, iconStyle, light, loading, onLongPress, onPress, onPressOut, onPressIn, Component = onPress || onLongPress || onPressIn || onPressOut
        ? reactNative.Pressable
        : reactNative.View, raised = true, small, style, title, type, underlayColor, pressableProps } = _a, attributes = __rest$a(_a, ["activityIndicatorStyle", "button", "disabled", "fontFamily", "fontStyle", "fontWeight", "iconType", "iconColor", "iconSize", "iconStyle", "light", "loading", "onLongPress", "onPress", "onPressOut", "onPressIn", "Component", "raised", "small", "style", "title", "type", "underlayColor", "pressableProps"]);
    const shouldShowExpandedButton = button && title;
    return (React.createElement(Component, Object.assign({}, Object.assign(Object.assign({ onLongPress,
        onPress,
        onPressOut,
        onPressIn, android_ripple: androidRipple(light ? 'white' : underlayColor || (type && colors[type])) }, pressableProps), attributes), { testID: "RNE_SocialIcon", underlayColor: light ? 'white' : underlayColor || (type && colors[type]), disabled: disabled, style: reactNative.StyleSheet.flatten([
            raised && styles$9.raised,
            styles$9.container,
            button && styles$9.button,
            !button && raised && styles$9.icon,
            !button &&
                !light &&
                !raised && {
                width: iconSize * 2 + 4,
                height: iconSize * 2 + 4,
                borderRadius: iconSize * 2,
            },
            { backgroundColor: type && colors[type] },
            {
                width: iconSize * 2 + 4,
                height: iconSize * 2 + 4,
                borderRadius: iconSize * 2,
            },
            light && { backgroundColor: 'white' },
            style && style,
        ]) }),
        React.createElement(reactNative.View, { style: styles$9.wrapper },
            (shouldShowExpandedButton || !loading) && (React.createElement(Icon, { testID: "RNE_Icon", iconStyle: reactNative.StyleSheet.flatten([iconStyle && iconStyle]), color: light ? type && colors[type] : iconColor, name: type, size: iconSize, type: iconType })),
            shouldShowExpandedButton && (React.createElement(Text, { style: reactNative.StyleSheet.flatten([
                    styles$9.title,
                    light && { color: type && colors[type] },
                    fontFamily && { fontFamily },
                    fontWeight && { fontWeight },
                    fontStyle && fontStyle,
                ]) }, title)),
            loading && (React.createElement(reactNative.ActivityIndicator, { testID: "RNE_ActivityIndicator", animating: true, style: reactNative.StyleSheet.flatten([
                    styles$9.activityIndicatorStyle,
                    activityIndicatorStyle,
                ]), color: light ? type && colors[type] : iconColor || 'white', size: (small && 'small') || 'large' })))));
};
const styles$9 = reactNative.StyleSheet.create({
    container: {
        margin: 7,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingTop: 14,
        paddingBottom: 14,
    },
    raised: Object.assign({}, reactNative.Platform.select({
        android: {
            elevation: 2,
        },
        default: {
            shadowColor: 'rgba(0,0,0, .4)',
            shadowOffset: { height: 1, width: 1 },
            shadowOpacity: 1,
            shadowRadius: 1,
        },
    })),
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: Object.assign({ color: 'white', marginLeft: 15 }, reactNative.Platform.select({
        android: Object.assign({}, fonts.android.black),
        default: {
            fontWeight: 'bold',
        },
    })),
    icon: {
        height: 52,
        width: 52,
    },
    activityIndicatorStyle: {
        marginHorizontal: 10,
        height: 0,
    },
});
SocialIcon.displayName = 'SocialIcon';

withTheme(SocialIcon, 'SocialIcon');

var __rest$9 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const SpeedDial = (_a) => {
    var _b;
    var { isOpen = false, onOpen = () => { }, onClose = () => { }, icon, openIcon, children, transitionDuration = 150, style, overlayColor, theme = defaultTheme, placement, labelPressable, backdropPressableProps: pressableProps } = _a, rest = __rest$9(_a, ["isOpen", "onOpen", "onClose", "icon", "openIcon", "children", "transitionDuration", "style", "overlayColor", "theme", "placement", "labelPressable", "backdropPressableProps"]);
    const animations = React.useRef([...new Array(React.Children.count(children))].map(() => new reactNative.Animated.Value(Number(isOpen))));
    React.useEffect(() => {
        reactNative.Animated.stagger(50, animations.current
            .map((animation) => reactNative.Animated.timing(animation, {
            toValue: Number(isOpen),
            duration: transitionDuration,
            useNativeDriver: true,
        }))[isOpen ? 'reverse' : 'sort']()).start();
    }, [isOpen, animations, children, transitionDuration]);
    return (React.createElement(reactNative.View, { style: [styles$8.container, style], pointerEvents: "box-none" },
        React.createElement(reactNative.Pressable, Object.assign({}, pressableProps, { onPress: onClose, style: [reactNative.StyleSheet.absoluteFillObject], pointerEvents: isOpen ? 'auto' : 'none' }),
            React.createElement(reactNative.Animated.View, { style: [
                    reactNative.StyleSheet.absoluteFillObject,
                    {
                        opacity: animations.current[0],
                        backgroundColor: overlayColor ||
                            Color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.black).alpha(0.6).rgb().toString(),
                    },
                ] })),
        React.createElement(reactNative.SafeAreaView, { pointerEvents: "box-none", style: [
                {
                    alignItems: placement === 'left' ? 'flex-start' : 'flex-end',
                },
                placement && {
                    [placement]: 0,
                    bottom: 0,
                    position: 'absolute',
                },
            ] },
            React.Children.toArray(children).map((ChildAction, i) => (React.createElement(reactNative.Animated.View, { pointerEvents: isOpen ? 'auto' : 'none', key: i, style: {
                    transform: [{ scale: animations.current[i] }],
                    opacity: animations.current[i],
                } }, React.cloneElement(ChildAction, {
                placement,
                labelPressable,
            })))),
            React.createElement(FAB, Object.assign({ style: [styles$8.fab], icon: isOpen ? openIcon : icon, theme: theme }, rest, { onPress: isOpen ? onClose : onOpen })))));
};
const styles$8 = reactNative.StyleSheet.create({
    safeArea: {
        alignItems: 'flex-end',
    },
    container: Object.assign(Object.assign({}, reactNative.StyleSheet.absoluteFillObject), { justifyContent: 'flex-end' }),
    fab: {
        margin: 16,
        marginTop: 0,
    },
});
SpeedDial.displayName = 'SpeedDial';

var __rest$8 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const SpeedDialAction = (_a) => {
    var { title, titleStyle, placement, labelPressable, onPress } = _a, actionProps = __rest$8(_a, ["title", "titleStyle", "placement", "labelPressable", "onPress"]);
    return (React.createElement(reactNative.Pressable, { onPress: labelPressable ? onPress : undefined, style: [
            styles$7.action,
            placement === 'left' && {
                flexDirection: 'row-reverse',
            },
        ] },
        title && React.createElement(reactNative.Text, { style: [styles$7.title, titleStyle] }, title),
        React.createElement(FAB, Object.assign({}, actionProps, { onPress: onPress, size: "small", style: [actionProps.style] }))));
};
const styles$7 = reactNative.StyleSheet.create({
    title: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    action: {
        marginBottom: 16,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
SpeedDialAction.displayName = 'SpeedDial.Action';

Object.assign(withTheme(SpeedDial, 'SpeedDial'), {
    Action: withTheme(SpeedDialAction, 'SpeedDialAction'),
});

var __rest$7 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Switch = (_a) => {
    var _b;
    var { value = false, disabled = false, onValueChange, color = 'primary', style, theme = defaultTheme } = _a, rest = __rest$7(_a, ["value", "disabled", "onValueChange", "color", "style", "theme"]);
    const switchColor = React.useMemo(() => (theme === null || theme === void 0 ? void 0 : theme.colors[color]) || color || (theme === null || theme === void 0 ? void 0 : theme.colors.primary), [color, theme === null || theme === void 0 ? void 0 : theme.colors]);
    const trackColor = React.useMemo(() => reactNative.Platform.select({
        ios: switchColor,
        default: disabled ? theme === null || theme === void 0 ? void 0 : theme.colors.disabled : switchColor,
    }), [disabled, switchColor, theme === null || theme === void 0 ? void 0 : theme.colors.disabled]);
    const thumbTintColor = React.useMemo(() => {
        var _a;
        return reactNative.Platform.select({
            ios: undefined,
            default: disabled ? ((_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.disabled) || '#fff' : switchColor,
        });
    }, [disabled, switchColor, (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.disabled]);
    const props = React.useMemo(() => {
        var _a;
        return reactNative.Platform.select({
            web: {
                activeTrackColor: trackColor,
                activeThumbColor: switchColor,
            },
            default: {
                trackColor: {
                    true: trackColor,
                    false: disabled ? (_a = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _a === void 0 ? void 0 : _a.disabled : '',
                },
            },
        });
    }, [trackColor, switchColor, disabled, theme.colors.disabled]);
    return (React.createElement(reactNative.Switch, Object.assign({ testID: "RNE__SWITCH", value: value, accessibilityState: {
            checked: value,
            disabled,
        }, disabled: disabled, thumbColor: thumbTintColor, onValueChange: disabled ? undefined : onValueChange, style: style }, props, rest)));
};
Switch.displayName = 'Switch';

withTheme(Switch, 'Switch');

var __rest$6 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Skeleton = (_a) => {
    var _b, _c;
    var { circle, width = '100%', height, animation = 'pulse', style, skeletonStyle, theme = defaultTheme, LinearGradientComponent } = _a, rest = __rest$6(_a, ["circle", "width", "height", "animation", "style", "skeletonStyle", "theme", "LinearGradientComponent"]);
    const animationRef = React.useRef(new reactNative.Animated.Value(0));
    const animationLoop = React.useRef();
    const [layoutWidth, setLayoutWidth] = React.useState(0);
    React.useEffect(() => {
        animationLoop.current = reactNative.Animated.timing(animationRef.current, {
            toValue: 2,
            delay: 400,
            duration: 1500,
            useNativeDriver: !!reactNative.Platform.select({
                web: false,
                native: true,
            }),
        });
        animationRef.current.setValue(0);
        reactNative.Animated.loop(animationLoop.current).start();
    }, []);
    return (React.createElement(reactNative.View, Object.assign({ accessibilityRole: "none", accessibilityLabel: "loading...", accessible: false, testID: "RNE__Skeleton", onLayout: ({ nativeEvent }) => {
            setLayoutWidth(nativeEvent.layout.width);
        }, style: [
            styles$6.container,
            {
                width: width,
                height: height || 12,
                backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.grey4,
            },
            circle && {
                borderRadius: 50,
                height: height || width,
            },
            style,
        ] }, rest), animation !== 'none' && (React.createElement(reactNative.Animated.View, { style: [
            styles$6.skeleton,
            !LinearGradientComponent && {
                backgroundColor: Color((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.grey4)
                    .darken(0.1)
                    .rgb()
                    .string(),
            },
            animation === 'pulse' && {
                width: '100%',
                opacity: animationRef.current.interpolate({
                    inputRange: [0, 1, 2],
                    outputRange: [1, 0, 1],
                }),
            },
            animation === 'wave' && {
                transform: [
                    {
                        translateX: animationRef.current.interpolate({
                            inputRange: [0, 2],
                            outputRange: [-layoutWidth * 2, layoutWidth * 2],
                        }),
                    },
                ],
            },
            skeletonStyle,
        ] }, LinearGradientComponent && (React.createElement(LinearGradientComponent, { style: styles$6.skeleton, colors: [
            theme.colors.grey4,
            theme.colors.grey5,
            theme.colors.grey4,
        ], start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }))))));
};
const styles$6 = reactNative.StyleSheet.create({
    container: {
        overflow: 'hidden',
        borderRadius: 2,
    },
    skeleton: {
        height: '100%',
    },
});

withTheme(Skeleton, 'Skeleton');

var __rest$5 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const TabBase = (_a) => {
    var _b, _c;
    var { theme = defaultTheme, children, value = 0, scrollable = false, onChange = () => { }, indicatorStyle, disableIndicator, variant = 'default', style, dense, iconPosition, buttonStyle, titleStyle, containerStyle } = _a, rest = __rest$5(_a, ["theme", "children", "value", "scrollable", "onChange", "indicatorStyle", "disableIndicator", "variant", "style", "dense", "iconPosition", "buttonStyle", "titleStyle", "containerStyle"]);
    const animationRef = React.useRef(new reactNative.Animated.Value(0));
    const scrollViewRef = React.useRef(null);
    const scrollViewPosition = React.useRef(0);
    const validChildren = React.useMemo(() => React.Children.toArray(children), [children]);
    const tabItemPositions = React.useRef([]);
    const [tabContainerWidth, setTabContainerWidth] = React.useState(0);
    const scrollHandler = React.useCallback((currValue) => {
        if (tabItemPositions.current.length > currValue) {
            let itemStartPosition = currValue === 0
                ? 0
                : tabItemPositions.current[currValue - 1].position;
            let itemEndPosition = tabItemPositions.current[currValue].position;
            const scrollCurrentPosition = scrollViewPosition.current;
            const tabContainerCurrentWidth = tabContainerWidth;
            let scrollX = scrollCurrentPosition;
            if (itemStartPosition < scrollCurrentPosition) {
                scrollX += itemStartPosition - scrollCurrentPosition;
            }
            else if (scrollCurrentPosition + tabContainerCurrentWidth <
                itemEndPosition) {
                scrollX +=
                    itemEndPosition -
                        (scrollCurrentPosition + tabContainerCurrentWidth);
            }
            scrollViewRef.current.scrollTo({
                x: scrollX,
                y: 0,
                animated: true,
            });
        }
    }, [tabContainerWidth]);
    React.useEffect(() => {
        reactNative.Animated.timing(animationRef.current, {
            toValue: value,
            useNativeDriver: true,
            duration: 170,
        }).start();
        scrollable && requestAnimationFrame(() => scrollHandler(value));
    }, [animationRef, scrollHandler, value, scrollable]);
    const onScrollHandler = React.useCallback((event) => {
        scrollViewPosition.current = event.nativeEvent.contentOffset.x;
    }, []);
    const indicatorTransitionInterpolate = React.useMemo(() => {
        const countItems = validChildren.length;
        if (countItems < 2 || !tabItemPositions.current.length) {
            return 0;
        }
        const inputRange = Array.from(Array(countItems + 1).keys());
        const outputRange = tabItemPositions.current.map(({ position }) => position);
        if (inputRange.length - 1 !== outputRange.length) {
            return 0;
        }
        return animationRef.current.interpolate({
            inputRange,
            outputRange: [0, ...outputRange],
        });
    }, [animationRef, validChildren, tabItemPositions.current.length]);
    const WIDTH = React.useMemo(() => {
        var _a;
        return (_a = tabItemPositions.current[value]) === null || _a === void 0 ? void 0 : _a.width;
    }, [value, tabItemPositions.current.length]);
    return (React.createElement(reactNative.View, Object.assign({}, rest, { accessibilityRole: "tablist", style: [
            variant === 'primary' && {
                backgroundColor: (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary,
            },
            styles$5.viewStyle,
            style,
        ], onLayout: ({ nativeEvent: { layout } }) => {
            setTabContainerWidth(layout.width);
        } }), React.createElement(scrollable ? reactNative.ScrollView : React.Fragment, Object.assign(Object.assign({}, (scrollable && {
        horizontal: true,
        ref: scrollViewRef,
        onScroll: onScrollHandler,
        showsHorizontalScrollIndicator: false,
    })), { children: (React.createElement(React.Fragment, null,
            validChildren.map((child, index) => {
                return React.cloneElement(child, {
                    onPress: () => onChange(index),
                    onLayout: (event) => {
                        var _a;
                        const { width } = event.nativeEvent.layout;
                        const previousItemPosition = ((_a = tabItemPositions.current[index - 1]) === null || _a === void 0 ? void 0 : _a.position) || 0;
                        tabItemPositions.current[index] = {
                            position: previousItemPosition + width,
                            width,
                        };
                    },
                    active: index === value,
                    variant,
                    _parentProps: {
                        dense,
                        iconPosition,
                        buttonStyle,
                        containerStyle,
                        titleStyle,
                    },
                });
            }),
            !disableIndicator && (React.createElement(reactNative.Animated.View, { style: [
                    styles$5.indicator,
                    {
                        backgroundColor: (_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.secondary,
                        transform: [
                            {
                                translateX: indicatorTransitionInterpolate,
                            },
                        ],
                        width: WIDTH,
                    },
                    indicatorStyle,
                ] })))) }))));
};
const styles$5 = reactNative.StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        position: 'relative',
    },
    indicator: {
        display: 'flex',
        position: 'absolute',
        height: 2,
        bottom: 0,
    },
});
TabBase.displayName = 'Tab';

var __rest$4 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const TabItem = (_a) => {
    var _b, _c;
    var { active, theme = defaultTheme, _parentProps = {}, titleStyle = _parentProps.titleStyle, containerStyle = _parentProps.containerStyle, buttonStyle = _parentProps.buttonStyle, iconPosition = _parentProps.iconPosition || 'top', dense = _parentProps.dense, iconContainerStyle, variant, title, icon } = _a, rest = __rest$4(_a, ["active", "theme", "_parentProps", "titleStyle", "containerStyle", "buttonStyle", "iconPosition", "dense", "iconContainerStyle", "variant", "title", "icon"]);
    const activeProp = React.useCallback((prop) => (typeof prop === 'function' ? prop(active) : prop), [active]);
    return (React.createElement(Button$1, Object.assign({ accessibilityRole: "tab", accessibilityState: { selected: active }, accessibilityValue: typeof title === 'string' ? { text: title } : undefined, buttonStyle: [styles$4.buttonStyle, activeProp(buttonStyle)], titleStyle: [
            !dense && styles$4.titleStyle,
            {
                color: variant === 'primary' ? 'white' : (_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.secondary,
                paddingVertical: !dense && !icon ? 8 : 2,
            },
            activeProp(titleStyle),
        ], containerStyle: [
            styles$4.containerStyle,
            variant === 'primary' && {
                backgroundColor: active
                    ? Color((_c = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _c === void 0 ? void 0 : _c.primary).darken(0.05).rgb().toString()
                    : 'transparent',
            },
            activeProp(containerStyle),
        ], iconContainerStyle: activeProp(iconContainerStyle), icon: activeProp(icon), iconPosition: iconPosition, title: title }, rest)));
};
const styles$4 = reactNative.StyleSheet.create({
    buttonStyle: {
        borderRadius: 0,
        backgroundColor: 'transparent',
    },
    titleStyle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    containerStyle: {
        flex: 1,
        borderRadius: 0,
    },
});
TabItem.displayName = 'Tab.Item';

Object.assign(withTheme(TabBase, 'Tab'), {
    Item: withTheme(TabItem, 'TabItem'),
});

const TabViewBase = ({ value = 0, children, onChange = () => { }, onSwipeStart = () => { }, animationType = 'spring', animationConfig = {}, containerStyle, tabItemContainerStyle, disableSwipe = false, disableTransition = false, minSwipeRatio = 0.4, minSwipeSpeed = 1, }) => {
    const translateX = React.useRef(new reactNative.Animated.Value(0));
    const currentIndex = React.useRef(0);
    const [containerWidth, setContainerWidth] = React.useState(1);
    const childCount = React.useMemo(() => React.Children.toArray(children).length, [children]);
    const animate = React.useCallback((toValue) => {
        reactNative.Animated[animationType](translateX.current, Object.assign({ toValue, useNativeDriver: true, easing: reactNative.Easing.ease }, animationConfig)).start();
    }, [animationConfig, animationType]);
    const releaseResponder = React.useCallback((_, { dx, vx }) => {
        const position = dx / -containerWidth;
        const shouldSwipe = Math.abs(position) > minSwipeRatio || Math.abs(vx) > minSwipeSpeed;
        currentIndex.current += shouldSwipe ? Math.sign(position) : 0;
        animate(currentIndex.current);
        onChange(currentIndex.current);
    }, [animate, containerWidth, minSwipeRatio, minSwipeSpeed, onChange]);
    const panResponder = React.useMemo(() => reactNative.PanResponder.create({
        onPanResponderGrant: (_, { vx }) => {
            onSwipeStart(vx > 0 ? 'left' : 'right');
        },
        onMoveShouldSetPanResponder: (_, { dx, dy, vx, vy }) => {
            const panXInt = Math.floor(currentIndex.current);
            return (!((dx > 0 && panXInt <= 0) ||
                (dx < 0 && panXInt >= childCount - 1)) &&
                Math.abs(dx) > Math.abs(dy) * 2 &&
                Math.abs(vx) > Math.abs(vy) * 2.5);
        },
        onPanResponderMove: (_, { dx }) => {
            const position = dx / -containerWidth;
            translateX.current.setValue(Math.floor(currentIndex.current) + position);
        },
        onPanResponderRelease: releaseResponder,
        onPanResponderTerminate: releaseResponder,
    }), [childCount, containerWidth, onSwipeStart, releaseResponder]);
    React.useEffect(() => {
        if (Number.isInteger(value) && value !== currentIndex.current) {
            animate(value);
            currentIndex.current = value;
        }
    }, [animate, value]);
    return (React.createElement(reactNative.View, { style: [styles$3.container, containerStyle], onLayout: ({ nativeEvent: { layout } }) => {
            setContainerWidth(layout.width);
        } },
        React.createElement(reactNative.Animated.View, Object.assign({ testID: "RNE__TabView", style: reactNative.StyleSheet.flatten([
                reactNative.StyleSheet.absoluteFillObject,
                styles$3.container,
                {
                    width: containerWidth * childCount,
                    transform: [
                        {
                            translateX: disableTransition
                                ? -value * containerWidth
                                : translateX.current.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -containerWidth],
                                }),
                        },
                    ],
                },
            ]) }, (!disableSwipe && panResponder.panHandlers)), React.Children.toArray(children).map((child, index) => (React.createElement(reactNative.View, { key: index, style: reactNative.StyleSheet.flatten([
                styles$3.container,
                tabItemContainerStyle,
                { width: containerWidth },
            ]) }, child))))));
};
const styles$3 = reactNative.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
    },
});
TabViewBase.displayName = 'TabView';

var __rest$3 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const TabViewItem = (_a) => {
    var { children } = _a, rest = __rest$3(_a, ["children"]);
    return React.createElement(reactNative.View, Object.assign({}, rest), React.isValidElement(children) && children);
};
TabViewItem.displayName = 'TabView.Item';

Object.assign(withTheme(TabViewBase, 'TabView'), {
    Item: withTheme(TabViewItem, 'TabViewItem'),
});

withTheme(Text, 'Text');

var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const renderText = (content, defaultProps, style) => renderNode(Text, content, Object.assign(Object.assign({}, defaultProps), { style: reactNative.StyleSheet.flatten([style, defaultProps && defaultProps.style]) }));
const FeaturedTile = (_a) => {
    var { title, icon, caption, imageSrc, containerStyle, imageContainerStyle, overlayContainerStyle, iconContainerStyle, titleStyle, captionStyle, ImageComponent = BackgroundImage, imageProps = {}, width = reactNative.Dimensions.get('window').width, height = width * 0.8 } = _a, attributes = __rest$2(_a, ["title", "icon", "caption", "imageSrc", "containerStyle", "imageContainerStyle", "overlayContainerStyle", "iconContainerStyle", "titleStyle", "captionStyle", "ImageComponent", "imageProps", "width", "height"]);
    return (React.createElement(reactNative.Pressable, Object.assign({}, attributes, { style: reactNative.StyleSheet.flatten([
            { width, height },
            containerStyle && containerStyle,
        ]) }),
        React.createElement(ImageComponent, Object.assign({ resizeMode: "cover" }, imageProps, { source: imageSrc, style: reactNative.StyleSheet.flatten([
                { width, height },
                styles$2.imageContainer,
                imageContainerStyle && imageContainerStyle,
            ]) }),
            React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                    styles$2.overlayContainer,
                    overlayContainerStyle && overlayContainerStyle,
                ]) },
                React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                        styles$2.iconContainer,
                        iconContainerStyle && iconContainerStyle,
                    ]) }, icon && React.createElement(Icon, Object.assign({}, icon))),
                React.createElement(Text, { testID: "featuredTileTitle", h4: !titleStyle || !('fontSize' in titleStyle), style: reactNative.StyleSheet.flatten([styles$2.text, titleStyle && titleStyle]) }, title),
                renderText(caption, { style: captionStyle }, styles$2.text)))));
};
const styles$2 = reactNative.StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlayContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 45,
        paddingBottom: 40,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    text: {
        color: '#ffffff',
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 15,
        textAlign: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});

var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Tile = (_a) => {
    var _b;
    var { featured, imageSrc, icon, title, children, caption, titleStyle, onPress, activeOpacity, overlayContainerStyle, captionStyle, iconContainerStyle, imageContainerStyle, containerStyle, contentContainerStyle, titleNumberOfLines, ImageComponent = Image, imageProps = {}, width = reactNative.Dimensions.get('window').width, height = width * 0.8, theme = defaultTheme } = _a, attributes = __rest$1(_a, ["featured", "imageSrc", "icon", "title", "children", "caption", "titleStyle", "onPress", "activeOpacity", "overlayContainerStyle", "captionStyle", "iconContainerStyle", "imageContainerStyle", "containerStyle", "contentContainerStyle", "titleNumberOfLines", "ImageComponent", "imageProps", "width", "height", "theme"]);
    if (featured) {
        const featuredProps = {
            title,
            icon,
            caption,
            imageSrc,
            onPress,
            activeOpacity,
            containerStyle,
            imageContainerStyle,
            overlayContainerStyle,
            titleStyle,
            captionStyle,
            width,
            height,
            imageProps,
            ImageComponent,
        };
        return React.createElement(FeaturedTile, Object.assign({}, featuredProps));
    }
    return (React.createElement(reactNative.Pressable, Object.assign({}, Object.assign({ onPress, android_ripple: androidRipple(Color((_b = theme === null || theme === void 0 ? void 0 : theme.colors) === null || _b === void 0 ? void 0 : _b.primary).alpha(activeOpacity).rgb().toString()) }, attributes), { style: reactNative.StyleSheet.flatten([
            {
                width,
                height,
            },
            containerStyle && containerStyle,
        ]) }),
        React.createElement(ImageComponent, Object.assign({ resizeMode: "cover", source: imageSrc, containerStyle: reactNative.StyleSheet.flatten([
                styles$1.imageContainer,
                imageContainerStyle && imageContainerStyle,
            ]), style: Object.assign(Object.assign({}, reactNative.StyleSheet.absoluteFillObject), { alignItems: 'center', justifyContent: 'center' }) }, imageProps),
            React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                    styles$1.iconContainer,
                    iconContainerStyle && iconContainerStyle,
                ]) }, icon && React.createElement(Icon, Object.assign({}, icon)))),
        React.createElement(reactNative.View, { style: reactNative.StyleSheet.flatten([
                styles$1.contentContainer,
                contentContainerStyle && contentContainerStyle,
            ]) },
            React.createElement(Text, { testID: "tileTitle", h4: !titleStyle || !('fontSize' in titleStyle), style: reactNative.StyleSheet.flatten([styles$1.text, titleStyle && titleStyle]), numberOfLines: titleNumberOfLines }, title),
            children)));
};
const styles$1 = reactNative.StyleSheet.create({
    imageContainer: {
        flex: 2,
    },
    text: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginBottom: 5,
    },
    contentContainer: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
Tile.displayName = 'Tile';

withTheme(FeaturedTile, 'FeaturedTile');
withTheme(Tile, 'Tile');

const Triangle = ({ style, pointerColor, isDown }) => (React.createElement(reactNative.View, { testID: "RNE__Tooltip_Triangle", style: reactNative.StyleSheet.flatten([
        styles.triangle,
        {
            borderBottomColor: pointerColor,
        },
        style,
        isDown ? styles.down : {},
    ]) }));
const styles = reactNative.StyleSheet.create({
    down: {
        transform: [{ rotate: '180deg' }],
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
    },
});
var Triangle$1 = React.memo(Triangle);

const getArea = (a, b) => a * b;
const getPointDistance = (a, b) => Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
const getElementVisibleWidth = (elementWidth, xOffset, ScreenWidth) => {
    if (xOffset >= 0) {
        return xOffset + elementWidth <= ScreenWidth
            ? elementWidth
            : ScreenWidth - xOffset;
    }
    return elementWidth - xOffset;
};
const getTooltipCoordinate = (x, y, width, height, ScreenWidth, ScreenHeight, tooltipWidth, tooltipHeight, withPointer) => {
    const center = [
        x + getElementVisibleWidth(width, x, ScreenWidth) / 2,
        y + height / 2,
    ];
    const pOne = [center[0], 0];
    const pTwo = [ScreenWidth, center[1]];
    const pThree = [center[0], ScreenHeight];
    const pFour = [0, center[1]];
    const vOne = getPointDistance(center, pOne);
    const vTwo = getPointDistance(center, pTwo);
    const vThree = getPointDistance(center, pThree);
    const vFour = getPointDistance(center, pFour);
    const areas = [
        getArea(vOne, vFour),
        getArea(vOne, vTwo),
        getArea(vTwo, vThree),
        getArea(vThree, vFour),
    ].map((each, index) => ({ area: each, id: index }));
    const sortedArea = areas.sort((a, b) => b.area - a.area);
    const dX = 0.001;
    const dY = height / 2;
    const directionCorrection = [
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, 1],
    ];
    const dislocateReferencePoint = [
        [-tooltipWidth, -tooltipHeight],
        [0, -tooltipHeight],
        [0, 0],
        [-tooltipWidth, 0],
    ];
    const qIndex = sortedArea[0].id;
    const getWithPointerOffsetY = () => withPointer ? 10 * directionCorrection[qIndex][1] : 0;
    const getWithPointerOffsetX = () => withPointer ? center[0] - 18 * directionCorrection[qIndex][0] : center[0];
    const newX = getWithPointerOffsetX() +
        (dX * directionCorrection[qIndex][0] + dislocateReferencePoint[qIndex][0]);
    return {
        x: constraintX(newX, qIndex, center[0], ScreenWidth, tooltipWidth),
        y: center[1] +
            (dY * directionCorrection[qIndex][1] +
                dislocateReferencePoint[qIndex][1]) +
            getWithPointerOffsetY(),
    };
};
const constraintX = (newX, qIndex, x, ScreenWidth, tooltipWidth) => {
    switch (qIndex) {
        case 0:
        case 3: {
            const maxWidth = newX > ScreenWidth ? ScreenWidth - 10 : newX;
            return newX < 1 ? 10 : maxWidth;
        }
        case 1:
        case 2: {
            const leftOverSpace = ScreenWidth - newX;
            return leftOverSpace >= tooltipWidth
                ? newX
                : newX - (tooltipWidth - leftOverSpace + 10);
        }
        default: {
            return 0;
        }
    }
};

const getTooltipStyle = ({ yOffset, xOffset, elementHeight, elementWidth, width, height, withPointer, backgroundColor, containerStyle, }) => {
    const { x, y } = getTooltipCoordinate(xOffset, yOffset, elementWidth, elementHeight, ScreenWidth, ScreenHeight, width, height, withPointer);
    return reactNative.StyleSheet.flatten([
        {
            position: 'absolute',
            [reactNative.I18nManager.isRTL ? 'right' : 'left']: x,
            top: y,
            width,
            height,
            backgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            borderRadius: 10,
            padding: 10,
        },
        containerStyle,
    ]);
};

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const Tooltip = (_a) => {
    var { withOverlay = true, overlayColor = '#fafafa14', highlightColor = 'transparent', withPointer = true, toggleOnPress = true, toggleAction = 'onPress', height = 40, width = 150, containerStyle = {}, backgroundColor = '#617080', pointerColor = backgroundColor, pointerStyle, onClose = () => { }, onOpen = () => { }, visible = false, skipAndroidStatusBar = false, ModalComponent = reactNative.Modal, closeOnlyOnBackdropPress = false, animationType = 'fade' } = _a, props = __rest(_a, ["withOverlay", "overlayColor", "highlightColor", "withPointer", "toggleOnPress", "toggleAction", "height", "width", "containerStyle", "backgroundColor", "pointerColor", "pointerStyle", "onClose", "onOpen", "visible", "skipAndroidStatusBar", "ModalComponent", "closeOnlyOnBackdropPress", "animationType"]);
    const isMounted = React.useRef(false);
    const renderedElement = React.useRef(null);
    const [dimensions, setDimensions] = React.useState({
        yOffset: 0,
        xOffset: 0,
        elementWidth: 0,
        elementHeight: 0,
    });
    const getElementPosition = React.useCallback(() => {
        var _a;
        (_a = renderedElement.current) === null || _a === void 0 ? void 0 : _a.measure((_frameOffsetX, _frameOffsetY, _width = 0, _height = 0, pageOffsetX = 0, pageOffsetY = 0) => {
            isMounted.current &&
                setDimensions({
                    xOffset: pageOffsetX,
                    yOffset: isIOS || skipAndroidStatusBar
                        ? pageOffsetY
                        : pageOffsetY -
                            reactNative.Platform.select({
                                android: reactNative.StatusBar.currentHeight,
                                ios: 20,
                                default: 0,
                            }),
                    elementWidth: _width,
                    elementHeight: _height,
                });
        });
    }, [skipAndroidStatusBar]);
    const handleOnPress = React.useCallback(() => {
        getElementPosition();
        isMounted.current && toggleOnPress && (visible ? onClose === null || onClose === void 0 ? void 0 : onClose() : onOpen === null || onOpen === void 0 ? void 0 : onOpen());
    }, [getElementPosition, onClose, onOpen, toggleOnPress, visible]);
    const Pointer = ({ tooltipY }) => {
        const { yOffset, xOffset, elementHeight, elementWidth } = dimensions;
        const pastMiddleLine = yOffset > (tooltipY || 0);
        if (!withPointer) {
            return null;
        }
        return (React.createElement(reactNative.View, { style: {
                position: 'absolute',
                top: pastMiddleLine ? yOffset - 13 : yOffset + elementHeight - 2,
                [reactNative.I18nManager.isRTL ? 'right' : 'left']: xOffset +
                    getElementVisibleWidth(elementWidth, xOffset, ScreenWidth) / 2 -
                    7.5,
            } },
            React.createElement(Triangle$1, { style: pointerStyle, pointerColor: pointerColor, isDown: pastMiddleLine })));
    };
    const TooltipHighlightedButtonStyle = React.useMemo(() => {
        const { yOffset, xOffset, elementWidth, elementHeight } = dimensions;
        return {
            position: 'absolute',
            top: yOffset,
            [reactNative.I18nManager.isRTL ? 'right' : 'left']: xOffset,
            backgroundColor: highlightColor,
            overflow: 'visible',
            width: elementWidth,
            height: elementHeight,
        };
    }, [dimensions, highlightColor]);
    const HighlightedButton = () => {
        if (!closeOnlyOnBackdropPress) {
            return (React.createElement(reactNative.Pressable, { testID: "tooltipTouchableHighlightedButton", onPress: handleOnPress, style: TooltipHighlightedButtonStyle }, props.children));
        }
        else {
            return (React.createElement(reactNative.View, { testID: "tooltipTouchableHighlightedButton", style: TooltipHighlightedButtonStyle }, props.children));
        }
    };
    React.useEffect(() => {
        isMounted.current = true;
        requestAnimationFrame(getElementPosition);
        const dimensionsListener = reactNative.Dimensions.addEventListener('change', getElementPosition);
        return () => {
            isMounted.current = false;
            if (dimensionsListener === null || dimensionsListener === void 0 ? void 0 : dimensionsListener.remove) {
                dimensionsListener.remove();
            }
            else {
                reactNative.Dimensions.removeEventListener('change', getElementPosition);
            }
        };
    }, [getElementPosition]);
    const tooltipStyle = React.useMemo(() => getTooltipStyle(Object.assign(Object.assign({}, dimensions), { backgroundColor,
        containerStyle,
        height,
        width,
        withPointer })), [backgroundColor, containerStyle, dimensions, height, width, withPointer]);
    return (React.createElement(reactNative.View, { collapsable: false, ref: renderedElement },
        React.createElement(reactNative.Pressable, Object.assign({}, { [toggleAction]: handleOnPress }, { delayLongPress: 250 }), props.children),
        React.createElement(ModalComponent, { transparent: true, visible: visible, onShow: onOpen, animationType: animationType },
            React.createElement(reactNative.TouchableOpacity, { style: {
                    backgroundColor: withOverlay ? overlayColor : 'transparent',
                    flex: 1,
                }, onPress: handleOnPress, activeOpacity: 1 },
                React.createElement(reactNative.View, null,
                    React.createElement(HighlightedButton, null),
                    React.createElement(Pointer, { tooltipY: tooltipStyle.top }),
                    React.createElement(reactNative.View, { style: tooltipStyle, testID: "tooltipPopoverContainer" }, props.popover))))));
};
Tooltip.displayName = 'Tooltip';

withTheme(Tooltip, 'Tooltip');

var Button = function (_a) {
    var buttonStyle = _a.buttonStyle, containerStyle = _a.containerStyle, icon = _a.icon, _b = _a.iconPosition, iconPosition = _b === void 0 ? 'left' : _b, onPress = _a.onPress, radius = _a.radius, size = _a.size, title = _a.title, titleStyle = _a.titleStyle, _c = _a.uppercase, uppercase = _c === void 0 ? false : _c;
    return (jsxRuntime.jsx(NativeButton, { buttonStyle: buttonStyle, containerStyle: containerStyle, icon: icon, iconPosition: icon && iconPosition, onPress: onPress, radius: radius, size: size, title: uppercase ? title.toUpperCase() : title, titleStyle: titleStyle }));
};

exports.Button = Button;
//# sourceMappingURL=bundle.cjs.js.map
