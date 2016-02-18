
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/mixin/_OverflowHelper",["dojo/dom-style","dojo/_base/declare"],function(_1,_2){var _3=_2(null,{getOverflowNode:function(_4,_5){if(!this._flowNode){var _6=document.documentElement;while(_4=_4.parentNode){if(_4===_6||_1.get(_4,"overflow")===_5){return _4;}}}return this._flowNode;},_toggleOverflow:function(_7,_8){_7=_7||this.domNode;var _9=this.getOverflowNode(_7,_8?"hidden":"auto");if(_9){if(_9.clientHeight>=_9.scrollHeight){_1.set(_9,"overflow",_8?"auto":"hidden");}}},showOverflow:function(_a){this._toggleOverflow(_a,true);},hideOverflow:function(_b){this._toggleOverflow(_b,false);}});return _3;});