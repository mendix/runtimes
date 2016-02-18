
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/PasswordInput",["dojo","dijit","dojox","dojo/require!mxui/widget/_FormWidget"],function(_1,_2,_3){_1.provide("mxui.widget.PasswordInput");_1.require("mxui.widget._FormWidget");_1.declare("mxui.widget.PasswordInput",mxui.widget._FormWidget,{maxLength:0,placeholder:"",buildRendering:function(){var $=mxui.dom.create,_4=this.editNode=$("input",{"class":"form-control",type:"password",placeholder:this.placeholder});if(this.maxLength>0){_1.attr(_4,"maxlength",this.maxLength);}this.readNode=$("label");this.readNode.innerHTML="&nbsp;";this.inherited(arguments);},_getValueAttr:function(){return this.editNode.value;},_setValueAttr:function(_5){this.editNode.value=_5;}});});