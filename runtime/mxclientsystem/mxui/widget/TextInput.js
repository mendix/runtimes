
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/TextInput",["dojo","dijit","dojox","dojo/require!mxui/widget/_FormWidget"],function(_1,_2,_3){_1.provide("mxui.widget.TextInput");_1.require("mxui.widget._FormWidget");_1.declare("mxui.widget.TextInput",mxui.widget._FormWidget,{maxLength:0,placeholder:"",mask:"",buildRendering:function(){var $=mxui.dom.create;this.editNode=$("input",{"class":"form-control",type:"text",placeholder:this.placeholder});if(this.maxLength>0){_1.attr(this.editNode,"maxlength",this.maxLength);}this.readNode=$("label");this.inherited(arguments);},_getValueAttr:function(){return this.editNode.value;},_setValueAttr:function(_4){this.editNode.value=_4;this.readNode.innerHTML=_4?mxui.dom.escapeString(_4):"&nbsp;";}});});