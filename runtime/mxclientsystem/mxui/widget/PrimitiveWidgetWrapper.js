
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/PrimitiveWidgetWrapper",["mxui/widget/_WidgetBase","mxui/mixin/_ValidationHelper","mxui/dom","mendix/logger","dojo/dom-class","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6){var $=_3.create;var _7=_6([_1,_2],{declaredClass:"mxui.widget.PrimitiveWidgetWrapper",widget:null,_mxobject:null,buildRendering:function(){var _8=this.widget,_9=_8.domNode.parentNode;this.domNode=$("div",_8.domNode);_9.appendChild(this.domNode);this.connect(_8,"onChange",this.onChange);},startup:function(){this.widget.startup();},update:function(_a,_b){var _c=this,_d=this.widget,_e=_d.name;this._mxobject=_a;var _f=function(){_d.applyContext(_c.mxcontext,_b);};if(_e){if(_a){window.mx.data.fetch(_a,_e,{usexpath:true},function(_10){_d.set("value",_10);_f();},function(e){window.mx.onError(e);_b&&_b();});}else{_d.set("value","");_f();}}else{_4.error(this.id+".update: wrapped widget does not have name property");_f();}},enable:function(){var _11=this.widget.domNode,_12=_11.nodeName;if(_12=="SELECT"||(_12=="INPUT"&&_11.type=="checkbox")){_11.disabled=false;}else{if(_12=="INPUT"||_12=="TEXTAREA"||_12=="BUTTON"){_11.removeAttribute("readonly");_11.readOnly=false;}}_5.remove(_11,"MxClient_formDisabled");},disable:function(){var _13=this.widget.domNode,_14=_13.nodeName;if(_14=="SELECT"||(_14=="INPUT"&&_13.type=="checkbox")){_13.disabled=true;}else{if(_14=="INPUT"||_14=="TEXTAREA"||_14=="BUTTON"){_13.setAttribute("readonly","true");_13.readOnly=true;}}_5.add(_13,"MxClient_formDisabled");},onChange:function(){this._mxobject.set(this.widget.get("name"),this.widget.get("value"));},validate:function(){var _15=this.get("value"),_16=this.widget;if(_15===null){return _16.getInvalidCause?_16.getInvalidCause():"Invalid input";}if(_15===""&&_16.obligatory){return _16.obligatorycause||window.mx.ui.translate("mendix.lib.Validations","required_field");}},_setValueAttr:function(_17){return this.widget.set("value",_17);},_getValueAttr:function(){return this.widget.get("value");}});return _7;});