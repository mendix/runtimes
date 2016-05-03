/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/lib/pageTemplating/PageComponent",["dojo/_base/array","dojo/_base/lang"],function(_1,_2){"use strict";function _3(id,_4){this._id=id;this._content=_4;};_3.prototype.findPlaceholder=function(_5){return _5.querySelector("[data-mx-placeholder='"+this._id+"']");};_3.prototype.appendTo=function(_6){_1.forEach(this._content,_2.hitch(_6,_6.appendChild));};return _3;});