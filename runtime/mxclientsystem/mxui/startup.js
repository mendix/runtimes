/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/startup",["mendix/sys/Meta","mendix/sys/Server","mendix/sys/XAS","mendix/sys/Data","mendix/sys/Session","mendix/sys/Remote","mxui/Client","mxui/sys/UI","mxui/sys/Parser","dojo/hash","dojo/aspect","dojo/cookie","dojo/_base/config"],function(_1,_2,_3,_4,_5,_6,_7,UI,_8,_9,_a,_b,_c){window.mx=new _7({appUrl:_c.appbase,baseUrl:_c.xasbase,server:{timeout:_c.timeout}});_a.before(window.mx,"reload",function(){window.location.reload();});_a.before(window.mx,"redirect",function(_d){window.location=_d;});if(!_b.isSupported()){window.mx.onError("This application requires cookies to be enabled");return;}if(!_c.preventStartup){window.mx.startup();}window.mx.addOnLoad(function(){var _e=window.mx.ui.decodeUrlHash(_9());_e?_e():window.mx.remote.execute(window.mx.session.getConfig());});});