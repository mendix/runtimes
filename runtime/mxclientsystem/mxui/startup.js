/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/startup",["mxui/Client","dojo/hash","dojo/aspect","dojo/cookie","dojo/_base/config"],function(_1,_2,_3,_4,_5){var _6=/(?:\?|&)(profile=[^&]+)/.exec(window.location.search),_7=_6?"?"+_6[1]:"";window.mx=new _1({appUrl:_5.appbase,baseUrl:_5.xasbase,server:{timeout:_5.timeout}});_3.before(window.mx,"reload",function(){window.location.replace(window.location.pathname+_7);});_3.before(window.mx,"redirect",function(_8){window.location.href=_8+_7;});if(!_9()){window.alert("This application requires cookies to be enabled.");return;}if(!_5.preventStartup){window.mx.startup();}window.mx.addOnLoad(function(){var _a=window.mx.ui.decodeUrlHash(_2());_a?_a():window.mx.remote.execute(window.mx.session.getConfig());});function _9(){if(!/^https?:/.test(window.location.protocol)){return navigator.cookieEnabled;}else{if(navigator.cookieEnabled===false){return false;}else{_4("mx-cookie-test","allowed");var _b=_4("mx-cookie-test")==="allowed";_4("mx-cookie-test","",{expires:-1});return _b;}}};});