
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/startup",["mendix/Client","dojo/_base/config","dojo/aspect"],function(_1,_2,_3){window.mx=new _1({appUrl:_2.appbase,baseUrl:_2.xasbase,server:{timeout:_2.timeout}});window.mx.registerSubSystem("ui","mxui.sys.UI");window.mx.registerSubSystem("parser","mxui.sys.Parser");window.mx.startup();_3.after(window.mx.session,"onRedeploy",function(){window.location.reload();},true);_3.after(window.mx.session,"onRedirect",function(_4){window.location=_4;},true);});