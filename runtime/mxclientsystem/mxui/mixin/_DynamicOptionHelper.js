
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_DynamicOptionHelper",["mendix/logger","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3){var _4=function(_5,_6,_7){var _8={},_9=_6.length,_a=_9;var _b=function(_c,v){_8[_c]=v;if(--_a===0){_7&&_7(_8);}};if(_9===0){_7&&_7(_8);}else{for(var i=0;i<_9;++i){_5.fetch(_6[i][0],_2.hitch(null,_b,_6[i][1]));}}};var _d=_3(null,{updateOptions:function(_e,_f,_10){if(typeof _10!="function"){throw new Error(this.name+".updateOptions : invalid callback");}var _11=this,_12={},_13=[];for(var i=0,_14;_14=_e[i];++i){var _15=this[_14+"Attribute"];if(_15){_13.push([_15,_14]);}else{_12[_14]=this[_14];}}_4(_f,_13,function(_16){_10.call(_11,_2.mixin({},_16,_12));});}});return _d;});