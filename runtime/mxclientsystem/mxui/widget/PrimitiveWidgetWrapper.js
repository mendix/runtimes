/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/PrimitiveWidgetWrapper",["mxui/widget/_WidgetBase","mxui/mixin/_ValidationHelper","mxui/dom","mendix/logger","dojo/dom-class","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var $=_3.create;var _7=_6([_1,_2],{declaredClass:"mxui.widget.PrimitiveWidgetWrapper",widget:null,_mxobject:null,buildRendering:function(){this.domNode=$("div");this.widget.domNode.parentNode.replaceChild(this.domNode,this.widget.domNode);this.domNode.appendChild(this.widget.domNode);this.connect(this.widget,"onChange",this.onChange);},startup:function(){this.widget.startup();},update:function(_8,_9){var _a=this;this.unsubscribeAll();this._mxobject=_8;if(this.widget.name){if(_8){this.subscribe({guid:_8.getGuid(),callback:function(){this.update(_8);}});window.mx.data.fetch(_8,this.widget.name,{usexpath:true},_b,function(e){window.mx.onError(e);if(_9){_9();}});}else{_b("");}}else{_4.error(this.id+".update: wrapped widget does not have name property");_c();}function _b(_d){_a.widget.set("value",_d);_c();};function _c(){_a.widget.applyContext(_a.mxcontext,_9||function(){});};},enable:function(){var _e=this.widget.domNode,_f=_e.nodeName;if(_f=="SELECT"||(_f=="INPUT"&&_e.type=="checkbox")){_e.disabled=false;}else{if(_f=="INPUT"||_f=="TEXTAREA"||_f=="BUTTON"){_e.removeAttribute("readonly");_e.readOnly=false;}}_5.remove(_e,"MxClient_formDisabled");},disable:function(){var _10=this.widget.domNode,_11=_10.nodeName;if(_11=="SELECT"||(_11=="INPUT"&&_10.type=="checkbox")){_10.disabled=true;}else{if(_11=="INPUT"||_11=="TEXTAREA"||_11=="BUTTON"){_10.setAttribute("readonly","true");_10.readOnly=true;}}_5.add(_10,"MxClient_formDisabled");},onChange:function(){this._mxobject.set(this.widget.get("name"),this.widget.get("value"));},validate:function(){var _12=this.get("value"),_13=this.widget;if(_12===null){return _13.getInvalidCause?_13.getInvalidCause():"Invalid input";}if(_12===""&&_13.obligatory){return _13.obligatorycause||window.mx.ui.translate("mendix.lib.Validations","required_field");}},_setValueAttr:function(_14){return this.widget.set("value",_14);},_getValueAttr:function(){return this.widget.get("value");}});return _7;});