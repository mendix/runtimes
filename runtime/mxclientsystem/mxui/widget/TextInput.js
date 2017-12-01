/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/TextInput",["mxui/widget/_FormWidget","mxui/dom","dojo/dom-attr","dojo/_base/declare"],function(_1,_2,_3,_4){var $=_2.create;var _5=_4(_1,{declaredClass:"mxui.widget.TextInput",maxLength:0,placeholder:"",mask:"",buildRendering:function(){this.editNode=$("input",{"class":"form-control",type:"text",placeholder:this.placeholder});if(this.maxLength>0){_3.set(this.editNode,"maxlength",this.maxLength);}this.inherited(arguments);},_getValueAttr:function(){return this.editNode.value;},_setValueAttr:function(_6){this.editNode.value=_6;this.readNode.innerHTML=_6?_2.escapeString(_6):"&nbsp;";}});return _5;});