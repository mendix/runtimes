/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/browserBackend",[],function(){"use strict";var _1={history:{back:function(){window.history.back();},forward:function(){window.history.forward();}},location:{hash:function(_2){if(_2){window.location.hash=_2;}return window.location.hash;},replace:function(_3){return window.location.replace(_3);},pathname:function(_4){if(_4){window.location.pathname=_4;}return window.location.pathname;}},setTimeout:function(fn,_5){return window.setTimeout(fn,_5);},on:function(_6,_7,_8,_9){if(window.addEventListener){return _6["addEventListener"](_7,_8,_9);}else{return _6["attachEvent"]("on"+_7,_8);}},off:function(_a,_b,_c,_d){if(window.addEventListener){_a["removeEventListener"](_b,_c,_d);}else{_a["detachEvent"](_b,_c);}}};if("pushState" in window.history){_1.history.pushState=function(_e,_f,url){window.history.pushState(_e,_f,url);};_1.history.replaceState=function(_10,_11,url){window.history.replaceState(_10,_11,url);};}return _1;});