/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/pageTemplating/TemplateProvider",["dojo/_base/lang"],function(_1){function _2(){this._templates={};};_2.prototype.add=function(_3){_1.mixin(this._templates,_3);};_2.prototype.get=function(id,_4){var _5=this._templates[id];return _5&&_1.clone(_5[_4]);};return _2;});