
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/PrimitiveWidgetWrapper",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.PrimitiveWidgetWrapper");_1.declare("mxui.widget.PrimitiveWidgetWrapper",[mxui.widget._WidgetBase,mxui.mixin._ValidationHelper],{widget:null,_mxobject:null,buildRendering:function(){var $=mxui.dom.create,_4=this.widget,_5=_4.domNode.parentNode;this.domNode=$("div",_4.domNode);_5.appendChild(this.domNode);this.connect(_4,"onChange",this.onChange);},startup:function(){this.widget.startup();},update:function(_6,_7){var _8=this,_9=this.widget,_a=_9.name;this._mxobject=_6;var _b=function(){_9.applyContext(_8.mxcontext,_7);};if(_a){if(_6){mx.data.fetch(_6,_a,{usexpath:true},function(_c){_9.set("value",_c);_b();},function(e){mx.onError(e);_7&&_7();});}else{_9.set("value","");_b();}}else{logger.error(this.id+".update: wrapped widget does not have name property");_b();}},enable:function(){var _d=this.widget.domNode,_e=_d.nodeName;if(_e=="SELECT"||(_e=="INPUT"&&_d.type=="checkbox")){_d.disabled=false;}else{if(_e=="INPUT"||_e=="TEXTAREA"||_e=="BUTTON"){_d.removeAttribute("readonly");_d.readOnly=false;}}_1.removeClass(_d,"MxClient_formDisabled");},disable:function(){var _f=this.widget.domNode,_10=_f.nodeName;if(_10=="SELECT"||(_10=="INPUT"&&_f.type=="checkbox")){_f.disabled=true;}else{if(_10=="INPUT"||_10=="TEXTAREA"||_10=="BUTTON"){_f.setAttribute("readonly","true");_f.readOnly=true;}}_1.addClass(_f,"MxClient_formDisabled");},onChange:function(){this._mxobject.set(this.widget.get("name"),this.widget.get("value"));},validate:function(){var _11=this.get("value"),_12=this.widget;if(_11===null){return _12.getInvalidCause?_12.getInvalidCause():"Invalid input";}if(_11===""&&_12.obligatory){return _12.obligatorycause||mx.ui.translate("mendix.lib.Validations","required_field");}},_setValueAttr:function(_13){return this.widget.set("value",_13);},_getValueAttr:function(){return this.widget.get("value");}});});