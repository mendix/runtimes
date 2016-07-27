/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/string-set",[],function(){function _1(_2){this.__values={};for(var m in _2){this.__values[m+""]=true;}};_1.of=function(_3){var _4={};for(var i=0;i<_3.length;++i){_4[_3[i]]=true;}return new _1(_4);};_1.empty=function(){return _1.of([]);};_1.prototype.contains=function(_5){return this.__values[_5]||false;};_1.prototype.remove=function(_6){delete this.__values[_6];};_1.prototype.or=function(_7){var _8={};for(var m in this.__values){_8[m]=true;}for(var n in _7.__values){_8[n]=true;}return new _1(_8);};_1.prototype.length=function(){return this.values().length;};_1.prototype.reduce=function(fn,_9){return this.values().reduce(fn,_9);};_1.prototype.values=function(){return Object.keys(this.__values);};return _1;});