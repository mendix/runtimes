
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/sys/Config",["mendix/logger","dojo/Deferred","dojo/_base/kernel"],function(_1,_2,_3){function _4(){var _5="mxui.sys.Config",_6=false;this.toString=function(){return _5;};this.startup=function(_7){_6=true;_7();};this.shutdown=function(){_6=false;};this.isLoaded=function(){return _6;};this.getForm=function(_8){var _9=null;if(!_8.callback){_3.deprecated(_5+".getForm","getForm requires one parameter: getForm({ url: url, callback: callback, error: error })","3.1");_9=new _2();}window.mx.ui.getForm(_8.url,{error:_8.error,callback:function(_a){(_9||_8)["callback"](_a.domNode,_a.id);}});return _9;};};return _4;});