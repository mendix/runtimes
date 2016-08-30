/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("webcore/assign",[],function(){if(typeof Object.assign!="function"){Object.assign=function(_1){"use strict";if(_1==null){throw new TypeError("Cannot convert undefined or null to object");}_1=Object(_1);for(var _2=1;_2<arguments.length;_2++){var _3=arguments[_2];if(_3!=null){for(var _4 in _3){if(Object.prototype.hasOwnProperty.call(_3,_4)){_1[_4]=_3[_4];}}}}return _1;};}});