/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/startup",["mxui/Client","dojo/hash","dojo/aspect","dojo/cookie","dojo/_base/config"],function(_1,_2,_3,_4,_5){var _6=/(?:\?|&)(profile=[^&]+)/.exec(window.location.search),_7=_6?"?"+_6[1]:"",_8=_2();window.mx=new _1(_5);_3.before(window.mx,"reload",function(){window.location.replace(window.location.pathname+_7);});_3.before(window.mx,"redirect",function(_9){window.location.href=_9+_7;});if(!_a()){window.alert("This application requires cookies to be enabled.");return;}if(!_5.preventStartup){window.mx.startup();}window.mx.addOnLoad(function(){var _b=window.mx.ui.decodeUrlHash(_8);_b?_b():window.mx.remote.execute(window.mx.session.getConfig());});function _a(){if(!/^https?:/.test(window.location.protocol)){return navigator.cookieEnabled;}else{if(navigator.cookieEnabled===false){return false;}else{_4("mx-cookie-test","allowed");var _c=_4("mx-cookie-test")==="allowed";_4("mx-cookie-test","",{expires:-1});return _c;}}};});