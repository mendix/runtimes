
/* Copyright (c) 2005-2012, Mendix bv. All rights reserved. */

//>>built
define("mxui/widget/Confirmation",["mxui/widget/Dialog","mxui/dom","mendix/logger","dojo/_base/declare"],function(_1,_2,_3,_4){var _5=_4(_1,{declaredClass:"mxui.widget.Confirmation",cancel:"",proceed:"",handler:null,modal:true,buildRendering:function(){var $=_2.create,_6=$("button",{"class":"btn"},this.cancel),_7=$("button",{"class":"btn btn-primary"},this.proceed),_8;this.caption=this.caption||this.translate("caption");this.inherited(arguments);var _9=$("p");_9.innerHTML=_2.convertNlToBr(_2.escapeString(this.content));this.setContent(_9);this.setButtons([_7,_6]);this.connect(_6,"click",function(){this.hide();});this.connect(_7,"click",function(){this.hide();this.handler();});}});return _5;});