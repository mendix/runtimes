
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/NumberInput",["mxui/widget/_FormWidget","mxui/dom","mendix/logger","dojo/i18n","dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7){var $=_2.create;var _8=_7(_1,{declaredClass:"mxui.widget.NumberInput",formatted:false,precision:"",placeholder:"",_type:"",_opts:null,_numloc:null,_mouseupcon:null,buildRendering:function(){this.editNode=$("input",{"class":"form-control",type:"text",placeholder:this.placeholder});this.readNode=$("label");var _9=window.mx.meta.getEntity(this._entity);this._type=_9.getAttributeType(this._attribute);this._opts={groups:this.formatted};if(this.precision!==""){this._opts.places=this.precision;}this._locale=_4.getLocalization("dojo.cldr","number",_5.locale);this.inherited(arguments);},connectEvents:function(){this.connect(this.editNode,"focus","onFocus");this.connect(this.editNode,"blur","onBlur");},_getValueAttr:function(){var _a=this.editNode.value.replace(this._locale.group,"","g").replace(this._locale.decimal,".");var _b=window.mx.parser.parseValue(_a,this._type,{locale:"en"});return isNaN(_b)?null:_b;},_setValueAttr:function(_c){var _d=window.mx.parser.formatValue(_c,this._type,this._opts);this.editNode.value=_d;this.readNode.innerHTML=_d||"&nbsp;";},_match:function(_e,_f,pos){if(_e==_f){return Math.min(_e.length,pos);}var _10=0,len=Math.min(_f.length,pos),_11,_12;for(var i=0;i<len&&_10<_e.length;++i){_11=_f[i];_12=_e[_10];if(_11==_12){++_10;}}return _10;},onFocus:function(){this.handleEvent("focus");var _13=this.editNode,_14=_13.value,_15=window.mx.parser.parseValue(_14,this._type);if(isNaN(_15)){return;}var _16=_14.split(this._locale.group).join("");if(_16!=_14){setTimeout(_6.hitch(this,function(){this._disconnectMouseUp();var sel=mxui.dom.getSelection(_13);if(sel.start===0&&sel.end==_14.length){_13.value=_16;mxui.dom.selectTextRange(_13,0,_16.length);}else{this._mouseupcon=this.connect(_13,"mouseup",function(){setTimeout(_6.hitch(this,function(){sel=mxui.dom.getSelection(_13);_13.value=_16;var _17=this._match(_16,_14,sel.start),end=this._match(_16,_14,sel.end);mxui.dom.selectTextRange(_13,_17,end);}),0);this._disconnectMouseUp();});}}),0);}},onBlur:function(){this._disconnectMouseUp();this.onChange();this.handleEvent("blur");},validate:function(){var _18=this.inherited(arguments),_19=this.get("value");if(_18!=null){return _18;}else{if(mendix.lang.numberTooBig(_19)){return window.mx.ui.translate("mendix.lib.Validations","number_too_big");}else{if(_19==null){return window.mx.ui.translate("mendix.lib.Validations",this.getType()=="Currency"?"invalid_currency":"invalid_number");}else{if(/Integer|Long|AutoNumber/.test(this.getType())&&_19%1){return window.mx.ui.translate("mendix.lib.Validations","invalid_number");}}}}},_disconnectMouseUp:function(){if(this._mouseupcon){this.disconnect(this._mouseupcon);this._mouseupcon=null;}}});return _8;});