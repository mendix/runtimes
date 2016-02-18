
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/lib/overflowHelper",["../../dojo/dom-style"],function(_1){var _2={showOverflow:function(_3){_4(_3,true);},hideOverflow:function(_5){_4(_5,false);}};function _6(_7,_8){var _9=document.documentElement;while(_7=_7.parentNode){if(_7===_9||_1.get(_7,"overflow")===_8){return _7;}}};function _4(_a,_b){var _c=_6(_a,_b?"hidden":"auto");if(_c){if(_c.clientHeight>=_c.scrollHeight){_1.set(_c,"overflow",_b?"auto":"hidden");}}};return _2;});