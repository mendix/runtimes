/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/VerticalScrollContainer",["mendix/lang","mxui/widget/_ScrollContainer","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_2,{declaredClass:"mxui.widget.VerticalScrollContainer",startup:function(){this.inherited(arguments);_1.forEach(["top","bottom"],function(_5){var _6=this._regions[_5];if(_6&&_6.wrapper.style.height){_6.heightSpecified=true;_6.wrapper.style.overflow="auto";}},this);},resize:function(_7){var _8=_7?_7.h:undefined;_1.forEach(["top","bottom"],function(_9){var _a=this._regions[_9];if(_a){this.resizeChildren(_a.wrapper,!_a.heightSpecified);_8-=_a.node.offsetHeight;}},this);this._resizeRegions({middle:this._regions.middle},_8);}});return _4;});