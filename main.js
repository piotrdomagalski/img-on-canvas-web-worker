"use strict";

var ctxt = document.getElementById('#canvas').getContext('2d');
var img = new Image();

var worker = new Worker('worker.js');
var DOMURL = self.URL || self.webkitURL;

worker.onmessage = function (event) {
	img.onload = function (e) {
		ctxt.drawImage(this, 0, 0);
		DOMURL.revokeObjectURL(event.data);
	};
	img.src = event.data;
};
