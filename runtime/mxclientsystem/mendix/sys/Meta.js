
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/sys/Meta",["mendix/lib/MxMetaObject","mendix/logger"],function(_1,_2){function _3(){var _4="mendix.sys.Meta",_5=null;this.toString=function(){return _4;};this.startup=function(){_5={};dojo.forEach(window.mx.session.getConfig("metadata"),function(_6){var _7=new _1({json:_6});_5[_7.getEntity()]=_7;});};this.getMap=function(){return _5;};this.getEntity=function(_8){var _9=_5[_8];if(!_9){_2.error("No permission to read or write entity "+_8+", check security!");}return _9;};};return _3;});