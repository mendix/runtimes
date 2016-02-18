
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/startup",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.startup");(function(){var _4=_1.config;mx=new mendix.Client({appUrl:_4.appbase,baseUrl:_4.xasbase,server:{timeout:_4.timeout}});mx.registerSubSystem("ui","mxui.sys.UI");mx.registerSubSystem("parser","mxui.sys.Parser");mx.startup();_1.connect(mx.session,"onRedeploy",function(){window.location.reload();});_1.connect(mx.session,"onRedirect",function(_5){window.location=_5;});})();});