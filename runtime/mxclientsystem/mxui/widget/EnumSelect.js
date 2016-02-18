/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/EnumSelect",["mxui/widget/_FormWidget","mxui/dom","dojo/_base/declare"],function(_1,_2,_3){var _4=_3(_1,{declaredClass:"mxui.widget.EnumSelect",_keys:null,buildRendering:function(){var $=_2.create,_5=window.mx.meta.getEntity(this._entity),_6=this._keys=_5.getEnumKVPairs(this._attribute),_7=this.editNode=$("select",{"class":"form-control"},$("option",{value:""},""));for(var _8 in _6){_7.appendChild($("option",{value:_8},_6[_8]));}this.inherited(arguments);},_getValueAttr:function(){return this.editNode.value;},_setValueAttr:function(_9){this.editNode.value=_9;var _a=this._keys[_9];if(_a){_2.text(this.readNode,_a);}else{this.readNode.innerHTML="&nbsp;";}}});return _4;});