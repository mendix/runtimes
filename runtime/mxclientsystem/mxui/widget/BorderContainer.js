/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/BorderContainer",["mxui/mixin/_Stateful","mxui/html/parser","mendix/lang","dojo/_base/lang","dojo/_base/declare","dijit/layout/BorderContainer"],function(_1,_2,_3,_4,_5,_6){var _7=_5([_6,_1],{startup:function(){if(this.doParse===false){_2.parseTopLevel(this.domNode,{mxform:this.mxform},this.uniqueid);}this.inherited(arguments);var _8=this.getState("splitterPosition",""),_9=this._getSplitter();if(_8){_9.child.domNode.style[_9.horizontal?"height":"width"]=_8;}},storeState:function(_a){var _b=this._getSplitter(),_c=_b.child.domNode.style[_b.horizontal?"height":"width"];_a("splitterPosition",_c);},_getSplitter:function(){var _d=_3.find(this.getChildren(),function(_e){return _e._splitterWidget!==undefined;});return _d._splitterWidget;}});return _7;});