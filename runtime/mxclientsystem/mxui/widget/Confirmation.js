
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Confirmation",["dojo","dijit","dojox"],function(_1,_2,_3){_1.provide("mxui.widget.Confirmation");_1.declare("mxui.widget.Confirmation",mxui.widget.Dialog,{cancel:"",proceed:"",handler:null,modal:true,buildRendering:function(){var $=mxui.dom.create,_4=$("button",{"class":"btn"},this.cancel),_5=$("button",{"class":"btn btn-primary"},this.proceed),_6;this.caption=this.caption||this.translate("caption");this.inherited(arguments);var _7=$("p");_7.innerHTML=mxui.dom.convertNlToBr(mxui.dom.escapeString(this.content));this.setContent(_7);this.setButtons([_5,_4]);this.connect(_4,"click",function(){this.hide();});this.connect(_5,"click",function(){this.hide();this.handler();});}});});