/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/logger",["dojo/_base/config"],function(_1){var _2=0,_3=1,_4=2,_5=3,_6=4;var _7=_1.isDebug?_5:_6,_8=null;function _9(_a,_b){return _b===_6||_b>=_7&&(_8==null||_a.match(_8)!=null);};return {ALL:_2,DEBUG:_3,INFO:_4,WARN:_5,ERROR:_6,level:function(_c){_7=_c;},filter:function(_d){if(typeof _d=="object"){_d=_d.id||_d.name;}_8=new RegExp(_d);},error:function(_e){if(_9(_e,_6)){console.error.apply(console,arguments);}},debug:function(_f){if(_9(_f,_3)){console.debug.apply(console,arguments);}},info:function(str){if(_9(str,_4)){console.info.apply(console,arguments);}},warn:function(str){if(_9(str,_5)){console.warn.apply(console,arguments);}},exception:function(str){if(_9(str,_6)){console.error.apply(console,arguments);}},scream:function(str){console.error.apply(console,arguments);}};});