/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/Multimap",[],function(){function _1(_2){this.__values=_2;};_1.fromObject=function(_3){return new _1(_3);};_1.empty=_1.prototype.empty=function(){return new _1({});};_1.prototype.concat=function(_4){var _5={};for(var k in this.__values){if(k in _4.__values){_5[k]=this.__values[k].concat(_4.__values[k]);}else{_5[k]=this.__values[k];}}for(k in _4.__values){if(!(k in this.__values)){_5[k]=_4.__values[k];}}return new _1(_5);};_1.prototype.get=function(){return this.__values;};_1.prototype.toString=function(){return "Multimap"+this.__values;};return _1;});