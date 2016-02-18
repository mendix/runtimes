
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/html/common",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.html.common");mxui.html.attrs={ForRole:"visibleForRoles",FormTitle:"formTitle"};mxui.html.dispatchEvent=function(_4,_5){if(_1.isIE){_4.fireEvent&&_4.fireEvent([_5]);}else{var _6=document.createEvent("HTMLEvents");_6.initEvent(_5.substr(2,_5.length),true,true);_4.dispatchEvent(_6);}};mxui.html.stripTags=function(_7){if(_1.isString(_7)){return _7.replace(/<[a-zA-Z\/][^>]*>/g," ");}else{return _7;}};mxui.html.escapeQuotes=function(_8){_8=_8.replace(/\'/g,"&#39;");return _8.replace(/\"/g,"&#34;");};});