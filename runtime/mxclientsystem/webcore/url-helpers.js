/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/url-helpers",["mendix/lang"],function(_1){var _2={};_2.getAbsoluteUrl=function(_3){return mx.appUrl+_3;};_2.getStaticResourceUrlFromPath=function(_4){return _2.getAbsoluteUrl(_4);};_2.getStaticResourceUrl=function(_5){if(!/^\w+:\/\//.test(_5)){_5=_2.getStaticResourceUrlFromPath(_5);}var _6=mx.server.getCacheBust();if(_1.startsWith(_5,mx.appUrl)&&!_1.endsWith(_5,_6)){_5+=(/\?/.test(_5)?"&":"?")+_6;}return _5;};_2.getDynamicResourceUrl=function(_7,_8,_9){var _a=mx.appUrl+"file?"+["guid="+_7,"changedDate="+_8].join("&");if(_9){_a+="&thumb=true";}return _a;};return _2;});