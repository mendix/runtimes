
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_DynamicOptionHelper",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.mixin._DynamicOptionHelper");(function(){var _4=function(_5,_6,_7){var _8={},_9=_6.length,_a=_9;var _b=function(_c,v){_8[_c]=v;if(--_a===0){_7&&_7(_8);}};if(_9===0){_7&&_7(_8);}else{for(var i=0;i<_9;++i){_5.fetch(_6[i][0],_1.hitch(null,_b,_6[i][1]));}}};_1.declare("mxui.mixin._DynamicOptionHelper",null,{updateOptions:function(_d,_e,_f){if(typeof _f!="function"){throw new Error(this.name+".updateOptions : invalid callback");}var _10=this,_11={},_12=[];for(var i=0,_13;_13=_d[i];++i){var _14=this[_13+"Attribute"];if(_14){_12.push([_14,_13]);}else{_11[_13]=this[_13];}}_4(_e,_12,function(_15){_f.call(_10,_1.mixin({},_15,_11));});}});}());});