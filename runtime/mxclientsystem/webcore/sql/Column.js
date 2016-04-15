/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/sql/Column",[],function(){function _1(_2){if(!(this instanceof _1)){return new _1(_2);}if(_2 instanceof _1){this._column=_2._column;}else{this._column=_2;}};_1.prototype.apply1=function(_3){return new _1(_3+"("+this._column+")");};_1.prototype.toString=function(){return this._column;};return _1;});