/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/menuAnchorFactory",["mxui/dom","webcore/url-helpers"],function(_1,_2){var $=_1.create;var _3={create:function(_4){var _5=$("a",{href:"#","class":"mx-name-"+_4.id});if(_4.iconClass){_5.appendChild($("span",{"class":"glyphicon "+_4.iconClass}));}else{if(_4.iconUrl){_5.appendChild($("img",{src:_2.getStaticResourceUrlFromPath(_4.iconUrl)}));}}_5.appendChild(document.createTextNode(" "+_4.caption));return _5;}};return _3;});