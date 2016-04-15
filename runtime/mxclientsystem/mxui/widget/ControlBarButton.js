/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/ControlBarButton",["mxui/widget/_DynamicButton","dojo/_base/declare"],function(_1,_2){var _3=_2(_1,{declaredClass:"mxui.widget.ControlBarButton",alwaysHidden:false,_isConditionallyVisible:true,buildRendering:function(){this.inherited(arguments);if(this.alwaysHidden){this.domNode.style.display="none";}},hide:function(){this._isConditionallyVisible=false;this.domNode.style.display="none";},show:function(){this._isConditionallyVisible=true;if(!this.alwaysHidden){this.domNode.style.display="";}},isConditionallyVisible:function(){return this._isConditionallyVisible;}});return _3;});