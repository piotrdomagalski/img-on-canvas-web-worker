Drawing images on canvas with Web Worker
========================================

This is a simple demonstration how to download remote images (assuming the image server supports
[CORS](http://www.html5rocks.com/en/tutorials/cors/)) in a Web Worker and draw them on a canvas in
the main UI browser thread.

It uses [XMLHttpRequest2](http://www.html5rocks.com/en/tutorials/file/xhr2/) to fetch image as a
blob and then pases the URL created with `window.URL.createObjectURL` to the main UI thread.

Beware that this code is not optimized in any way, e.g. as far as memory consumption is concerned.
In the current form it constantly creates function objects, etc.

License
-------

This is free and unencumbered software released into the public domain. For more information, please
refer to <http://unlicense.org/>
