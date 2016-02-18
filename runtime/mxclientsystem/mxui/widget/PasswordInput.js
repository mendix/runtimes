/*
    Copyright (c) 2005-2015, Mendix bv. All rights reserved.
    See licenses.txt for third party licenses that apply.
*/

//>>built
define("mxui/widget/PasswordInput",["mxui/widget/_FormWidget","mxui/dom","dojo/dom-attr","dojo/_base/declare"],function(_1,_2,_3,_4){var $=_2.create;var _5=_4(_1,{declaredClass:"mxui.widget.PasswordInput",maxLength:0,placeholder:"",buildRendering:function(){var _6=this.editNode=$("input",{"class":"form-control",type:"password",placeholder:this.placeholder});if(this.maxLength>0){_3.set(_6,"maxlength",this.maxLength);}this.readNode=$("label");this.readNode.innerHTML="&nbsp;";this.inherited(arguments);},_getValueAttr:function(){return this.editNode.value;},_setValueAttr:function(_7){this.editNode.value=_7;}});return _5;});