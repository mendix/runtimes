/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/browserBackend",[],function(){"use strict";var _1={history:{back:function(){window.history.back();},forward:function(){window.history.forward();},pushState:function(_2,_3,_4){window.history.pushState(_2,_3,_4);},replaceState:function(_5,_6,_7){window.history.replaceState(_5,_6,_7);},onPopstate:function(_8){window.addEventListener("popstate",_8,false);}},location:{pathname:function(){var _9=window.location.pathname;if(_9.charAt(0)!=="/"){_9="/"+_9;}return _9;},search:function(){return window.location.search;},hash:function(){return window.location.hash;}},setTimeout:function(fn,_a){return window.setTimeout(fn,_a);},title:function(_b){if(typeof _b!=="undefined"){window.document.title=_b;}return window.document.title;}};return _1;});