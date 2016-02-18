
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/sys/Config",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.sys.Config");mxui.sys.Config=function(_4){_4=_4||{};var _5=this,_6="mxui.sys.Config",_7=false;this.toString=function(){return _6;};this.startup=function(_8){_7=true;_8();};this.shutdown=function(){_7=false;};this.isLoaded=function(){return _7;};this.getForm=function(_9){if(!_9.callback){_1.deprecated(_6+".getForm requires one parameter: getForm({ url: url, callback: callback, error: error })","","3.1");var _a=new _1.Deferred();}mx.ui.getForm(_9.url,{error:_9.error,callback:function(_b){(_a||_9)["callback"](_b.domNode,_b.id);}});return _a;};};});