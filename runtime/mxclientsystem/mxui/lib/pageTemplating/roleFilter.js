
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/lib/pageTemplating/roleFilter",["mxui/dom","mendix/lang","dojo/_base/array"],function(_1,_2,_3){"use strict";var _4="data-mendix-roles";function _5(_6,_7){var _8=_6.getAttribute(_7);_6.removeAttribute(_7);return _8;};function _9(_a,_b){var _c=_5(_a,_4).split(","),_d=_3.some(_c,function(_e){return _2.inArray(_b,_e);});return !_d;};return {filterDom:function(_f){if(!(_f instanceof Element)){return _f;}var _10=window.mx.session.getUserRoles("Name");if(_f.hasAttribute(_4)&&_9(_f,_10)){return null;}_3.forEach(_f.querySelectorAll("["+_4+"]"),function(_11){if(_9(_11,_10)){_1.orphan(_11);}});return _f;}};});