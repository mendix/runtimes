/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/menuAnchorFactory",["mxui/dom"],function(_1){var $=_1.create;var _2={create:function(_3){var _4=$("a",{href:"#","class":"mx-name-"+_3.id});if(_3.iconClass){_4.appendChild($("span",{"class":"glyphicon "+_3.iconClass}));}else{if(_3.iconUrl){_4.appendChild($("img",{src:window.mx.appUrl+_3.iconUrl}));}}_4.appendChild(document.createTextNode(" "+_3.caption));return _4;}};return _2;});