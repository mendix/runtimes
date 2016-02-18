
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mendix/logger",["dojo/_base/config","dojo/_base/lang"],function(_1,_2){var _3={},_4=_3.ALL=0,_5=_3.DEBUG=1,_6=_3.INFO=2,_7=_3.WARN=3,_8=_3.ERROR=4;if(_1.isDebug){var _9=_7,_a=null;var _b=function(_c,_d){if(_d>=_9||_d==_8){return (_a==null||_d==_8)?true:(_c.match(_a)!=null);}else{return false;}};return _2.mixin(_3,{level:function(_e){_9=_e;},filter:function(_f){if(typeof _f=="object"){_f=_f.id||_f.name;}_a=new RegExp(_f);},error:function(str){if(_b(str,_8)){console.error.apply(console,arguments);}},debug:function(str){if(_b(str,_5)){console.debug.apply(console,arguments);}},info:function(str){if(_b(str,_6)){console.info.apply(console,arguments);}},warn:function(str){if(_b(str,_7)){console.warn.apply(console,arguments);}},exception:function(str){console.error.apply(console,arguments);},scream:function(str){console.error.apply(console,arguments);}});}else{var nop=function(){},_10=_2.hitch(console,"error");return _2.mixin(_3,{level:nop,filter:nop,error:nop,debug:nop,info:nop,warn:nop,exception:_10,scream:_10});}});