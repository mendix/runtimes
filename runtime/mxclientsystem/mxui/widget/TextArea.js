
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/TextArea",["mxui/widget/_FormWidget","mxui/dom","dojo/dom-construct","dojo/dom-class","dojo/dom-attr","dojo/dom-style","dojo/dom-geometry","dojo/sniff","dojo/_base/lang","dojo/_base/declare"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a){var $=_2.create;var _b=_a(_1,{declaredClass:"mxui.widget.TextArea",placeholder:"",counterMsg:"",textTooLongMsg:"",rows:0,maxLength:0,_cloneNode:null,_countNode:null,buildRendering:function(){var _c=this.editNode=$("textarea",{"class":"form-control mx-textarea-input",placeholder:this.placeholder});this.readNode=$("label");this.inherited(arguments);if(this.counterMsg){var _d=this._countNode=$("label",{"class":"mx-textarea-counter"});_3.place(_d,_c,"after");this._updateCount();this.connect(_c,"keyup","_updateCount");}_4.add(this.domNode,"mx-textarea");if(this.maxLength>0){_5.set(_c,"maxlength",this.maxLength);}if(this.rows===0){var _e=this._cloneNode=_9.clone(_c);_4.add(_e,"mx-textarea-clone");this.connect(_c,"keyup","resize");this.connect(this.mxform,"resize","resize");this.domNode.appendChild(_e);}else{_4.add(_c,"mx-textarea-input-noresize");_5.set(_c,"rows",_8("ff")?Math.max(1,this.rows-1):this.rows);}},resize:function(){if(this._cloneNode){var _f=this.editNode,_10=this._cloneNode,_11=this.get("disabled");this.domNode.appendChild(_10);_10.value=_f.value+(_11?"":"\n\n");_10.scrollTop=10000;var _12=_7.getPadExtents(_f,null).h,_13=Math.max(_10.scrollTop+_12,28);_6.set(_f,"height",_13+"px");this.domNode.removeChild(_10);}},validate:function(){var _14=this.inherited(arguments);if(_14!=null){return _14;}else{if(this.get("value")==null){return this.textTooLongMsg||window.mx.ui.translate("mendix.lib.Validations","value_too_long");}}},_updateCount:function(){_2.text(this._countNode,this.counterMsg.replace("{1}",this.editNode.value.length).replace("{2}",this.maxLength));},_getValueAttr:function(){var _15=this.editNode.value;return this.maxLength&&_15.length>this.maxLength?null:_15;},_setValueAttr:function(_16){this.editNode.value=_16;this.readNode.innerHTML=_16?_2.convertNlToBr(_2.escapeString(_16)):"&nbsp;";this.resize();}});return _b;});