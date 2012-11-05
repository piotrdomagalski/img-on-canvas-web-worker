"use strict";

var DOMURL = self.URL || self.webkitURL;
var interval = 2000;

function performRequest() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://lorempixel.com/640/480/');
	xhr.responseType = 'blob';
	xhr.onload = function (e) {
		postMessage(DOMURL.createObjectURL(this.response));
		setTimeout(performRequest, interval);
	};
	xhr.send();
}

performRequest();
