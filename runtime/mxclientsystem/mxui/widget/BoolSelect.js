/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/BoolSelect",["mxui/widget/_FormWidget","mxui/dom","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.BoolSelect",_value:false,buildRendering:function(){var $=_2.create,_5=this.editNode=$("input",{type:"checkbox"});this.readNode=$("label");this.inherited(arguments);},onChange:function(e){if(this._value!=this.editNode.checked){this._value=this.editNode.checked;this.inherited(arguments);}},_getValueAttr:function(){return this.editNode.checked;},_setValueAttr:function(_6){this.editNode.checked=this._value=_6;_2.text(this.readNode,window.mx.parser.formatValue(_6,"Boolean"));}});return _4;});