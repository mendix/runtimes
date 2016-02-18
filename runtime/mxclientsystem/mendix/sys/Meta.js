
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/sys/Meta",["mendix/lib/MxMetaObject","mendix/logger"],function(_1,_2){function _3(){var _4="mendix.sys.Meta",_5=false,_6=null;var _7=function(_8){var _9=function(_a){_6={};for(var i=0,_b;_b=_a[i];i++){var _c=new _1({json:_b});_6[_c.getEntity()]=_c;}_8();};_9(window.mx.session.getConfig("metadata"));};this.toString=function(){return _4;};this.startup=function(_d){if(!window.mx.offline){_7(function(){_5=true;_d();});}else{_d();}};this.shutdown=function(){_5=false;_6=null;};this.isLoaded=function(){return _5;};this.getMap=function(){return _5?_6:null;};this.getEntity=function(_e){var _f=_6[_e];if(!_f){_2.error("No permission to read or write entity "+_e+", check security!");}return _f;};};return _3;});