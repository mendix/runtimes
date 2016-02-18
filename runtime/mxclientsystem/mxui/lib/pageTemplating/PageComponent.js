
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/lib/pageTemplating/PageComponent",["dojo/_base/array","dojo/_base/lang"],function(_1,_2){"use strict";function _3(id,_4,_5){this._id=id;this._content=_4;this.isMain=_5;};_3.prototype.findPlaceholder=function(_6){return _6.querySelector("[data-mx-placeholder='"+this._id+"']");};_3.prototype.appendTo=function(_7){_1.forEach(this._content,_2.hitch(_7,_7.appendChild));};return _3;});