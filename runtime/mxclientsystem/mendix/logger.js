/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mendix/logger",["dojo/_base/config"],function(_1){var _2=0,_3=1,_4=2,_5=3,_6=4;var _7=_1.isDebug?_5:_6,_8=null;function _9(_a,_b){return _b===_6||_b>=_7&&(_8==null||_a.match(_8)!=null);};function _c(_d){return function(_e){Function.prototype.apply.call(console[_d],console,_e);};};return {ALL:_2,DEBUG:_3,INFO:_4,WARN:_5,ERROR:_6,level:function(_f){_7=_f;},filter:function(_10){if(typeof _10=="object"){_10=_10.id||_10.name;}_8=new RegExp(_10);},error:function(str){if(_9(str,_6)){_c("error")(arguments);}},debug:function(str){if(_9(str,_3)){_c("debug")(arguments);}},info:function(str){if(_9(str,_4)){_c("info")(arguments);}},warn:function(str){if(_9(str,_5)){_c("warn")(arguments);}},exception:function(str){if(_9(str,_6)){_c("error")(arguments);}},scream:function(str){_c("error")(arguments);}};});